"use client";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/useInView";

/**
 * Fades children up 16px the first time they scroll into view (staggered 80ms by `index`).
 * Server HTML is always visible: only elements that start below the fold are hidden, after hydration,
 * so above-the-fold content paints immediately and no-JS visitors see everything.
 */
export default function Reveal({
  children,
  index = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  index?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"shown" | "pending" | "in">("shown");

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen: leave it be
    setState("pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${state === "pending" ? "is-pending" : ""} ${className}`}
      style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
