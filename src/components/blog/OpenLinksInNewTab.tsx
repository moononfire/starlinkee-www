"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function OpenLinksInNewTab({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const applyTargetBlank = () => {
      container.querySelectorAll("a[href]").forEach((a) => {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      });
    };

    applyTargetBlank();

    const observer = new MutationObserver(applyTargetBlank);
    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
