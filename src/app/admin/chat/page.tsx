"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type Message = { id: string; sender: "user" | "owner"; text: string; ts: number };

function AdminChatInner() {
  const params = useSearchParams();
  const sessionId = params.get("s") ?? "";
  const token = params.get("t") ?? "";

  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  async function fetchMessages() {
    if (!sessionId) return;
    const res = await fetch(`/api/chat/messages?s=${encodeURIComponent(sessionId)}`);
    if (res.ok) {
      const data = await res.json();
      setMessages(data.messages ?? []);
    }
  }

  useEffect(() => {
    fetchMessages();
    const iv = setInterval(fetchMessages, 5000);
    return () => clearInterval(iv);
  }, [sessionId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim()) return;
    setSending(true);
    setError("");
    const res = await fetch("/api/chat/reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, text: reply.trim(), token }),
    });
    if (res.ok) {
      setReply("");
      await fetchMessages();
    } else {
      setError("Błąd wysyłania. Sprawdź token.");
    }
    setSending(false);
  }

  if (!sessionId || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Brak wymaganych parametrów w URL.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg flex flex-col" style={{ height: "80vh" }}>
        <div className="bg-blue-700 text-white px-5 py-4 rounded-t-2xl">
          <p className="font-bold text-lg">Odpowiedz klientowi</p>
          <p className="text-blue-200 text-xs font-mono truncate">{sessionId}</p>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "owner" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === "owner"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-900 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={sendReply} className="border-t px-4 py-3 flex gap-2">
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Wpisz odpowiedź..."
            className="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:border-blue-500"
            disabled={sending}
          />
          <button
            type="submit"
            disabled={sending || !reply.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-full px-5 py-2 text-sm font-semibold transition-colors"
          >
            Wyślij
          </button>
        </form>
        {error && <p className="text-red-500 text-xs px-4 pb-2">{error}</p>}
      </div>
    </div>
  );
}

export default function AdminChatPage() {
  return (
    <Suspense>
      <AdminChatInner />
    </Suspense>
  );
}
