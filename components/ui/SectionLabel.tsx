export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3.5 mb-5">
      <span className="w-7 h-px bg-accent block shrink-0" aria-hidden="true" />
      <span className="font-mono text-[12px] tracking-[.16em] uppercase text-accent font-medium">
        {children}
      </span>
    </div>
  );
}
