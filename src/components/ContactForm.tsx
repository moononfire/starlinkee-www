"use client";

import { useState } from "react";
import type { Translations } from "@/i18n";

export default function ContactForm({ t }: { t: Translations }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-lg text-gray-500">{t.contact.sectionSubtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t.contact.emailPlaceholder}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.contact.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t.contact.phonePlaceholder}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t.contact.businessLabel}
              </label>
              <input
                type="text"
                id="business"
                name="business"
                placeholder={t.contact.businessPlaceholder}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-brand-600 text-white font-medium rounded-xl py-3.5 text-base hover:bg-brand-700 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {status === "sending" ? "..." : t.contact.submit}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-green-600 font-medium">
              {t.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-600 font-medium">
              {t.contact.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
