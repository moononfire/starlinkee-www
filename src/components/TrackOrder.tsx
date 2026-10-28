"use client";

import { useEffect, useRef } from "react";
import { sendAnalytics } from "@/lib/analyticsClient";

export default function TrackOrder({ label }: { label: "trial" | "paid" }) {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    sendAnalytics({ type: "order", label });
  }, [label]);
  return null;
}
