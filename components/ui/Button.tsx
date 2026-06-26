import { cx } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent px-7 py-4";

  const variants = {
    primary: "bg-accent text-paper hover:bg-accent/85",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-canvas",
    ghost: "text-accent hover:text-accent/70 underline underline-offset-4",
  };

  return (
    <a href={href} className={cx(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
