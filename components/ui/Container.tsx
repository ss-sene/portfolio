import { cx } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cx(
        "mx-auto max-w-350 w-full px-8 lg:px-14",
        className
      )}
    >
      {children}
    </Tag>
  );
}
