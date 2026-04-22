import { cx } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
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
    "inline-flex items-center justify-center text-[11px] font-bold uppercase tracking-widest transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent px-7 py-4";

  const variants = {
    primary: "bg-accent text-paper hover:bg-accent/90",
    outline: "border border-ink text-ink hover:bg-ink hover:text-canvas",
  };

  return (
    <a href={href} className={cx(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
