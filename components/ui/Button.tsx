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
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary: "bg-accent text-on-accent border border-accent hover:bg-accent-2",
    outline: "bg-transparent text-ink border border-line-strong hover:border-accent hover:text-accent",
    ghost: "text-accent hover:text-accent-2 underline underline-offset-4",
  };

  return (
    <a
      href={href}
      className={cx(base, variants[variant], className)}
      style={{ fontSize: "15px", padding: "15px 24px", borderRadius: "8px", textDecoration: "none" }}
      {...props}
    >
      {children}
    </a>
  );
}
