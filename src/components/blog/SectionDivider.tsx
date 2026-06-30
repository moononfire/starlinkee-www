interface SectionDividerProps {
  quote: string;
}

export default function SectionDivider({ quote }: SectionDividerProps) {
  return (
    <div className="w-full relative overflow-hidden bg-blue-50 py-11 my-14" role="separator">
      {/* Dekoracyjny wzór — siatka kropek w kolorze marki */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2563eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Gradient wyciszający wzór przy krawędziach */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #eff6ff 0%, transparent 18%, transparent 82%, #eff6ff 100%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
          <div className="h-px w-10 bg-blue-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <div className="h-px w-10 bg-blue-300" />
        </div>

        <p className="text-blue-700 text-lg sm:text-xl font-light leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="flex items-center justify-center gap-3 mt-5" aria-hidden="true">
          <div className="h-px w-10 bg-blue-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <div className="h-px w-10 bg-blue-300" />
        </div>
      </div>
    </div>
  );
}
