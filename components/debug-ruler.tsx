"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Measurement = {
  id: string;
  label: string;
  top: number;
  bottom: number;
  height: number;
  distanceFromHeader: number;
};

export function DebugRuler() {
  const searchParams = useSearchParams();
  const enabled = searchParams.get("debug") === "1";
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!enabled) return;

    const measure = () => {
      const header = document.querySelector("header");
      const eyebrow = document.querySelector(
        'section p[class*="tracking"][class*="text-accent"]',
      );
      const h1 = document.querySelector("section h1");
      const bodyP = document.querySelector("section h1 + p");
      const buttonsDiv = document.querySelector(
        'section div[class*="flex"][class*="flex-wrap"][class*="items-center"]',
      );

      if (!header || !eyebrow || !h1 || !bodyP || !buttonsDiv) return;

      const headerRect = header.getBoundingClientRect();
      const eyebrowRect = eyebrow.getBoundingClientRect();
      const h1Rect = h1.getBoundingClientRect();
      const bodyRect = bodyP.getBoundingClientRect();
      const buttonsRect = buttonsDiv.getBoundingClientRect();

      setHeaderHeight(headerRect.height);
      setViewport({ w: window.innerWidth, h: window.innerHeight });

      setMeasurements([
        {
          id: "eyebrow",
          label: "Eyebrow",
          top: eyebrowRect.top,
          bottom: eyebrowRect.bottom,
          height: eyebrowRect.height,
          distanceFromHeader: eyebrowRect.top - headerRect.bottom,
        },
        {
          id: "h1",
          label: "H1 Heading",
          top: h1Rect.top,
          bottom: h1Rect.bottom,
          height: h1Rect.height,
          distanceFromHeader: h1Rect.top - headerRect.bottom,
        },
        {
          id: "body",
          label: "Body Copy",
          top: bodyRect.top,
          bottom: bodyRect.bottom,
          height: bodyRect.height,
          distanceFromHeader: bodyRect.top - headerRect.bottom,
        },
        {
          id: "buttons",
          label: "Buttons",
          top: buttonsRect.top,
          bottom: buttonsRect.bottom,
          height: buttonsRect.height,
          distanceFromHeader: buttonsRect.top - headerRect.bottom,
        },
      ]);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure);

    const timeout = setTimeout(measure, 500);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
      clearTimeout(timeout);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {measurements.map((m, i) => {
        const gapToPrev =
          i === 0
            ? m.distanceFromHeader
            : m.top - measurements[i - 1].bottom;
        return (
          <div key={m.id}>
            <div
              className="absolute left-0 right-0 border-t-2 border-dashed border-red-500"
              style={{ top: `${m.top}px` }}
            >
              <div className="inline-flex items-center gap-2 bg-red-500 text-white text-[10px] font-mono px-2 py-0.5 ml-4">
                {m.label} top: {Math.round(m.top)}px
              </div>
            </div>
            <div
              className="absolute left-0 right-0 border-t border-dashed border-red-400"
              style={{ top: `${m.bottom}px` }}
            >
              <div className="inline-flex items-center gap-2 bg-red-400 text-white text-[10px] font-mono px-2 py-0.5 ml-4">
                {m.label} bottom: {Math.round(m.bottom)}px | h:{" "}
                {Math.round(m.height)}px
                {i > 0 && ` | gap from prev: ${Math.round(gapToPrev)}px`}
                {i === 0 && ` | gap from header: ${Math.round(gapToPrev)}px`}
              </div>
            </div>
          </div>
        );
      })}

      <div className="fixed top-20 right-4 z-[101] pointer-events-auto">
        <div className="rounded-lg bg-ink/90 text-white text-xs font-mono p-3 space-y-1 backdrop-blur-md min-w-[260px]">
          <p className="text-[10px] uppercase tracking-wider text-white/60 mb-2">
            Debug Ruler — Spacing
          </p>
          <p>Header height: {Math.round(headerHeight)}px</p>
          {measurements.map((m, i) => {
            const gap =
              i === 0
                ? m.distanceFromHeader
                : m.top - measurements[i - 1].bottom;
            return (
              <p key={m.id} className={gap < 20 ? "text-yellow-400" : ""}>
                {m.label}: gap {Math.round(gap)}px
                {gap < 20 && " ⚠ tight"}
              </p>
            );
          })}
          <p className="text-[10px] text-white/50 pt-2 border-t border-white/10 mt-2">
            Viewport: {viewport.w}×{viewport.h}
          </p>
        </div>
      </div>
    </div>
  );
}

