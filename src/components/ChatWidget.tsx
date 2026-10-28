"use client";

import { useEffect, useRef, useState } from "react";
import { getTranslations, type Locale } from "@/i18n";

type Message = { id: string; sender: "user" | "owner"; text: string; ts: number };

const PHONE_PL = process.env.NEXT_PUBLIC_PHONE_PL ?? "+48 123 456 789";
const PHONE_AT = process.env.NEXT_PUBLIC_PHONE_AT ?? "+43 123 456 789";

function getOrCreateSessionId(): string {
  const key = "chat_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export default function ChatWidget({ locale }: { locale: Locale }) {
  const lang = locale;
  const t = getTranslations(lang).chat;
  const phoneNumber = locale === "pl" ? PHONE_PL : PHONE_AT;
  const phoneHref = phoneNumber.replace(/\s/g, "");

  const greeting: Message = {
    id: "greeting",
    sender: "owner",
    text: t.greeting,
    ts: 0,
  };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [hasUnread, setHasUnread] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastCountRef = useRef(0);

  useEffect(() => {
    setMessages((prev) => [greeting, ...prev.slice(1)]);
  }, [lang]);

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
            setMessages([greeting, ...remote]);
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

  // Przy końcu strony chowamy przycisk, żeby nie zasłaniał linków w stopce.
  useEffect(() => {
    function onScroll() {
      const distance =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      setNearBottom(distance < 140);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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

  function handlePhoneClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const isDesktop =
      typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    e.preventDefault();
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    });
  }

  const hideTrigger = nearBottom && !open;

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label={t.headerName}
          className="fixed bottom-24 right-4 sm:right-5 z-50 flex flex-col w-[calc(100vw-2rem)] max-w-[22rem] h-[min(32rem,calc(100dvh-7.5rem))] bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden animate-[popup-fadein_0.18s_ease-out]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <div className="relative w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-gray-900 leading-tight">{t.headerName}</p>
              <p className="text-xs text-gray-500">{t.headerSubtitle}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 -mr-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label={t.closeAria}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Phone bar */}
          <a
            href={`tel:${phoneHref}`}
            onClick={handlePhoneClick}
            aria-label={`${t.callAria}: ${phoneNumber}`}
            className="flex items-center gap-2.5 px-4 py-2 bg-gray-50 border-b border-gray-100 select-none hover:bg-gray-100 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-brand-600" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="text-sm font-semibold text-gray-900 truncate">
                {isCopied ? t.copied : phoneNumber}
              </span>
              <span className="text-[11px] text-gray-500 truncate">{t.phoneHours}</span>
            </span>
          </a>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-snug break-words ${
                    msg.sender === "user"
                      ? "bg-brand-600 text-white rounded-br-md"
                      : "bg-gray-100 text-gray-900 rounded-bl-md"
                  }`}
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
            className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-100 bg-white"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              disabled={sending}
              className="flex-1 min-w-0 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-900 outline-none border border-gray-200 focus:border-brand-500 focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || sending}
              className="w-9 h-9 shrink-0 rounded-full bg-brand-600 hover:bg-brand-700 flex items-center justify-center transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              aria-label={t.sendAria}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 rotate-90" aria-hidden="true">
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.closeAria : t.openAria}
        aria-expanded={open}
        tabIndex={hideTrigger ? -1 : 0}
        className={`fixed bottom-5 right-4 sm:right-5 z-50 flex items-center justify-center gap-2 h-14 bg-brand-600 text-white shadow-lg shadow-brand-900/25 ring-1 ring-white/20 hover:bg-brand-700 active:scale-95 transition-all duration-300 cursor-pointer ${
          open ? "w-14 rounded-full" : "w-14 sm:w-auto sm:px-5 rounded-full"
        } ${hideTrigger ? "translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0" aria-hidden="true">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">{t.triggerLabel}</span>
          </>
        )}
        {hasUnread && !open && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>
    </>
  );
}
