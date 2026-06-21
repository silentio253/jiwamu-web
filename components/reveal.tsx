"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className ?? ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-stagger ${visible ? "reveal-stagger-visible" : ""} ${className ?? ""}`}
      style={{ ["--stagger" as string]: `${stagger}s` }}
    >
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <div
      className={`reveal-item ${className ?? ""}`}
      style={{ ["--item-index" as string]: index }}
    >
      {children}
    </div>
  );
}
