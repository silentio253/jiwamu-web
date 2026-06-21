import Link from "next/link";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";

import {
  ArrowRight,
  Certificate,
  PenNib,
  UsersThree,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Kelas — Jiwamu",
  description:
    "Mulai dan kembangkan kariermu untuk memahami diri dan membantu sesama. Program sertifikasi attachment yang dirancang untuk masyarakat umum, helper, profesional, maupun siapa saja yang ingin bertumbuh bersama.",
};

export default function KelasPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-fill-soft to-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Sertifikasi &amp; Pelatihan
            </p>
          </Reveal>
          <Reveal delay={0.08} y={32} blur>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink text-balance">
              Mulai dan kembangkan kariermu untuk memahami diri dan membantu
              sesama.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-muted text-pretty">
              Jiwamu menghadirkan program sertifikasi attachment yang dirancang
              untuk masyarakat umum, helper, profesional, maupun siapa saja yang
              ingin bertumbuh bersama.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
            {CERTIFICATIONS.map((cert, i) => (
              <RevealItem key={cert.href}>
                <Link
                  href={cert.href}
                  className="group relative flex flex-col rounded-2xl border border-hairline bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-accent-lg h-full"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center size-10 rounded-xl bg-fill-soft text-sm font-semibold text-accent">
                      {i + 1}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-soft">
                      Level {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {cert.code}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted text-pretty flex-1">
                    {cert.desc}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-hairline-neutral pt-4">
                    <span className="text-sm font-medium text-ink">
                      {cert.price}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Detail
                      <ArrowRight
                        weight="bold"
                        className="size-3.5 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-fill-soft to-white p-8 sm:p-10">
              <div className="flex items-center justify-center size-12 rounded-xl bg-accent text-white">
                <Certificate weight="duotone" className="size-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                CABP Professional Bridging Program
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                Program jalur khusus untuk psikolog (HIMPSI), psikolog klinis
                (IPK.ID), dokter (IDI), psikoanalis (API), konselor (IKI),
                perawat (PPNI), bidan (IBI), kesehatan masyarakat (IAKMI),
                hipnoterapis (PKHI dan PRAHIPTI), dan coach (ICF).
              </p>
              <p className="mt-4 text-lg font-medium text-ink">Rp 15.000.000</p>
              <div className="mt-6">
                <CTA href="/kelas/professionalbridging" withArrow>
                  Lihat Program
                </CTA>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-hairline bg-white p-8 sm:p-10">
              <div className="flex items-center justify-center size-12 rounded-xl bg-fill-soft text-accent">
                <PenNib weight="duotone" className="size-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                Jiwamu Writing Lab
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                Kelas untuk mendampingi para pemengaruh, pemerhati, dan
                profesional kesehatan mental dalam menulis untuk buku dari
                pengembangan ide hingga naskah siap diterbitkan.
              </p>
              <p className="mt-4 text-lg font-medium text-ink">Rp 500.000</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTA href="/kelas/writinglab" variant="ghost" withArrow>
                  Lihat Kelas
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-hairline bg-surface-alt p-8 sm:p-12 text-center">
            <div className="flex items-center justify-center size-14 rounded-2xl bg-fill-soft text-accent mx-auto">
              <UsersThree weight="duotone" className="size-7" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink text-balance">
              Temukan daftar alumni kami
            </h2>
            <p className="mt-3 text-muted text-pretty max-w-xl mx-auto">
              Bergabunglah dengan ekosistem belajar dan komunitas yang terus
              bertumbuh melalui komunitas alumni, pertemuan nasional, media dan
              majalah, pengembangan profesional, hingga peluang menjadi penulis,
              coach, trainer, atau partner Jiwamu.
            </p>
            <div className="mt-8">
              <CTA href="/alumni" withArrow>
                Lihat Alumni
              </CTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const CERTIFICATIONS = [
  {
    code: "CAF",
    title: "Certification in Attachment Facilitator",
    desc: "Pelajari keahlian untuk membaca kebutuhan dasar seseorang, memahami kecenderungan gaya kelekatan, mengelola emosi dalam hubungan, dan menyelesaikan berbagai masalah dalam kehidupan sehari-hari.",
    price: "Rp 2.500.000",
    href: "/kelas/attachmentfacilitator",
  },
  {
    code: "CAC",
    title: "Certification in Attachment Coaching",
    desc: "Pelajari keahlian untuk menguraikan 'cerita hidup' seseorang, memproses luka kelekatan, dan menerapkan berbagai pendekatan untuk pemulihan batin di setiap rentang kehidupan.",
    price: "Rp 3.000.000",
    href: "/kelas/attachmentcoaching",
  },
  {
    code: "CABP",
    title: "Certification in Attachment-Based Practitioner",
    desc: "Pelajari keahlian lanjutan untuk memahami dinamika kelekatan dalam berbagai rentang usia dan terapkan untuk pengasuhan, percintaan, pendidikan, industri dan organisasi, spiritual, dan keadilan sosial.",
    price: "Rp 13.000.000",
    href: "/kelas/attachmentpractitioner",
  },
];
