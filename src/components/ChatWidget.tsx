"use client";

import { useEffect, useRef, useState } from "react";

type Message = { id: string; sender: "user" | "owner"; text: string; ts: number };

const GREETING: Message = {
  id: "greeting",
  sender: "owner",
  text: "Cześć! 👋 W czym mogę pomóc?",
  ts: Date.now(),
};

function getOrCreateSessionId(): string {
  const key = "chat_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(false);
  const [triggerBottom, setTriggerBottom] = useState(24);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastCountRef = useRef(0);

  useEffect(() => {
    const FOOTER_HEIGHT = 180;
    const BASE = 24;
    function update() {
      const dist =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      setTriggerBottom(BASE + Math.max(0, FOOTER_HEIGHT - dist));
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    setSessionId(getOrCreateSessionId());
  }, []);

  useEffect(() => {
    if (!sessionId) return;
    let active = true;
    let noNewOwnerMsgSince = Date.now();
    let timeoutId: ReturnType<typeof setTimeout>;

    async function poll() {
      if (!active) return;
      try {
        const res = await fetch(`/api/chat/messages?s=${encodeURIComponent(sessionId!)}`);
        if (res.ok) {
          const data = await res.json();
          const remote: Message[] = data.messages ?? [];
          if (remote.length > 0) {
            setMessages([GREETING, ...remote]);
            if (remote.length > lastCountRef.current) {
              lastCountRef.current = remote.length;
              noNewOwnerMsgSince = Date.now();
              if (!open) setHasUnread(true);
            }
          }
        }
      } catch {}

      if (!active) return;
      // Po 10 min bez nowej wiadomości od właściciela — zwalniamy polling
      const idle = Date.now() - noNewOwnerMsgSince > 10 * 60 * 1000;
      timeoutId = setTimeout(poll, idle ? 30_000 : 8_000);
    }

    poll();
    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, [sessionId, open]);

  useEffect(() => {
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || !sessionId || sending) return;
    const text = input.trim();
    setInput("");
    setSending(true);

    const optimistic: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      text,
      ts: Date.now(),
    };
    setMessages((prev) => [...prev, optimistic]);

    try {
      await fetch("/api/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, text }),
      });
    } catch {}

    setSending(false);
  }

  return (
    <>
      {open && (
        <div
          className="fixed right-5 z-50 w-80 flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-[bottom] duration-200"
          style={{ height: "420px", background: "#fff", bottom: `${triggerBottom + 60}px` }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 text-white"
            style={{ background: "linear-gradient(135deg, #1877F2 0%, #0a5fcf 100%)" }}
          >
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-lg">
              💬
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm leading-tight">Starlinkee</p>
              <p className="text-xs text-blue-200">Zazwyczaj odpowiadamy szybko</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors ml-auto"
              aria-label="Zamknij czat"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[220px] px-3 py-2 rounded-2xl text-sm leading-snug break-words ${
                    msg.sender === "user"
                      ? "text-white rounded-br-sm"
                      : "bg-white text-gray-900 rounded-bl-sm shadow-sm border border-gray-100"
                  }`}
                  style={
                    msg.sender === "user"
                      ? { background: "linear-gradient(135deg, #1877F2, #0a5fcf)" }
                      : {}
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 px-3 py-2 border-t bg-white"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napisz wiadomość..."
              disabled={sending}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:bg-gray-50 border border-transparent focus:border-blue-300 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || sending}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors disabled:opacity-40"
              style={{ background: "#1877F2" }}
              aria-label="Wyślij"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 rotate-90">
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Zamknij czat" : "Otwórz czat"}
        className={`fixed right-5 z-50 flex items-center justify-center text-amber-900 shadow-lg transition-[bottom,transform] duration-200 hover:scale-105 active:scale-95 ${
          open ? "w-14 h-14 rounded-full" : "h-12 px-4 gap-2 rounded-full"
        }`}
        style={{
          bottom: `${triggerBottom}px`,
          background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 35%, #FBBF24 70%, #F59E0B 100%)",
          boxShadow: "0 4px 20px rgba(251,191,36,0.5)",
        }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="text-sm font-semibold whitespace-nowrap">Napisz do nas</span>
          </>
        )}
        {hasUnread && !open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>
    </>
  );
}
