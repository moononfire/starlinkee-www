import { NextRequest, NextResponse } from "next/server";
import { getDueSubscribers, advanceSubscriber } from "@/lib/supabase";
import { getSequenceEmail, getMaxStep, sendTrackedEmail } from "@/lib/sequence-emails";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const subscribers = await getDueSubscribers();
  const results = { sent: 0, skipped: 0, errors: 0 };

  for (const sub of subscribers) {
    const email = getSequenceEmail(sub.source, sub.sequence_step);

    if (!email) {
      await advanceSubscriber(sub.id, sub.sequence_step, null);
      results.skipped++;
      continue;
    }

    const ok = await sendTrackedEmail(sub.email, sub.source, sub.sequence_step, email.subject, email.html);
    if (!ok) {
      results.errors++;
      continue;
    }

    const nextStep = sub.sequence_step + 1;
    const maxStep = getMaxStep(sub.source);
    const nextSendAt =
      nextStep <= maxStep
        ? new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
        : null;

    await advanceSubscriber(sub.id, nextStep, nextSendAt);
    results.sent++;
  }

  return NextResponse.json({ ok: true, ...results });
}
