import { cookies } from "next/headers";
import AdminLogin from "@/components/admin/AdminLogin";
import { realmCookie, verifyAdminSession } from "@/lib/adminAuth";
import { getStats, type Count } from "@/lib/analytics";

interface Props {
  searchParams: Promise<{ from?: string; to?: string; days?: string; campaign?: string; e?: string }>;
}

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;
const iso = (d: Date) => d.toISOString().slice(0, 10);

function resolveRange(p: { from?: string; to?: string; days?: string }) {
  const today = new Date();
  if (p.from && p.to && DAY_RE.test(p.from) && DAY_RE.test(p.to) && !Number.isNaN(Date.parse(p.from)) && !Number.isNaN(Date.parse(p.to))) {
    return p.from <= p.to ? { from: p.from, to: p.to } : { from: p.to, to: p.from };
  }
  const days = [7, 30, 90].includes(Number(p.days)) ? Number(p.days) : 30;
  return { from: iso(new Date(today.getTime() - (days - 1) * 86_400_000)), to: iso(today) };
}

const card: React.CSSProperties = { border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, background: "#fff" };

function Bars({ title, rows, testId }: { title: string; rows: Count[]; testId: string }) {
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <section style={card} data-testid={testId}>
      <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 10 }}>{title}</h2>
      {rows.length === 0 ? (
        <p style={{ color: "#9ca3af", fontSize: 13 }}>Brak danych</p>
      ) : (
        <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key}>
                <td style={{ padding: "3px 8px 3px 0", wordBreak: "break-all", width: "50%" }}>{r.key}</td>
                <td style={{ padding: "3px 0", width: "40%" }}>
                  <div style={{ background: "#2563eb", height: 8, borderRadius: 4, width: `${(r.count / max) * 100}%` }} />
                </td>
                <td style={{ padding: "3px 0 3px 8px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

function Stat({ label, value, id }: { label: string; value: number | string; id: string }) {
  return (
    <div style={card}>
      <p style={{ color: "#6b7280", fontSize: 12 }}>{label}</p>
      <p style={{ fontSize: 28, fontWeight: 700 }} data-testid={id}>{value}</p>
    </div>
  );
}

export default async function AnalyticsDashboard({ searchParams }: Props) {
  const sp = await searchParams;
  const next = (() => {
    const q = new URLSearchParams();
    for (const k of ["from", "to", "days", "campaign"] as const) if (sp[k]) q.set(k, sp[k]!);
    return `/admin/analityka${q.size ? `?${q}` : ""}`;
  })();

  if (!verifyAdminSession((await cookies()).get(realmCookie("analytics"))?.value, "analytics")) {
    return <AdminLogin next={next} failed={sp.e === "1"} realm="analytics" />;
  }

  const { from, to } = resolveRange(sp);
  const campaign = sp.campaign?.slice(0, 100) || null;
  const s = await getStats({ from, to, campaign });
  const pct = (a: number, b: number) => (b > 0 ? `${((a / b) * 100).toFixed(1)}%` : "–");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 1000, margin: "0 auto", padding: "24px 16px", color: "#111", background: "#f9fafb" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Analityka</h1>
      <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 16 }}>
        Własna statystyka bez cookies · {from} → {to} (UTC){campaign ? ` · kampania: ${campaign}` : ""}
      </p>

      <form method="get" style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginBottom: 20, fontSize: 13 }}>
        {[7, 30, 90].map((d) => (
          <a key={d} href={`/admin/analityka?days=${d}`} style={{ border: "1px solid #d1d5db", borderRadius: 8, padding: "6px 10px", background: "#fff" }}>
            {d} dni
          </a>
        ))}
        <label>Od <input type="date" name="from" defaultValue={from} style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: 4 }} /></label>
        <label>Do <input type="date" name="to" defaultValue={to} style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: 4 }} /></label>
        <label>Kampania <input type="text" name="campaign" defaultValue={campaign ?? ""} maxLength={100} style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: 4 }} /></label>
        <button type="submit" style={{ background: "#1d4ed8", color: "#fff", border: 0, borderRadius: 8, padding: "6px 12px" }}>Pokaż</button>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 16 }}>
        <Stat label="Odsłony" value={s.pageviews} id="stat-pageviews" />
        <Stat label="Unikalni (suma dzienna)" value={s.uniques} id="stat-uniques" />
        <Stat label="Kliknięcia CTA" value={s.cta.reduce((a, r) => a + r.count, 0)} id="stat-cta" />
        <Stat label="Zamówienia" value={s.orderCount} id="stat-orders" />
      </div>

      <section style={{ ...card, marginBottom: 16 }} data-testid="funnel">
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Konwersja</h2>
        <p style={{ fontSize: 13 }}>
          Odwiedzający {s.uniques} → klik CTA {s.ctaVisitors} ({pct(s.ctaVisitors, s.uniques)}) → zamówienie {s.orderCount} ({pct(s.orderCount, s.ctaVisitors)})
        </p>
        <p style={{ color: "#9ca3af", fontSize: 11, marginTop: 4 }}>
          „Zamówienie” = wejście na stronę sukcesu. Źródłem prawdy o płatnościach jest Stripe. Unikalni to suma unikalnych dziennie.
        </p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        <Bars title="Odsłony dziennie" rows={s.daily.map((d) => ({ key: `${d.day} (unik. ${d.uniques})`, count: d.pageviews }))} testId="daily" />
        <Bars title="Top strony" rows={s.topPages} testId="top-pages" />
        <Bars title="Źródła" rows={s.sources} testId="sources" />
        <Bars title="Języki" rows={s.locales} testId="locales" />
        <Bars title="Urządzenia" rows={s.devices} testId="devices" />
        <Bars title="Kliknięcia CTA wg miejsca" rows={s.cta} testId="cta" />
        <Bars title="Zamówienia" rows={s.orders} testId="orders" />
      </div>
    </div>
  );
}
