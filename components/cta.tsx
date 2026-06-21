import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import type { ReactNode } from "react";

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "wa" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  withArrow?: boolean;
};

export function CTA({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  withArrow = false,
}: CTAProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variants = {
    primary: "bg-accent text-white shadow-accent hover:bg-accent-deep hover:shadow-accent-lg",
    wa: "bg-wa text-white shadow-[0_1px_2px_rgba(37,211,102,0.15),0_4px_12px_rgba(37,211,102,0.1)] hover:brightness-95",
    ghost:
      "border border-hairline bg-white text-ink hover:bg-fill-soft hover:border-accent",
  };

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {withArrow && (
        <span
          className={`flex items-center justify-center size-6 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            variant === "primary"
              ? "bg-white/15"
              : variant === "wa"
                ? "bg-white/15"
                : "bg-fill-soft group-hover:bg-accent group-hover:text-white"
          }`}
        >
          <ArrowUpRight weight="bold" className="size-3.5" />
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {content}
    </Link>
  );
}
