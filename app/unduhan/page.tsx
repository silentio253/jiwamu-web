import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Unduhan — Sumber Daya Jiwamu",
  description:
    "Unduh materi, modul, dan sumber daya gratis dari Jiwamu untuk pengembangan diri dan profesional.",
};

export default function UnduhanPage() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Sumber Daya
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
              Unduhan
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Unduh materi, modul, dan sumber daya gratis dari Jiwamu untuk
              pengembangan diri dan profesional. Konten akan segera tersedia.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
