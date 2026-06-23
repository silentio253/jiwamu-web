"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import {
  ArrowRight,
  WhatsappLogo,
  YoutubeLogo,
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  Storefront,
} from "@/components/icons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <WhatYouNeed />
      <ThisMonth />
      <Connect />
      <Subscribe />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-auto sm:min-h-[100dvh] flex items-start sm:items-center overflow-hidden">
      <Image
        src="/ruang-aman.png"
        alt="Ruang aman — lanskap kontemplatif untuk bertumbuh bersama"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-surface via-surface/95 to-surface/80 sm:bg-gradient-to-r sm:from-surface sm:via-surface sm:to-surface/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-surface/50 via-surface/20 to-surface/30 sm:bg-gradient-to-b sm:from-surface/30 sm:via-transparent sm:to-surface/20"
      />

      <div className="relative mx-auto max-w-[1400px] w-full px-5 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-20">
        <div className="max-w-2xl">
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
            Ekosistem Kelekatan
          </p>
          <h1 className="mt-6 text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.08] sm:leading-[1.05] tracking-tight text-ink">
            Ruang aman untuk{" "}
            <span className="font-serif italic font-normal text-accent">
              bertumbuh
            </span>
            <br />
            bersama.
          </h1>
          <p className="mt-6 sm:mt-8 max-w-lg text-base sm:text-lg lg:text-xl leading-relaxed text-muted text-pretty">
            Jiwamu adalah ekosistem pengembangan diri dan media digital
            berbasis teori kelekatan — ruang belajar, pendampingan,
            penerbitan, media, dan gerakan sosial.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="/kelas"
              className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-lg bg-accent px-4 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-medium text-white shadow-accent transition-all duration-300 hover:bg-accent-deep active:scale-[0.98] whitespace-nowrap"
            >
              Mulai Perjalananmu
              <span className="flex items-center justify-center size-5 sm:size-6 rounded-full bg-surface/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight weight="bold" className="size-3 sm:size-3.5" />
              </span>
            </Link>
            <Link
              href={waLink(
                "Hai Kak Nuy, saya ingin tahu lebih lanjut tentang Jiwamu!",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-hairline-neutral bg-surface px-4 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-medium text-ink transition-all hover:border-accent hover:bg-fill-soft whitespace-nowrap"
            >
              Tanya Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
        <div className="max-w-[750px]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Manifesto
          </p>
          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl lg:text-[2.25rem] font-serif font-normal text-ink leading-[1.4] text-pretty">
            Sebagian besar dari kita tumbuh dengan keyakinan bahwa masalah
            hidup bisa diselesaikan dengan cukup usaha, cukup kesabaran, atau
            cukup doa. Kita diajarkan untuk kuat. Untuk tidak cengeng.
          </p>
          <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Di banyak keluarga, perasaan bukan sesuatu yang dibicarakan di
              meja makan. Perasaan adalah sesuatu yang ditelan bersama nasi
              dan lauk, lalu pura-pura kalau itu sudah berlalu.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Kita menjadi kian mahir menggunakan topeng &lsquo;si baik-baik
              saja&rsquo;, namun tidak pernah benar-benar paham mengapa kita
              selalu berkubang di tempat yang sama. Sering kali, perasaan
              yang tak pernah dibicarakan justru menetap lebih lama di dalam
              diri.
            </p>
          </div>
          <div className="mt-10 sm:mt-12 pl-6 sm:pl-8 border-l-2 border-accent">
            <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-ink leading-relaxed text-pretty">
              Jiwamu adalah wadah di mana segala rasa berlabuh tanpa dihakimi
              dan ruang di mana setiap proses bertumbuh aman melegakan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouNeed() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const items = [
    {
      title: "Kelas Pengembangan Diri",
      desc: "Mulai dan kembangkan kariermu untuk membantu sesama dengan para pengajar bereputasi.",
      href: "/kelas",
      cta: "Lihat Kelas",
      details:
        "Program sertifikasi attachment bertingkat: CAF, CAC, CABP. Dilengkapi modul, asesmen, dan komunitas alumni.",
    },
    {
      title: "Pendampingan Olah Jiwa",
      desc: "Dapatkan ruang aman untuk memahami diri, relasi, dan kehidupan emosionalmu bersama pendamping profesional.",
      href: "/layanan",
      cta: "Mulai Konsultasi",
      details:
        "Coaching dan psikoanalisis dengan sistem kontrak bulanan. 13 pendamping profesional dengan keahlian beragam.",
    },
    {
      title: "Suplemen Batin",
      desc: "Buku dan medium reflektif untuk menemani perjalanan batin dan pertumbuhanmu.",
      href: "/buku",
      cta: "Jelajahi Buku",
      details:
        "Penerbit Jiwamu menerbitkan buku populer dan sastra psikologis. Tersedia juga Majalah Jiwamu bulanan ber-ISSN.",
    },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-normal tracking-tight text-ink text-balance">
            Apa yang kamu butuhkan?
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted text-pretty">
            Tiga pintu masuk untuk bertumbuh bersama Jiwamu.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 rounded-xl border border-hairline-neutral overflow-hidden bg-surface-alt/80">
          {items.map((item, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={item.href}
                className={i > 0 ? "border-t border-hairline-neutral" : ""}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="group grid grid-cols-12 gap-4 sm:gap-8 items-center px-4 sm:px-10 py-6 sm:py-8 w-full text-left transition-colors duration-300 hover:bg-surface-alt"
                >
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="hidden sm:flex col-span-1 justify-center">
                    <div className="h-10 w-px bg-accent" />
                  </div>
                  <div className="col-span-7 sm:col-span-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-normal tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-muted leading-relaxed text-pretty">
                      {item.desc}
                    </p>
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      <ArrowRight weight="bold" className="size-3.5" />
                    </span>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-10 pb-6 sm:pb-8 pl-16 sm:pl-20">
                    <p className="text-sm text-muted leading-relaxed text-pretty mb-4">
                      {item.details}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-deep active:scale-[0.98] whitespace-nowrap"
                    >
                      {item.cta}
                      <ArrowRight weight="bold" className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ThisMonth() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Bulan ini
            </p>
            <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-normal tracking-tight text-ink text-balance">
              Fokus: kelas terdekat
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed text-pretty max-w-md">
              Dasar membaca pola relasi, memahami kebutuhan emosional, dan
              merespons orang lain dengan lebih tepat.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                href="/kelas/attachmentfacilitator"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-accent px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white shadow-accent transition-all hover:bg-accent-deep active:scale-[0.98] whitespace-nowrap"
              >
                Daftar Sekarang
                <span className="flex items-center justify-center size-6 rounded-full bg-surface/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowRight weight="bold" className="size-3.5" />
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-hairline-neutral bg-surface p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink">
                    11
                  </p>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-soft">
                    Juli 2026
                  </p>
                </div>
                <div className="border-l border-hairline-neutral pl-4 sm:pl-6">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink">
                    4
                  </p>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-soft">
                    Kota
                  </p>
                </div>
                <div className="border-l border-hairline-neutral pl-4 sm:pl-6">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink">
                    9
                  </p>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-soft">
                    Jam
                  </p>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-hairline-neutral">
                <p className="text-sm font-medium text-ink">Kota tersedia</p>
                <p className="mt-1 sm:mt-2 text-sm text-muted">
                  Malang &middot; Jakarta &middot; Yogyakarta &middot; Bandung
                </p>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-hairline-neutral">
                <p className="text-sm font-medium text-ink">
                  Level 1 &middot; CAF
                </p>
                <p className="mt-1 text-sm text-muted">
                  Certification in Attachment Facilitator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  const contacts = [
    {
      icon: WhatsappLogo,
      label: "WhatsApp",
      value: SITE.waDisplay,
      href: waLink("Hai Kak Nuy!"),
    },
    {
      icon: YoutubeLogo,
      label: "YouTube",
      value: "Jiwamu Talks",
      href: SITE.social.youtube,
    },
    {
      icon: FacebookLogo,
      label: "Facebook",
      value: "Jiwamu Talks",
      href: "#",
    },
    {
      icon: InstagramLogo,
      label: "Instagram",
      value: "@jiwamu.daily",
      href: SITE.social.instagram,
    },
    {
      icon: Storefront,
      label: "Threads",
      value: "@jiwamu.daily",
      href: SITE.social.threads,
    },
    {
      icon: TiktokLogo,
      label: "TikTok",
      value: "@jiwamu.daily",
      href: SITE.social.tiktok,
    },
    {
      icon: Storefront,
      label: "Shopee",
      value: "jiwamu_store",
      href: SITE.social.shopee,
    },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-normal tracking-tight text-ink text-balance">
          Mari terhubung!
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted">
          Kami menanti di ruang-ruang yang nyaman bagimu.
        </p>

        <div className="mt-10 sm:mt-14 rounded-xl border border-hairline-neutral overflow-hidden bg-surface-alt/80">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`flex items-center gap-4 p-5 sm:p-6 lg:p-8 transition-colors duration-300 hover:bg-surface-alt ${
                  i % 2 === 1 && i < contacts.length
                    ? "sm:border-l border-hairline-neutral"
                    : ""
                } ${i < contacts.length - 1 ? "border-b border-hairline-neutral" : ""} ${
                  i === contacts.length - 1 && contacts.length % 2 === 1
                    ? "sm:col-span-2 sm:border-b-0"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center size-9 sm:size-10 rounded-full bg-fill-soft text-ink shrink-0">
                  <c.icon weight="regular" className="size-4 sm:size-5" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-soft">
                    {c.label}
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-sm sm:text-base font-medium text-ink truncate">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
            <div className="hidden sm:flex items-center justify-center p-6 lg:p-8 border-l border-hairline-neutral">
              <p className="text-xs text-soft font-serif italic">
                Bertumbuh Bersama
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          Berlangganan
        </p>
        <h2 className="mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-serif font-normal tracking-tight text-ink text-balance">
          Dapatkan edisi terbaru Majalah Jiwamu setiap bulan.
        </h2>
        <p className="mt-3 sm:mt-4 text-muted text-pretty">
          Gratis. Langsung ke WhatsApp kamu.
        </p>
        <form className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            aria-label="Nama"
            className="flex-1 rounded-lg border border-hairline-neutral bg-surface px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
          <input
            type="tel"
            name="phone"
            placeholder="No. WhatsApp"
            aria-label="No. WhatsApp"
            className="flex-1 rounded-lg border border-hairline-neutral bg-surface px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white shadow-accent transition-all hover:bg-accent-deep hover:shadow-accent-lg active:scale-[0.98] whitespace-nowrap"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
}
