import Link from "next/link";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";
import {
  GraduationCap,
  Heartbeat,
  BookOpen,
  Sparkle,
  UsersThree,
  MapPin,
  Phone,
  YoutubeLogo,
  InstagramLogo,
  TiktokLogo,
  Storefront,
  ArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Tentang Kami — Jiwamu",
  description:
    "Jiwamu adalah ekosistem pengembangan diri dan media digital berbasis teori kelekatan. Ruang belajar, pendampingan, penerbitan, media, dan gerakan sosial.",
};

export default function TentangKamiPage() {
  return (
    <>
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="section-eyebrow">Tentang Kami</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.05] tracking-tight text-ink">
                Ekosistem pengembangan diri berbasis{" "}
                <span className="italic text-accent">teori kelekatan</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed text-pretty max-w-xl">
                Ruang belajar, pendampingan, penerbitan, media, dan gerakan
                sosial yang berangkat dari attachment — sebuah cabang empiris
                dari psikoanalisis.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <div className="space-y-5 text-muted leading-relaxed text-pretty">
                <p>
                  Jiwamu hadir sebagai ruang belajar, pendampingan, penerbitan,
                  media, dan gerakan sosial yang berangkat dari teori kelekatan
                  atau <em>attachment</em> — sebuah cabang empiris dari
                  psikoanalisis.
                </p>
                <p>
                  Kami percaya bahwa banyak persoalan manusia tidak dapat
                  dilepaskan dari pengalaman relasional: bagaimana kita
                  mencintai, merasa aman, terluka, bertahan, dan bertumbuh
                  bersama orang lain.
                </p>
                <p>
                  Secara hukum, Jiwamu merupakan merek dagang di bawah{" "}
                  <strong className="text-ink">PT Jiwa Media Utama</strong>.
                  Jiwamu juga menjadi bagian dari Pusat Usaha dan Kaderisasi
                  Perkumpulan Pamong Jiwa Indonesia (PUSAKA PANJI).
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-2xl border-2 border-hairline-neutral bg-surface p-6 sm:p-8">
                <h3 className="text-sm font-semibold text-ink mb-4">
                  Lembaga Mitra
                </h3>
                <ul className="space-y-3">
                  {[
                    "Institut Psikoanalisis Indonesia",
                    "Yayasan Pusat Psikoanalisis Indonesia",
                    "Penerbit Minerva",
                    "Hypnopreneur Indonesia",
                    "TBM Matahari",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted">
                      <span className="size-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink mb-10">
              Inisiatif
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
            {[
              {
                icon: GraduationCap,
                title: "Jiwamu Academy",
                desc: "Lembaga pelatihan sertifikasi attachment. Program bertingkat: CAF, CAC, CABP.",
                href: "/kelas",
              },
              {
                icon: Heartbeat,
                title: "Jiwamu Center",
                desc: "Pusat layanan pendampingan coaching dan psikoanalisis. Ruang aman untuk memahami diri.",
                href: "/layanan",
              },
              {
                icon: BookOpen,
                title: "Penerbit Jiwamu",
                desc: "Rumah penerbitan buku populer dan sastra psikologis berbasis kejiwaan.",
                href: "/buku",
              },
              {
                icon: Sparkle,
                title: "Majalah Jiwamu",
                desc: "Terbitan bulanan ISSN. Ruang kolaborasi untuk berbagi ide tentang jiwa dan kehidupan.",
                href: "/majalah",
              },
              {
                icon: UsersThree,
                title: "Jiwamu Project",
                desc: "Laboratorium riset dekolonisasi kesehatan mental berbasis budaya Indonesia.",
                href: "/proyek",
              },
            ].map((item, i) => (
              <RevealItem key={i} index={i}>
                <Link
                  href={item.href}
                  className="group flex flex-col rounded-2xl border-2 border-hairline-neutral bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent h-full"
                >
                  <div className="flex items-center justify-center size-11 rounded-xl bg-fill-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <item.icon weight="duotone" className="size-5.5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed text-pretty flex-1">
                    {item.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Pelajari
                    <ArrowRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
                  Hubungi Kami
                </h2>
                <p className="mt-4 text-muted text-pretty">
                  Kami menanti di ruang-ruang yang nyaman bagimu.
                </p>
                <div className="mt-6">
                  <CTA
                    href={waLink("Hai Kak Nuy, saya ingin tahu lebih lanjut tentang Jiwamu!")}
                    size="lg"
                    external
                    withArrow
                  >
                    Hubungi Kami
                  </CTA>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-2xl border-2 border-hairline-neutral bg-surface overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {[
                    { icon: MapPin, label: "Alamat", value: `${SITE.address.line}, ${SITE.address.city}` },
                    { icon: Phone, label: "WhatsApp", value: SITE.waDisplay },
                    { icon: YoutubeLogo, label: "YouTube", value: "Jiwamu Talks" },
                    { icon: InstagramLogo, label: "Instagram", value: "@jiwamu.daily" },
                    { icon: TiktokLogo, label: "TikTok", value: "@jiwamu.daily" },
                    { icon: Storefront, label: "Shopee", value: "jiwamu_store" },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-4 sm:p-5 ${
                        i % 2 === 1 ? "sm:border-l-2 border-hairline-neutral" : ""
                      } ${i < 5 ? "border-b-2 border-hairline-neutral" : ""}`}
                    >
                      <div className="flex items-center justify-center size-8 rounded-lg bg-fill-soft text-ink shrink-0">
                        <c.icon weight="regular" className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-soft">{c.label}</p>
                        <p className="mt-0.5 text-sm font-medium text-ink truncate">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
