"use client";

import { useEffect, useState, type FormEvent } from "react";
import { loadStripe, type StripeElementLocale } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import type { Locale } from "@/i18n";

let stripePromise: ReturnType<typeof loadStripe> | null = null;
function getStripePromise() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "");
  }
  return stripePromise;
}

export interface TrialCardVerificationCopy {
  loading: string;
  submitLabel: string;
  submittingLabel: string;
  backLabel: string;
  finePrint: string;
  genericError: string;
  initError: string;
}

export interface TrialAddress {
  name: string;
  line1: string;
  city: string;
  postalCode: string;
  country: string;
}

interface Props {
  locale: Locale;
  email: string;
  plates: number;
  plateLanguages: Record<string, number>;
  address: TrialAddress;
  copy: TrialCardVerificationCopy;
  onSuccess: (subscriptionId: string) => void;
  onBack: () => void;
}

export default function TrialCardVerification({
  locale,
  email,
  plates,
  plateLanguages,
  address,
  copy,
  onSuccess,
  onBack,
}: Props) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [initError, setInitError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/checkout/trial/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale, plates, plateLanguages, email, address }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
          setPaymentIntentId(data.paymentIntentId);
          setCustomerId(data.customerId);
        } else {
          setInitError(true);
        }
      })
      .catch(() => {
        if (!cancelled) setInitError(true);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, plates]);

  if (initError) {
    return (
      <div className="text-center py-10">
        <p className="text-sm text-red-600 mb-4">{copy.initError}</p>
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-gray-500 underline cursor-pointer"
        >
          {copy.backLabel}
        </button>
      </div>
    );
  }

  if (!clientSecret || !paymentIntentId || !customerId) {
    return <div className="py-10 text-center text-sm text-gray-400">{copy.loading}</div>;
  }

  return (
    <Elements
      stripe={getStripePromise()}
      options={{ clientSecret, locale: locale as StripeElementLocale }}
    >
      <TrialForm
        locale={locale}
        plates={plates}
        plateLanguages={plateLanguages}
        paymentIntentId={paymentIntentId}
        customerId={customerId}
        copy={copy}
        onSuccess={onSuccess}
        onBack={onBack}
      />
    </Elements>
  );
}

function TrialForm({
  locale,
  plates,
  plateLanguages,
  paymentIntentId,
  customerId,
  copy,
  onSuccess,
  onBack,
}: {
  locale: Locale;
  plates: number;
  plateLanguages: Record<string, number>;
  paymentIntentId: string;
  customerId: string;
  copy: TrialCardVerificationCopy;
  onSuccess: (subscriptionId: string) => void;
  onBack: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setSubmitting(true);
    setError(null);

    const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (confirmError) {
      setError(confirmError.message ?? copy.genericError);
      setSubmitting(false);
      return;
    }
    if (paymentIntent?.status !== "requires_capture") {
      setError(copy.genericError);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/checkout/trial/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId, customerId, locale, plates, plateLanguages }),
      });
      const data = await res.json();
      if (data.ok) {
        onSuccess(data.subscriptionId);
      } else {
        setError(data.error ?? copy.genericError);
        setSubmitting(false);
      }
    } catch {
      setError(copy.genericError);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <PaymentElement />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <p className="text-xs text-gray-400">{copy.finePrint}</p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          {copy.backLabel}
        </button>
        <button
          type="submit"
          disabled={!stripe || submitting}
          className="flex-1 bg-brand-600 text-white font-medium rounded-xl py-3 text-sm hover:bg-brand-700 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          {submitting ? copy.submittingLabel : copy.submitLabel}
        </button>
      </div>
    </form>
  );
}
