"use client";

import { useEffect, useRef } from "react";
import { cx } from "@/lib/utils";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("in-view"), delay);
          } else {
            el.classList.add("in-view");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cx("animate-reveal", className)}>
      {children}
    </div>
  );
}
