"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function calculateContrast(c1: [number, number, number], c2: [number, number, number]): number {
  const l1 = relativeLuminance(c1);
  const l2 = relativeLuminance(c2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

type Measurement = {
  id: string;
  label: string;
  top: number;
  bottom: number;
  height: number;
  distanceFromHeader: number;
};

type SectionMeasurement = {
  top: number;
  bottom: number;
  height: number;
  contentBottom: number;
  gapBelowContent: number;
};

type ContrastInfo = {
  label: string;
  textColor: [number, number, number];
  overlayOpacity: number;
  estimatedBg: [number, number, number];
  ratio: number;
  passes: boolean;
};

export function DebugRuler() {
  const searchParams = useSearchParams();
  const enabled = searchParams.get("debug") === "1";
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [sectionMeasure, setSectionMeasure] = useState<SectionMeasurement | null>(null);
  const [contrastInfos, setContrastInfos] = useState<ContrastInfo[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!enabled) return;

    const measure = () => {
      const header = document.querySelector("header");
      const heroSection = document.querySelector("section");
      const eyebrow = document.querySelector(
        'section p[class*="tracking"][class*="text-accent"]',
      );
      const h1 = document.querySelector("section h1");
      const bodyP = document.querySelector("section h1 + p");
      const buttonsDiv = document.querySelector(
        'section div[class*="flex"][class*="flex-wrap"][class*="items-center"]',
      );

      if (!header || !heroSection || !eyebrow || !h1 || !bodyP || !buttonsDiv)
        return;

      const headerRect = header.getBoundingClientRect();
      const sectionRect = heroSection.getBoundingClientRect();
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

      setSectionMeasure({
        top: sectionRect.top,
        bottom: sectionRect.bottom,
        height: sectionRect.height,
        contentBottom: buttonsRect.bottom,
        gapBelowContent: sectionRect.bottom - buttonsRect.bottom,
      });

      const isMobile = window.innerWidth < 640;
      const textColors: Array<{ label: string; hex: string }> = [
        { label: "Eyebrow", hex: "#315CF0" },
        { label: "H1", hex: "#101828" },
        { label: "Body", hex: "#475467" },
      ];

      const photoDark: [number, number, number] = [80, 60, 40];
      const photoBright: [number, number, number] = [255, 180, 100];
      const photoAvg: [number, number, number] = [
        (photoDark[0] + photoBright[0]) / 2,
        (photoDark[1] + photoBright[1]) / 2,
        (photoDark[2] + photoBright[2]) / 2,
      ];

      const overlayOpacity = isMobile
        ? 0.97
        : 1.0;

      const white: [number, number, number] = [255, 255, 255];

      const infos: ContrastInfo[] = textColors.map(({ label, hex }) => {
        const textColor = hexToRgb(hex);
        const composited: [number, number, number] = [
          Math.round(white[0] * overlayOpacity + photoAvg[0] * (1 - overlayOpacity)),
          Math.round(white[1] * overlayOpacity + photoAvg[1] * (1 - overlayOpacity)),
          Math.round(white[2] * overlayOpacity + photoAvg[2] * (1 - overlayOpacity)),
        ];
        const ratio = calculateContrast(textColor, composited);
        return {
          label,
          textColor,
          overlayOpacity,
          estimatedBg: composited,
          ratio,
          passes: ratio >= 4.5,
        };
      });
      setContrastInfos(infos);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure);
    const timeout = setTimeout(measure, 800);
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
          i === 0 ? m.distanceFromHeader : m.top - measurements[i - 1].bottom;
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
                {i > 0 && ` | gap: ${Math.round(gapToPrev)}px`}
                {i === 0 && ` | gap from header: ${Math.round(gapToPrev)}px`}
              </div>
            </div>
          </div>
        );
      })}

      {sectionMeasure && (
        <>
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-blue-500"
            style={{ top: `${sectionMeasure.top}px` }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500 text-white text-[10px] font-mono px-2 py-0.5 ml-4">
              Section top: {Math.round(sectionMeasure.top)}px
            </div>
          </div>
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-blue-500"
            style={{ top: `${sectionMeasure.bottom}px` }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500 text-white text-[10px] font-mono px-2 py-0.5 ml-4">
              Section bottom: {Math.round(sectionMeasure.bottom)}px | h:{" "}
              {Math.round(sectionMeasure.height)}px
            </div>
          </div>
          {sectionMeasure.gapBelowContent > 40 && (
            <div
              className="absolute left-2 border-l-2 border-dashed border-yellow-500"
              style={{
                top: `${sectionMeasure.contentBottom}px`,
                height: `${sectionMeasure.gapBelowContent}px`,
              }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-ink text-[10px] font-mono px-2 py-0.5 ml-2 -mt-5">
                Empty: {Math.round(sectionMeasure.gapBelowContent)}px
              </div>
            </div>
          )}
        </>
      )}

      <div className="fixed top-20 right-4 z-[101] pointer-events-auto">
        <div className="rounded-lg bg-ink/90 text-white text-xs font-mono p-3 space-y-1 backdrop-blur-md min-w-[260px]">
          <p className="text-[10px] uppercase tracking-wider text-white/60 mb-2">
            Debug Ruler — Spacing
          </p>
          <p>Header height: {Math.round(headerHeight)}px</p>
          {measurements.map((m, i) => {
            const gap =
              i === 0 ? m.distanceFromHeader : m.top - measurements[i - 1].bottom;
            return (
              <p key={m.id} className={gap < 20 ? "text-yellow-400" : ""}>
                {m.label}: gap {Math.round(gap)}px
                {gap < 20 && " ⚠ tight"}
              </p>
            );
          })}
          {sectionMeasure && (
            <>
              <p className="text-[10px] uppercase tracking-wider text-white/60 pt-2 mt-2 border-t border-white/10">
                Hero Section
              </p>
              <p>Section height: {Math.round(sectionMeasure.height)}px</p>
              <p
                className={
                  sectionMeasure.gapBelowContent > 200
                    ? "text-yellow-400"
                    : sectionMeasure.gapBelowContent < 40
                      ? "text-red-400"
                      : ""
                }
              >
                Gap below: {Math.round(sectionMeasure.gapBelowContent)}px
                {sectionMeasure.gapBelowContent > 200 && " ⚠ too much"}
                {sectionMeasure.gapBelowContent < 40 && " ⚠ tight"}
              </p>
              <p className="text-white/60">
                Viewport: {viewport.h}px | S/V:{" "}
                {Math.round((sectionMeasure.height / viewport.h) * 100)}%
              </p>
            </>
          )}
          {contrastInfos.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wider text-white/60 pt-2 mt-2 border-t border-white/10">
                Contrast (WCAG AA ≥ 4.5:1)
              </p>
              <p className="text-[10px] text-white/40">
                Overlay: {Math.round(contrastInfos[0].overlayOpacity * 100)}% white
              </p>
              {contrastInfos.map((c, i) => (
                <p
                  key={i}
                  className={c.passes ? "text-green-400" : "text-red-400"}
                >
                  {c.label}: {c.ratio.toFixed(1)}:1{" "}
                  {c.passes ? "✓ pass" : "⚠ FAIL"}
                </p>
              ))}
              <p className="text-[10px] text-white/40 pt-1">
                est. bg: rgb({contrastInfos[0]?.estimatedBg.join(",")})
              </p>
              <p className="text-[10px] text-white/30">
                Note: estimated, not pixel-sampled
              </p>
            </>
          )}
          <p className="text-[10px] text-white/50 pt-2 border-t border-white/10 mt-2">
            Viewport: {viewport.w}×{viewport.h}
          </p>
        </div>
      </div>
    </div>
  );
}
