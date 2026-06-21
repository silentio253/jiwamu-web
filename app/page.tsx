import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
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

export const metadata: Metadata = {
  title: "Jiwamu — Bertumbuh Bersama",
  description:
    "Ruang aman untuk bertumbuh bersama. Ekosistem pengembangan diri dan media digital berbasis teori kelekatan.",
};

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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
        alt="Cahaya matahari pagi menerangi lanskap terbuka"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30"
      />

      <div className="relative mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Ekosistem Kelekatan
          </p>
          <h1 className="mt-6 text-[2.5rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-ink">
            Ruang aman untuk{" "}
            <span className="font-serif italic font-normal text-accent">
              bertumbuh
            </span>
            <br />
            bersama.
          </h1>
          <p className="mt-8 max-w-lg text-lg sm:text-xl leading-relaxed text-muted text-pretty">
            Jiwamu adalah ekosistem pengembangan diri dan media digital
            berbasis teori kelekatan — ruang belajar, pendampingan,
            penerbitan, media, dan gerakan sosial.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CTA href="/kelas" size="lg" withArrow>
              Mulai Perjalananmu
            </CTA>
            <CTA
              href={waLink(
                "Hai Kak Nuy, saya ingin tahu lebih lanjut tentang Jiwamu!",
              )}
              variant="ghost"
              size="lg"
              external
            >
              Tanya Kami
            </CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
        <div className="max-w-[750px]">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Manifesto
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-10 text-2xl sm:text-3xl lg:text-[2.5rem] font-serif font-normal text-ink leading-[1.35] text-pretty">
              Sebagian besar dari kita tumbuh dengan keyakinan bahwa masalah
              hidup bisa diselesaikan dengan cukup usaha, cukup kesabaran, atau
              cukup doa. Kita diajarkan untuk kuat. Untuk tidak cengeng.
            </p>
          </Reveal>
          <div className="mt-10 space-y-6">
            <Reveal delay={0.16}>
              <p className="text-base sm:text-lg text-muted leading-relaxed text-pretty">
                Di banyak keluarga, perasaan bukan sesuatu yang dibicarakan di
                meja makan. Perasaan adalah sesuatu yang ditelan bersama nasi
                dan lauk, lalu pura-pura kalau itu sudah berlalu.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-base sm:text-lg text-muted leading-relaxed text-pretty">
                Kita menjadi kian mahir menggunakan topeng &lsquo;si baik-baik
                saja&rsquo;, namun tidak pernah benar-benar paham mengapa kita
                selalu berkubang di tempat yang sama. Sering kali, perasaan
                yang tak pernah dibicarakan justru menetap lebih lama di dalam
                diri.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.32}>
            <div className="mt-12 pl-8 border-l-2 border-accent">
              <p className="text-xl sm:text-2xl font-serif italic text-ink leading-relaxed text-pretty">
                Jiwamu adalah wadah di mana segala rasa berlabuh tanpa
                dihakimi dan ruang di mana setiap proses bertumbuh aman
                melegakan.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatYouNeed() {
  const items = [
    {
      title: "Kelas Pengembangan Diri",
      desc: "Mulai dan kembangkan kariermu untuk membantu sesama dengan para pengajar bereputasi.",
      href: "/kelas",
      cta: "Lihat Kelas",
    },
    {
      title: "Pendampingan Olah Jiwa",
      desc: "Dapatkan ruang aman untuk memahami diri, relasi, dan kehidupan emosionalmu bersama pendamping profesional.",
      href: "/layanan",
      cta: "Mulai Konsultasi",
    },
    {
      title: "Suplemen Batin",
      desc: "Buku dan medium reflektif untuk menemani perjalanan batin dan pertumbuhanmu.",
      href: "/buku",
      cta: "Jelajahi Buku",
    },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-ink text-balance">
              Apa yang kamu butuhkan?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg text-muted text-pretty">
              Tiga pintu masuk untuk bertumbuh bersama Jiwamu.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-16 rounded-xl border border-hairline-neutral overflow-hidden bg-white/50">
            {items.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group grid grid-cols-12 gap-4 sm:gap-8 items-center px-6 sm:px-10 py-8 sm:py-10 transition-colors duration-500 hover:bg-white ${
                  i > 0 ? "border-t border-hairline-neutral" : ""
                }`}
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-serif text-3xl sm:text-4xl italic text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="hidden sm:flex col-span-1 justify-center">
                  <div className="h-12 w-px bg-accent" />
                </div>
                <div className="col-span-7 sm:col-span-7">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>
                <div className="col-span-3 sm:col-span-3 text-right">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {item.cta}
                    <ArrowRight
                      weight="bold"
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ThisMonth() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Bulan ini
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-ink text-balance">
                Fokus: kelas terdekat
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed text-pretty max-w-md">
                Dasar membaca pola relasi, memahami kebutuhan emosional, dan
                merespons orang lain dengan lebih tepat.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8">
                <CTA href="/kelas/attachmentfacilitator" size="lg" withArrow>
                  Daftar Sekarang
                </CTA>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="rounded-xl border border-hairline-neutral bg-surface p-8 sm:p-10">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-5xl sm:text-6xl font-serif text-ink">11</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-soft">
                      Juli 2026
                    </p>
                  </div>
                  <div className="text-center sm:text-left border-l border-hairline-neutral pl-6">
                    <p className="text-5xl sm:text-6xl font-serif text-ink">4</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-soft">
                      Kota
                    </p>
                  </div>
                  <div className="text-center sm:text-left border-l border-hairline-neutral pl-6">
                    <p className="text-5xl sm:text-6xl font-serif text-ink">9</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-soft">
                      Jam
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-hairline-neutral">
                  <p className="text-sm font-medium text-ink">Kota tersedia</p>
                  <p className="mt-2 text-sm text-muted">
                    Malang &middot; Jakarta &middot; Yogyakarta &middot; Bandung
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-hairline-neutral">
                  <p className="text-sm font-medium text-ink">Level 1 &middot; CAF</p>
                  <p className="mt-1 text-sm text-muted">
                    Certification in Attachment Facilitator
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  const contacts = [
    { icon: WhatsappLogo, label: "WhatsApp", value: SITE.waDisplay, href: waLink("Hai Kak Nuy!") },
    { icon: YoutubeLogo, label: "YouTube", value: "Jiwamu Talks", href: SITE.social.youtube },
    { icon: FacebookLogo, label: "Facebook", value: "Jiwamu Talks", href: "#" },
    { icon: InstagramLogo, label: "Instagram", value: "@jiwamu.daily", href: SITE.social.instagram },
    { icon: Storefront, label: "Threads", value: "@jiwamu.daily", href: SITE.social.threads },
    { icon: TiktokLogo, label: "TikTok", value: "@jiwamu.daily", href: SITE.social.tiktok },
    { icon: Storefront, label: "Shopee", value: "jiwamu_store", href: SITE.social.shopee },
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-ink text-balance">
            Mari terhubung!
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg text-muted">
            Kami menanti di ruang-ruang yang nyaman bagimu.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-14 rounded-xl border border-hairline-neutral overflow-hidden bg-white/50">
            <div className="grid grid-cols-2">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-6 sm:p-8 transition-colors duration-300 hover:bg-white ${
                    i % 2 === 1 ? "border-l border-hairline-neutral" : ""
                  } ${i < contacts.length - 1 ? "border-b border-hairline-neutral" : ""} ${
                    i === contacts.length - 1 && contacts.length % 2 === 1 ? "col-span-2 border-b-0" : ""
                  }`}
                >
                  <div className="flex items-center justify-center size-10 rounded-full bg-fill-soft text-ink shrink-0">
                    <c.icon weight="regular" className="size-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-soft">
                      {c.label}
                    </p>
                    <p className="mt-1 text-base font-medium text-ink">{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="border-l border-hairline-neutral flex items-center justify-center p-6 sm:p-8">
                <p className="text-xs text-soft">&nbsp;</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Berlangganan
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink text-balance">
            Dapatkan edisi terbaru Majalah Jiwamu setiap bulan.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-muted text-pretty">
            Gratis. Langsung ke WhatsApp kamu.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Nama"
              aria-label="Nama"
              className="flex-1 rounded-lg border border-hairline-neutral bg-white px-5 py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="No. WhatsApp"
              aria-label="No. WhatsApp"
              className="flex-1 rounded-lg border border-hairline-neutral bg-white px-5 py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-accent transition-all hover:bg-accent-deep hover:shadow-accent-lg active:scale-[0.98] whitespace-nowrap"
            >
              Kirim
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
