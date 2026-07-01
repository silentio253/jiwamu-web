import Link from "next/link";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
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
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Tentang Kami — Jiwamu",
  description:
    "Jiwamu adalah ekosistem pengembangan diri dan media digital berbasis teori kelekatan. Ruang belajar, pendampingan, penerbitan, media, dan gerakan sosial.",
};

export default function TentangKamiPage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Inisiatif />
      <Legalitas />
      <Kontak />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="max-w-3xl">
          <Reveal>
            <p className="section-eyebrow">
              Tentang Kami
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.05] tracking-tight text-ink">
              Ekosistem pengembangan diri berbasis{" "}
              <span className="font-serif italic text-accent">teori kelekatan</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed text-pretty max-w-xl">
              Ruang belajar, pendampingan, penerbitan, media, dan gerakan sosial
              yang berangkat dari attachment — sebuah cabang empiris dari psikoanalisis.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[700px]">
          <Reveal>
            <p className="text-lg sm:text-xl text-muted leading-relaxed text-pretty">
              Jiwamu hadir sebagai ruang belajar, pendampingan, penerbitan,
              media, dan gerakan sosial yang berangkat dari teori kelekatan
              atau <em>attachment</em> — sebuah cabang empiris dari
              psikoanalisis.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed text-pretty">
              Kami percaya bahwa banyak persoalan manusia tidak dapat
              dilepaskan dari pengalaman relasional: bagaimana kita mencintai,
              merasa aman, terluka, bertahan, dan bertumbuh bersama orang lain.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed text-pretty">
              Secara hukum, Jiwamu merupakan merek dagang di bawah{" "}
              <strong className="text-ink">PT Jiwa Media Utama</strong>.
              Jiwamu juga menjadi bagian dari Pusat Usaha dan Kaderisasi
              Perkumpulan Pamong Jiwa Indonesia (PUSAKA PANJI) bersama
              beberapa lembaga lain, seperti Institut Psikoanalisis Indonesia,
              Yayasan Pusat Psikoanalisis Indonesia, Penerbit Minerva,
              Hypnopreneur Indonesia, dan TBM Matahari.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Inisiatif() {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Jiwamu Academy",
      desc: "Lembaga pelatihan sertifikasi attachment. Melalui program bertingkat seperti CAF, CAC, dan CABP, Jiwamu Academy membantu peserta memahami pola relasi, luka kelekatan, dan penerapan attachment dalam kehidupan personal maupun profesional.",
      href: "/kelas",
    },
    {
      icon: Heartbeat,
      title: "Jiwamu Center",
      desc: "Pusat layanan pendampingan coaching dan psikoanalisis. Layanan ini menyediakan ruang aman bagi individu yang ingin memahami diri, relasi, pengalaman emosional, dan pola hidup yang berulang secara lebih mendalam.",
      href: "/layanan",
    },
    {
      icon: BookOpen,
      title: "Penerbit Jiwamu",
      desc: "Rumah penerbitan bagi buku-buku populer dan sastra psikologis. Kami menerbitkan karya yang berlandaskan sains, pengalaman, dan pengetahuan kejiwaan yang memadai, tetapi tetap disampaikan secara hangat, jernih, dan dekat dengan kehidupan sehari-hari.",
      href: "/buku",
    },
    {
      icon: Sparkle,
      title: "Majalah Jiwamu",
      desc: "Ruang kolaborasi untuk membagikan, mempertemukan, dan menyatukan ide tentang jiwa dan kehidupan manusia. Majalah ini terbit berkala setiap bulan dan menjadi salah satu medium utama Jiwamu untuk membangun literasi kesehatan jiwa.",
      href: "/majalah",
    },
    {
      icon: UsersThree,
      title: "Jiwamu Project",
      desc: "Laboratorium riset dekolonisasi kesehatan mental yang didukung oleh semangat kolektif. Melalui Jiwamu Project, kami berupaya membaca ulang kesehatan mental dalam konteks pengalaman hidup, budaya, sejarah, dan kehidupan masyarakat Indonesia.",
      href: "/proyek",
    },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink mb-12">
            Inisiatif
          </h2>
        </Reveal>

        <div className="space-y-0">
          {initiatives.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Link
                href={item.href}
                className="group grid grid-cols-12 gap-4 sm:gap-8 items-start py-8 sm:py-10 border-t-2 border-hairline-neutral transition-colors duration-300 hover:bg-surface-alt -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 first:border-t-0"
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-3xl sm:text-4xl font-serif italic text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-xl bg-fill-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <item.icon weight="duotone" className="size-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <p className="text-sm sm:text-base text-muted leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Legalitas() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
                Legalitas
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-muted text-pretty">
                Jiwamu merupakan merek dagang di bawah PT Jiwa Media Utama,
                bagian dari PUSAKA PANJI.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.16}>
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
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <span className="size-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kontak() {
  const contacts = [
    { icon: MapPin, label: "Alamat", value: `${SITE.address.line}, ${SITE.address.city}, ${SITE.address.province}` },
    { icon: Phone, label: "WhatsApp", value: SITE.waDisplay },
    { icon: YoutubeLogo, label: "YouTube", value: "Jiwamu Talks" },
    { icon: InstagramLogo, label: "Instagram", value: "@jiwamu.daily" },
    { icon: TiktokLogo, label: "TikTok", value: "@jiwamu.daily" },
    { icon: Storefront, label: "Shopee", value: "jiwamu_store" },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
                Hubungi Kami
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-muted text-pretty">
                Kami menanti di ruang-ruang yang nyaman bagimu.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
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
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="rounded-2xl border-2 border-hairline-neutral bg-surface-alt overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {contacts.map((c, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-5 sm:p-6 ${
                        i % 2 === 1 ? "sm:border-l-2 border-hairline-neutral" : ""
                      } ${i < contacts.length - 1 ? "border-b-2 border-hairline-neutral" : ""}`}
                    >
                      <div className="flex items-center justify-center size-9 rounded-full bg-fill-soft text-ink shrink-0">
                        <c.icon weight="regular" className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-soft">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-ink truncate">
                          {c.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
