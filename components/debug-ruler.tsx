"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

async function sampleBackgroundColor(x: number, y: number): Promise<string> {
  try {
    const canvas = document.createElement("canvas");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "#ffffff";
    ctx.scale(dpr, dpr);
    const img = new Image();
    img.crossOrigin = "anonymous";

    return new Promise<string>((resolve) => {
      img.onload = () => {
        try {
          ctx.drawImage(img, x, y, 1, 1, 0, 0, 1, 1);
          const pixel = ctx.getImageData(0, 0, 1, 1).data;
          resolve(`rgb(${pixel[0]},${pixel[1]},${pixel[2]})`);
        } catch {
          resolve("#ffffff");
        }
      };
      img.onerror = () => resolve("#ffffff");
      setTimeout(() => resolve("#ffffff"), 1000);

      const bgImage = document.querySelector(
        'section img[alt*="Cahaya"]',
      ) as HTMLImageElement | null;
      if (bgImage && bgImage.complete && bgImage.naturalWidth > 0) {
        img.src = bgImage.src;
      } else {
        resolve("#fafbfd");
      }
    });
  } catch {
    return "#ffffff";
  }
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function parseColor(color: string): [number, number, number] {
  if (color.startsWith("#")) {
    return hexToRgb(color);
  }
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  }
  return [255, 255, 255];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const toLinear = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function calculateContrast(color1: string, color2: string): number {
  const l1 = relativeLuminance(parseColor(color1));
  const l2 = relativeLuminance(parseColor(color2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
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
  contentLeft: number;
  contentWidth: number;
  imageRightEdge: number;
};

type ContrastSample = {
  label: string;
  top: number;
  left: number;
  width: number;
  height: number;
  bgColor: string;
  textColor: string;
  contrastRatio: number;
  passes: boolean;
};

export function DebugRuler() {
  const searchParams = useSearchParams();
  const enabled = searchParams.get("debug") === "1";
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [sectionMeasure, setSectionMeasure] = useState<SectionMeasurement | null>(null);
  const [contrastSamples, setContrastSamples] = useState<ContrastSample[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!enabled) return;

    const measure = async () => {
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
        contentLeft: eyebrowRect.left,
        contentWidth: eyebrowRect.width,
        imageRightEdge: sectionRect.right,
      });

      const samples: ContrastSample[] = [];
      const targets: Array<{ el: Element; label: string; color: string }> = [
        { el: eyebrow, label: "Eyebrow", color: "#4B6BFF" },
        { el: h1, label: "H1", color: "#101828" },
        { el: bodyP, label: "Body", color: "#475467" },
      ];

      for (const { el, label, color } of targets) {
        const rect = el.getBoundingClientRect();
        const sampleX = Math.max(rect.left + 8, 8);
        const sampleY = rect.top + rect.height / 2;
        const bgColor = await sampleBackgroundColor(sampleX, sampleY);
        const ratio = calculateContrast(color, bgColor);
        samples.push({
          label,
          top: rect.top + rect.height / 2,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          bgColor,
          textColor: color,
          contrastRatio: ratio,
          passes: ratio >= 4.5,
        });
      }
      setContrastSamples(samples);
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

      {contrastSamples.map((s, i) => (
        <div key={i}>
          <div
            className="absolute border-2 border-dashed"
            style={{
              borderColor: s.passes ? "#22c55e" : "#ef4444",
              top: `${s.top - s.height / 2}px`,
              left: `${s.left}px`,
              width: `${Math.min(s.width, 80)}px`,
              height: `${s.height}px`,
            }}
          >
            <div
              className={`inline-flex items-center gap-1.5 ${
                s.passes ? "bg-green-500" : "bg-red-500"
              } text-white text-[9px] font-mono px-1.5 py-0.5 -mt-5`}
            >
              {s.label}: {s.contrastRatio.toFixed(1)}:1
              {!s.passes && " ⚠"}
            </div>
          </div>
        </div>
      ))}

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
                Gap below content: {Math.round(sectionMeasure.gapBelowContent)}px
                {sectionMeasure.gapBelowContent > 200 && " ⚠ too much empty space"}
                {sectionMeasure.gapBelowContent < 40 && " ⚠ too tight"}
              </p>
              <p className="text-white/60">
                Viewport: {viewport.h}px | Section/Viewport:{" "}
                {Math.round((sectionMeasure.height / viewport.h) * 100)}%
              </p>
            </>
          )}
          {contrastSamples.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wider text-white/60 pt-2 mt-2 border-t border-white/10">
                Contrast (WCAG AA ≥ 4.5:1)
              </p>
              {contrastSamples.map((s, i) => (
                <p
                  key={i}
                  className={s.passes ? "" : "text-red-400"}
                >
                  {s.label}: {s.contrastRatio.toFixed(1)}:1{" "}
                  {!s.passes && "⚠ FAIL"}
                </p>
              ))}
              <p className="text-[10px] text-white/40 pt-1">
                Text {contrastSamples[0]?.textColor} on bg{" "}
                {contrastSamples[0]?.bgColor}
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

