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

function calculateContrast(
  c1: [number, number, number],
  c2: [number, number, number],
): number {
  const l1 = relativeLuminance(c1);
  const l2 = relativeLuminance(c2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

type ContrastSample = {
  label: string;
  top: number;
  left: number;
  width: number;
  height: number;
  bgHex: string;
  textHex: string;
  ratio: number;
  passes: boolean;
};

export function DebugRuler() {
  const searchParams = useSearchParams();
  const enabled = searchParams.get("debug") === "1";
  const [samples, setSamples] = useState<ContrastSample[]>([]);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!enabled) return;

    let retries = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const measure = () => {
      const img = document.querySelector(
        'section img[alt*="ruang aman"]',
      ) as HTMLImageElement | null;
      const eyebrow = document.querySelector(
        'section p[class*="tracking"]',
      );
      const h1 = document.querySelector("section h1");
      const bodyP = document.querySelector("section h1 + p");

      setViewport({ w: window.innerWidth, h: window.innerHeight });

      if (!img || !eyebrow || !h1 || !bodyP) return false;
      if (img.naturalWidth === 0) return false;

      const targets: Array<{
        el: Element;
        label: string;
        hex: string;
      }> = [
        { el: eyebrow, label: "Eyebrow", hex: "#315CF0" },
        { el: h1, label: "H1", hex: "#101828" },
        { el: bodyP, label: "Body", hex: "#475467" },
      ];

      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return false;

        const imgRect = img.getBoundingClientRect();
        if (imgRect.width === 0 || imgRect.height === 0) return false;

        canvas.width = Math.round(imgRect.width);
        canvas.height = Math.round(imgRect.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const results: ContrastSample[] = [];

        for (const { el, label, hex } of targets) {
          const rect = el.getBoundingClientRect();
          const sampleX = Math.max(
            0,
            Math.min(Math.round(rect.left + 10 - imgRect.left), canvas.width - 1),
          );
          const sampleY = Math.max(
            0,
            Math.min(
              Math.round(rect.top + rect.height / 2 - imgRect.top),
              canvas.height - 1,
            ),
          );

          const pixel = ctx.getImageData(sampleX, sampleY, 1, 1).data;
          const bgHex = rgbToHex(pixel[0], pixel[1], pixel[2]);
          const ratio = calculateContrast(hexToRgb(hex), [
            pixel[0],
            pixel[1],
            pixel[2],
          ]);
          results.push({
            label,
            top: rect.top + rect.height / 2,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            bgHex,
            textHex: hex,
            ratio,
            passes: ratio >= 4.5,
          });
        }

        setSamples(results);
        return true;
      } catch {
        return false;
      }
    };

    const tryMeasure = () => {
      const success = measure();
      retries++;
      if (success || retries > 20) {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(tryMeasure, 300);
    tryMeasure();

    const onResize = () => {
      retries = 0;
      intervalId = setInterval(tryMeasure, 300);
      tryMeasure();
    };

    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {samples.map((s, i) => (
        <div key={i}>
          <div
            className="absolute border-2 border-dashed"
            style={{
              borderColor: s.passes ? "#22c55e" : "#ef4444",
              top: `${s.top - s.height / 2}px`,
              left: `${s.left}px`,
              width: `${Math.min(s.width, 100)}px`,
              height: `${s.height}px`,
            }}
          >
            <div
              className={`inline-flex items-center gap-1.5 ${
                s.passes ? "bg-green-500" : "bg-red-500"
              } text-white text-[9px] font-mono px-1.5 py-0.5 -mt-5`}
            >
              {s.label}: {s.ratio.toFixed(1)}:1 {!s.passes && "⚠"}
            </div>
          </div>
        </div>
      ))}

      <div className="fixed top-20 right-4 z-[101] pointer-events-auto">
        <div className="rounded-lg bg-ink/90 text-white text-xs font-mono p-3 space-y-1 backdrop-blur-md min-w-[280px]">
          <p className="text-[10px] uppercase tracking-wider text-white/60 mb-2">
            Contrast — REAL pixel sampling
          </p>
          {samples.length === 0 && (
            <p className="text-yellow-400">Loading image samples...</p>
          )}
          {samples.map((s, i) => (
            <p
              key={i}
              className={s.passes ? "text-green-400" : "text-red-400"}
            >
              {s.label}: {s.ratio.toFixed(1)}:1{" "}
              {s.passes ? "✓ pass" : "⚠ FAIL"} | bg: {s.bgHex}
            </p>
          ))}
          {samples.length > 0 && (
            <p className="text-[10px] text-white/40 pt-2 border-t border-white/10 mt-2">
              Actual pixel color at text position (local image, no CORS)
            </p>
          )}
          <p className="text-[10px] text-white/50 pt-2 border-t border-white/10 mt-2">
            Viewport: {viewport.w}×{viewport.h}
          </p>
        </div>
      </div>
    </div>
  );
}
