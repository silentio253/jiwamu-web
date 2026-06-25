import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tes Kelekatan — Segera Hadir",
  description:
    "Tes kelekatan Jiwamu. Asesmen pola attachment dan interpretasi personal. Segera hadir.",
};

export default function TesKelekatanPage() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-surface pt-16">
      <div className="mx-auto max-w-lg px-4 sm:px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-deep">
          Segera Hadir
        </p>
        <h1 className="mt-6 text-4xl sm:text-5xl font-serif font-normal leading-[1.05] tracking-tight text-ink text-balance">
          Tes Kelekatan
        </h1>
        <p className="mt-6 text-lg text-muted text-pretty leading-relaxed">
          Asesmen pola attachment dan interpretasi personal sedang dalam
          pengembangan. Kami akan mengumumkan ketersediaannya melalui WhatsApp
          dan media sosial Jiwamu.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <CTA
            href={waLink(
              "Hai Kak Nuy, saya mau tahu kapan Tes Kelekatan Jiwamu akan tersedia!",
            )}
            size="lg"
            external
            withArrow
          >
            Kabari Saya
          </CTA>
          <CTA href="/" variant="ghost" size="lg">
            Kembali ke Beranda
          </CTA>
        </div>
      </div>
    </section>
  );
}
