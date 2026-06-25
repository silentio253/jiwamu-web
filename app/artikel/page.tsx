import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Artikel — Sumber Daya Jiwamu",
  description:
    "Baca artikel populer, reflektif, dan edukatif seputar kejiwaan, relasi, dan pengembangan diri dari Jiwamu.",
};

export default function ArtikelPage() {
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
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
              Artikel
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Baca artikel populer, reflektif, dan edukatif seputar kejiwaan,
              relasi, dan pengembangan diri. Konten akan segera tersedia.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
