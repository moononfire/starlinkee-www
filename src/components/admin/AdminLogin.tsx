import { adminLogin } from "@/lib/adminActions";

export default function AdminLogin({ next, failed, realm = "admin" }: { next: string; failed?: boolean; realm?: "admin" | "analytics" }) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 360, margin: "20vh auto 0", padding: 16, color: "#111" }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Panel administracyjny</h1>
      <form action={adminLogin} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input type="hidden" name="next" value={next} />
        <input type="hidden" name="realm" value={realm} />
        <input
          type="password"
          name="password"
          placeholder="Hasło"
          autoComplete="current-password"
          required
          style={{ border: "1px solid #d1d5db", borderRadius: 8, padding: "10px 12px", fontSize: 14 }}
        />
        <button type="submit" style={{ background: "#1d4ed8", color: "#fff", border: 0, borderRadius: 8, padding: "10px 12px", fontWeight: 600 }}>
          Zaloguj
        </button>
        {failed && <p role="alert" style={{ color: "#dc2626", fontSize: 13 }}>Nieprawidłowe hasło.</p>}
      </form>
    </div>
  );
}
