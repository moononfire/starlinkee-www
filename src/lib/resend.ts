// Audience id lookups are cached per warm serverless instance to avoid
// re-listing audiences on every subscribe request.
const audienceIdCache = new Map<string, string>();

export async function getOrCreateResendAudience(name: string): Promise<string | null> {
  if (audienceIdCache.has(name)) return audienceIdCache.get(name)!;

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return null;
  const headers = { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" };

  const listRes = await fetch("https://api.resend.com/audiences", { headers });
  if (listRes.ok) {
    const { data } = await listRes.json();
    const existing = (data as Array<{ id: string; name: string }>).find((a) => a.name === name);
    if (existing) {
      audienceIdCache.set(name, existing.id);
      return existing.id;
    }
  }

  const createRes = await fetch("https://api.resend.com/audiences", {
    method: "POST",
    headers,
    body: JSON.stringify({ name }),
  });
  if (!createRes.ok) return null;
  const created = await createRes.json();
  audienceIdCache.set(name, created.id);
  return created.id;
}
