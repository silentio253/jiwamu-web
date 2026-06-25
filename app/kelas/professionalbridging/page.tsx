import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { waLink } from "@/lib/site";
import { CheckCircle } from "@/components/icons";

export const metadata: Metadata = {
  title: "CABP Professional Bridging Program — Kelas Jiwamu",
  description:
    "Program jalur khusus untuk psikolog (HIMPSI), psikolog klinis (IPK.ID), dokter (IDI), psikoanalis (API), konselor (IKI), dan profesional berbantuan lainnya.",
};

export default function ProfessionalBridgingPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
                Jalur Khusus Profesional
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
                CABP Professional Bridging Program
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
                Kami mengakui pengalaman profesional Anda. Program ini
                merupakan jalur khusus untuk psikolog (HIMPSI), psikolog klinis
                (IPK.ID), dokter (IDI), psikoanalis (API), konselor (IKI),
                perawat (PPNI), bidan (IBI), kesehatan masyarakat (IAKMI),
                hipnoterapis (PKHI dan PRAHIPTI), coach (ICF), dan berbagai
                profesi berbantuan lainnya.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8">
                <CTA
                  href={waLink("Hai Kak Nuy, saya ingin gabung CABP Professional Bridging Program!")}
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
            <h2 className="text-xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
              Standar Kompetensi
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-muted">
              Dengan mengikuti pelatihan ini, kamu mampu untuk:
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Memahami dinamika attachment dalam rentang kehidupan manusia, dari masa kanak-kanak hingga lansia",
              "Menganalisis masalah melalui kerangka attachment-based formulation",
              "Menerapkan perspektif attachment dalam konteks kesehatan mental, pendidikan, keluarga, pasangan, pekerjaan, spiritualitas, ekonomi, dan keadilan sosial",
              "Merancang layanan, program, atau intervensi berbasis attachment dalam berbagai bidang kehidupan",
              "Mengembangkan kemampuan menulis dan publikasi sebagai bagian dari edukasi publik",
              "Memahami etika, batas peran, persetujuan terinformasi, pengaturan praktik, dan tanggung jawab profesional",
              "Membangun praktik layanan berbasis attachment secara terstruktur, reflektif, dan bertanggung jawab",
              "Berkontribusi dalam ekosistem Jiwamu sebagai praktisi, penulis, peneliti, trainer, atau mitra pengembangan profesional",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle weight="bold" className="size-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-body text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
              Materi Pelajaran
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-muted">
              CABP Professional Bridging Program terdiri dari 10 modul utama (plus 3 materi matrikulasi):
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Matrikulasi 1 — Introduction to Attachment Studies",
              "Matrikulasi 2 — Measuring Attachment Style",
              "Matrikulasi 3 — Attachment Across the Lifespan",
              "Modul 1 — Writing for Publication",
              "Modul 2 — Attachment and Mental Health",
              "Modul 3 — Attachment and Education",
              "Modul 4 — Attachment and Workplace",
              "Modul 5 — Attachment and Parenting",
              "Modul 6 — Attachment and Romantic Relationship",
              "Modul 7 — Attachment and Spirituality",
              "Modul 8 — Attachment and Money",
              "Modul 9 — Attachment and Social Justice",
              "Modul 10 — Start Your Practice!",
            ].map((m, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-2xl border border-hairline-neutral bg-surface-alt p-4">
                  <span className="flex items-center justify-center size-8 rounded-lg bg-fill-soft text-xs font-semibold text-accent shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-body">{m}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-surface-alt">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
              Investasi
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 rounded-2xl border border-hairline-neutral bg-surface p-6 sm:p-8">
              <p className="text-3xl font-semibold text-ink">Rp 15.000.000</p>
              <div className="mt-4 pt-4 border-t border-hairline-neutral">
                <p className="text-sm text-muted">Durasi: 3 Bulan (100 Jam Pembelajaran) + 6 jam Matrikulasi</p>
                <p className="mt-1 text-sm text-muted">Blended learning: gabungan pembelajaran offline dan online.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-3xl font-serif font-normal tracking-tight text-ink text-balance">
              Siap untuk mengintegrasikan attachment dalam pekerjaan Anda?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8">
              <CTA
                href={waLink("Hai Kak Nuy, saya ingin gabung CABP Professional Bridging Program!")}
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
