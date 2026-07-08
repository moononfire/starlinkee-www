import { redirect } from "next/navigation";
import { getDashboardData } from "@/lib/db";

interface Props {
  searchParams: Promise<{ token?: string }>;
}

export default async function NewsletterDashboard({ searchParams }: Props) {
  const { token } = await searchParams;
  if (token !== process.env.CHAT_ADMIN_TOKEN) {
    redirect("/");
  }

  const { subscribers, sends, opens, clicks } = await getDashboardData();

  // Statystyki subskrybentów
  const totalSubs = subscribers.filter((s) => !s.unsubscribed_at).length;
  const courseActive = subscribers.filter((s) => !s.unsubscribed_at && s.source === "course").length;
  const discountActive = subscribers.filter((s) => !s.unsubscribed_at && s.source === "discount").length;

  // Mapa: send_id → liczba otwarć / kliknięć
  const openMap: Record<string, number> = {};
  for (const o of opens) {
    openMap[o.send_id] = (openMap[o.send_id] ?? 0) + 1;
  }
  const clickMap: Record<string, number> = {};
  for (const c of clicks) {
    clickMap[c.send_id] = (clickMap[c.send_id] ?? 0) + 1;
  }

  // Grupuj wysyłki po source+step (kampanie)
  type CampaignKey = string;
  const campaignMap: Record<CampaignKey, { subject: string; source: string; step: number; total: number; openCount: number; clickCount: number }> = {};
  for (const s of sends) {
    const key = `${s.source}-${s.step}`;
    if (!campaignMap[key]) {
      campaignMap[key] = { subject: s.subject, source: s.source, step: s.step, total: 0, openCount: 0, clickCount: 0 };
    }
    campaignMap[key].total++;
    campaignMap[key].openCount += openMap[s.id] ?? 0;
    campaignMap[key].clickCount += clickMap[s.id] ?? 0;
  }
  const campaigns = Object.values(campaignMap).sort((a, b) => a.source.localeCompare(b.source) || a.step - b.step);

  // Postęp sekwencji — ilu subskrybentów jest na jakim kroku
  const stepMap: Record<string, Record<number, number>> = { course: {}, discount: {} };
  for (const s of subscribers) {
    if (s.unsubscribed_at) continue;
    stepMap[s.source] ??= {};
    stepMap[s.source][s.sequence_step] = (stepMap[s.source][s.sequence_step] ?? 0) + 1;
  }

  // Ostatnie 20 wysyłek
  const recentSends = sends.slice(0, 20);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 900, margin: "0 auto", padding: "32px 16px", color: "#111" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Newsletter Dashboard</h1>
      <p style={{ color: "#6b7280", marginBottom: 32, fontSize: 14 }}>Starlinkee · dane z Neon</p>

      {/* ── Karty ogólne ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
        {[
          { label: "Subskrybenci łącznie", value: totalSubs },
          { label: "Kurs (aktywni)", value: courseActive },
          { label: "Zniżka (aktywni)", value: discountActive },
        ].map((card) => (
          <div key={card.label} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "20px 24px" }}>
            <p style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>{card.label}</p>
            <p style={{ margin: "6px 0 0", fontSize: 32, fontWeight: 700 }}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* ── Postęp sekwencji ── */}
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Postęp sekwencji</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
        {(["course", "discount"] as const).map((src) => (
          <div key={src} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: "16px 20px" }}>
            <p style={{ margin: "0 0 10px", fontWeight: 600, fontSize: 14 }}>{src === "course" ? "🎓 Kurs" : "🏷️ Zniżka"}</p>
            {Object.entries(stepMap[src] ?? {}).sort(([a], [b]) => Number(a) - Number(b)).map(([step, count]) => (
              <div key={step} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 14, borderBottom: "1px solid #f3f4f6" }}>
                <span style={{ color: "#374151" }}>Krok {step}</span>
                <span style={{ fontWeight: 600 }}>{count} osób</span>
              </div>
            ))}
            {!Object.keys(stepMap[src] ?? {}).length && <p style={{ color: "#9ca3af", fontSize: 13, margin: 0 }}>Brak danych</p>}
          </div>
        ))}
      </div>

      {/* ── Kampanie ── */}
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Kampanie (łączone po typie emaila)</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, marginBottom: 40 }}>
        <thead>
          <tr style={{ background: "#f3f4f6" }}>
            {["Lista", "Krok", "Temat", "Wysłanych", "Otwarcia", "Open rate", "Kliknięcia", "CTR"].map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, fontSize: 13, color: "#374151", borderBottom: "2px solid #e5e7eb" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => {
            const openRate = c.total ? Math.round((c.openCount / c.total) * 100) : 0;
            const ctr = c.total ? Math.round((c.clickCount / c.total) * 100) : 0;
            return (
              <tr key={`${c.source}-${c.step}`} style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "10px 12px" }}>{c.source === "course" ? "🎓 Kurs" : "🏷️ Zniżka"}</td>
                <td style={{ padding: "10px 12px", color: "#6b7280" }}>{c.step}</td>
                <td style={{ padding: "10px 12px", maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.subject}</td>
                <td style={{ padding: "10px 12px" }}>{c.total}</td>
                <td style={{ padding: "10px 12px" }}>{c.openCount}</td>
                <td style={{ padding: "10px 12px", fontWeight: 600, color: openRate > 30 ? "#16a34a" : openRate > 15 ? "#d97706" : "#dc2626" }}>{openRate}%</td>
                <td style={{ padding: "10px 12px" }}>{c.clickCount}</td>
                <td style={{ padding: "10px 12px", fontWeight: 600 }}>{ctr}%</td>
              </tr>
            );
          })}
          {!campaigns.length && (
            <tr><td colSpan={8} style={{ padding: "24px 12px", color: "#9ca3af", textAlign: "center" }}>Brak wysyłek</td></tr>
          )}
        </tbody>
      </table>

      {/* ── Ostatnie wysyłki ── */}
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Ostatnie 20 wysyłek</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f3f4f6" }}>
            {["Email", "Lista", "Krok", "Temat", "Data", "Otwarcia", "Kliknięcia"].map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "8px 12px", fontWeight: 600, color: "#374151", borderBottom: "2px solid #e5e7eb" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recentSends.map((s) => (
            <tr key={s.id} style={{ borderBottom: "1px solid #f9fafb" }}>
              <td style={{ padding: "8px 12px", color: "#374151" }}>{s.email}</td>
              <td style={{ padding: "8px 12px", color: "#6b7280" }}>{s.source === "course" ? "Kurs" : "Zniżka"}</td>
              <td style={{ padding: "8px 12px", color: "#6b7280" }}>{s.step}</td>
              <td style={{ padding: "8px 12px", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.subject}</td>
              <td style={{ padding: "8px 12px", color: "#9ca3af", whiteSpace: "nowrap" }}>{new Date(s.sent_at).toLocaleDateString("pl-PL", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</td>
              <td style={{ padding: "8px 12px" }}>{openMap[s.id] ?? 0}</td>
              <td style={{ padding: "8px 12px" }}>{clickMap[s.id] ?? 0}</td>
            </tr>
          ))}
          {!recentSends.length && (
            <tr><td colSpan={7} style={{ padding: "24px 12px", color: "#9ca3af", textAlign: "center" }}>Brak wysyłek</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
