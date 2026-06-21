"use client";

import {
  Plus_Jakarta_Sans,
  Lora,
  Manrope,
  Newsreader,
  DM_Sans,
  Source_Serif_4,
} from "next/font/google";
import { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

type FontPair = {
  id: string;
  label: string;
  sans: string;
  serif: string;
  desc: string;
};

const FONT_PAIRS: FontPair[] = [
  {
    id: "pjs-lora",
    label: "Plus Jakarta + Lora",
    sans: "var(--font-pjs)",
    serif: "var(--font-lora)",
    desc: "Indonesia sans + serif screen-optimized",
  },
  {
    id: "manrope-newsreader",
    label: "Manrope + Newsreader",
    sans: "var(--font-manrope)",
    serif: "var(--font-newsreader)",
    desc: "Rounded sans + editorial serif",
  },
  {
    id: "dm-source",
    label: "DM Sans + Source Serif",
    sans: "var(--font-dm)",
    serif: "var(--font-source)",
    desc: "Geometric clean + workhorse serif",
  },
];

type FontContextType = {
  sans: string;
  serif: string;
  setPair: (id: string) => void;
  currentId: string;
};

const FontContext = createContext<FontContextType | null>(null);

export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error("useFont must be used within FontPreviewProvider");
  return ctx;
}

export function FontPreviewProvider({ children }: { children: ReactNode }) {
  const [currentId, setCurrentId] = useState("pjs-lora");
  const current = FONT_PAIRS.find((p) => p.id === currentId) ?? FONT_PAIRS[0];

  return (
    <FontContext.Provider
      value={{
        sans: current.sans,
        serif: current.serif,
        setPair: setCurrentId,
        currentId,
      }}
    >
      <div
        className={`${plusJakarta.variable} ${lora.variable} ${manrope.variable} ${newsreader.variable} ${dmSans.variable} ${sourceSerif.variable}`}
        style={{
          fontFamily: current.sans,
          ["--font-serif-preview" as string]: current.serif,
        }}
      >
        <FontSwitcher
          pairs={FONT_PAIRS}
          currentId={currentId}
          onChange={setCurrentId}
        />
        {children}
      </div>
    </FontContext.Provider>
  );
}

function FontSwitcher({
  pairs,
  currentId,
  onChange,
}: {
  pairs: FontPair[];
  currentId: string;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = pairs.find((p) => p.id === currentId) ?? pairs[0];

  return (
    <div className="fixed top-20 right-4 z-[70]">
      <div className="rounded-xl border border-hairline-neutral bg-white shadow-soft overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-ink hover:bg-fill-soft transition-colors w-full min-w-[200px]"
        >
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            {current.label}
          </span>
          <svg
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {open && (
          <div className="border-t border-hairline-neutral">
            {pairs.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onChange(p.id);
                  setOpen(false);
                }}
                className={`flex flex-col items-start gap-0.5 px-4 py-3 text-left hover:bg-fill-soft transition-colors w-full ${
                  p.id === currentId ? "bg-fill-soft" : ""
                }`}
              >
                <span className="text-sm font-medium text-ink">{p.label}</span>
                <span className="text-xs text-soft">{p.desc}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
