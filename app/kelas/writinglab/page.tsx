import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { waLink } from "@/lib/site";
import { } from "@/components/icons";

export const metadata: Metadata = {
  title: "Jiwamu Writing Lab — Kelas Jiwamu",
  description:
    "Kelas inkubasi menulis bagi pemengaruh, pemerhati, pendidik, dan profesional kesehatan mental yang ingin mengembangkan gagasan menjadi naskah buku.",
};

export default function WritingLabPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
                Bootcamp
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
                Jiwamu Writing Lab
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
                Kelas inkubasi menulis bagi pemengaruh, pemerhati, pendidik,
                dan profesional kesehatan mental yang ingin mengembangkan
                gagasan menjadi naskah buku. Peserta akan didampingi mulai dari
                pengembangan ide, penyusunan konsep, penulisan awal, hingga
                menuju naskah yang siap diterbitkan.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8">
                <CTA
                  href={waLink("Hai Kak Nuy, saya ingin gabung kelas Jiwamu Writing Lab!")}
                  size="lg"
                  external
                  withArrow
                >
                  Daftar Sekarang
                </CTA>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-surface-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
              Apa yang akan kamu pelajari?
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Sesi 1 — Membaca Dunia Buku", desc: "Membahas dunia perbukuan di Indonesia, mitos tentang bakat menulis, mengapa menulis penting bagi profesional dan pemengaruh." },
              { title: "Sesi 2 — Tahapan Menulis", desc: "Membahas proses menulis dari awal hingga siap dikembangkan: menemukan ide, pratulis, menulis draf, merevisi, dan swasunting." },
              { title: "Sesi 3 — Strategi Pengembangan Naskah", desc: "Membahas teknik pengembangan naskah, termasuk teknik FREE, transkripsi, pengembangan bahan mentah." },
              { title: "Sesi 4 — Inkubasi Naskah", desc: "Peserta mulai menyiapkan arah naskah masing-masing dan menyusun rencana penulisan untuk proses inkubasi lanjutan." },
            ].map((sesi, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-hairline-neutral bg-surface p-6">
                  <h3 className="text-base font-semibold text-ink">{sesi.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{sesi.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
              Investasi
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 rounded-2xl border border-hairline-neutral bg-surface-alt p-6 sm:p-8">
              <p className="text-3xl font-semibold text-ink">Rp 500.000</p>
              <p className="mt-2 text-sm text-muted">
                Biaya belum termasuk ongkos produksi buku
              </p>
              <div className="mt-4 pt-4 border-t border-hairline-neutral">
                <p className="text-sm text-muted">Durasi: 2 Minggu (4 Pertemuan Daring)</p>
                <p className="mt-1 text-sm text-muted">Setelah sesi materi, peserta tetap didampingi hingga naskah siap terbit.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-surface-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink text-balance">
              Siap membawa ide dan pengaruhmu lebih luas?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8">
              <CTA
                href={waLink("Hai Kak Nuy, saya ingin gabung kelas Jiwamu Writing Lab!")}
                size="lg"
                external
                withArrow
              >
                Daftar Sekarang
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
