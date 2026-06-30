const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

async function supabaseFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers ?? {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase error ${res.status}: ${text}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ─── Subscribers ────────────────────────────────────────────────────────────

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  sequence_step: number;
  next_send_at: string | null;
  unsubscribed_at: string | null;
}

export async function upsertSubscriber(email: string, source: string) {
  const nextSendAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();
  await supabaseFetch("/newsletter_subscribers", {
    method: "POST",
    headers: { Prefer: "resolution=ignore-duplicates,return=representation" },
    body: JSON.stringify({ email, source, sequence_step: 1, next_send_at: nextSendAt }),
  });
}

export async function getDueSubscribers(): Promise<Subscriber[]> {
  const now = new Date().toISOString();
  return supabaseFetch(
    `/newsletter_subscribers?select=*&next_send_at=lte.${now}&unsubscribed_at=is.null`
  );
}

export async function advanceSubscriber(id: string, nextStep: number, nextSendAt: string | null) {
  await supabaseFetch(`/newsletter_subscribers?id=eq.${id}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ sequence_step: nextStep, next_send_at: nextSendAt }),
  });
}

// ─── Sends & Tracking ───────────────────────────────────────────────────────

export async function recordSend(
  email: string,
  source: string,
  step: number,
  subject: string
): Promise<string> {
  const rows = await supabaseFetch("/newsletter_sends", {
    method: "POST",
    body: JSON.stringify({ email, source, step, subject }),
  });
  return rows[0].id as string;
}

export async function recordOpen(sendId: string) {
  await supabaseFetch("/newsletter_opens", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ send_id: sendId }),
  });
}

export async function recordClick(sendId: string, url: string) {
  await supabaseFetch("/newsletter_clicks", {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ send_id: sendId, url }),
  });
}

// ─── Dashboard ──────────────────────────────────────────────────────────────

export interface DashboardData {
  subscribers: Array<{ source: string; sequence_step: number; unsubscribed_at: string | null }>;
  sends: Array<{ id: string; email: string; source: string; step: number; subject: string; sent_at: string }>;
  opens: Array<{ send_id: string }>;
  clicks: Array<{ send_id: string; url: string }>;
}

export async function getDashboardData(): Promise<DashboardData> {
  const [subscribers, sends, opens, clicks] = await Promise.all([
    supabaseFetch("/newsletter_subscribers?select=source,sequence_step,unsubscribed_at"),
    supabaseFetch("/newsletter_sends?select=*&order=sent_at.desc&limit=200"),
    supabaseFetch("/newsletter_opens?select=send_id"),
    supabaseFetch("/newsletter_clicks?select=send_id,url"),
  ]);
  return { subscribers: subscribers ?? [], sends: sends ?? [], opens: opens ?? [], clicks: clicks ?? [] };
}
