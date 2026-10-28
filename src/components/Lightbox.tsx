"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

function Overlay({
  onClose,
  closeLabel,
  label,
  children,
}: {
  onClose: () => void;
  closeLabel: string;
  label: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll<HTMLElement>(
        "button, [href], video[controls], [tabindex]:not([tabindex='-1'])",
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (!dialogRef.current.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 text-white text-2xl leading-none hover:bg-white/25 transition-colors cursor-pointer"
      >
        ×
      </button>
      <div onClick={(e) => e.stopPropagation()} className="max-h-full max-w-full">
        {children}
      </div>
    </div>
  );
}

export function ZoomableImage({
  src,
  alt,
  sizes,
  zoomLabel,
  closeLabel,
}: {
  src: string;
  alt: string;
  sizes: string;
  zoomLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${zoomLabel}: ${alt}`}
        className="group absolute inset-0 cursor-zoom-in"
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
        <span className="absolute bottom-3 right-3 rounded-full bg-gray-900/70 text-white p-2 opacity-90 group-hover:bg-gray-900 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
          </svg>
        </span>
      </button>
      {open && (
        <Overlay onClose={() => setOpen(false)} closeLabel={closeLabel} label={alt}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[92vw] w-auto h-auto rounded-lg"
          />
        </Overlay>
      )}
    </>
  );
}

export function VideoTile({
  src,
  title,
  desc,
  closeLabel,
}: {
  src: string;
  title: string;
  desc: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const tileVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = tileVideo.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (open || reduced) v.pause();
    else v.play().catch(() => {});
  }, [open]);

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden grid md:grid-cols-5 items-center">
        <div className="md:col-span-2 p-8 sm:p-10 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-lg text-gray-600">{desc}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={title}
          className="group relative md:col-span-3 block w-full aspect-video bg-brand-50 cursor-pointer"
        >
          <video
            ref={tileVideo}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-brand-700 shadow group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
      {open && (
        <Overlay onClose={() => setOpen(false)} closeLabel={closeLabel} label={title}>
          <video
            src={src}
            controls
            autoPlay
            loop
            playsInline
            className="max-h-[90vh] max-w-[92vw] rounded-lg bg-black"
          />
        </Overlay>
      )}
    </>
  );
}
