import { cx } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cx(
        "inline-block text-xs font-semibold uppercase tracking-widest text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
