import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";
import {
  GraduationCap,
  Heartbeat,
  BookOpen,
  ArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Jiwamu — Bertumbuh Bersama (Opsi B)",
  description:
    "Ruang aman untuk bertumbuh bersama. Ekosistem pengembangan diri dan media digital berbasis teori kelekatan.",
};

export default function OptionBPage() {
  return (
    <>
      <HeroB />
      <ManifestoB />
      <WhatYouNeedB />
      <ThisMonthB />
      <ConnectB />
      <SubscribeB />
    </>
  );
}

function HeroB() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1469474968028-56623f45e6f5?auto=format&fit=crop&w=2400&q=80"
        alt="Pemandangan kontemplatif — ruang untuk memahami diri"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-ink via-ink/80 to-ink/60"
      />

      <div className="relative mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <p className="text-sm font-medium text-accent/90">
              Ekosistem Kelekatan
            </p>
            <h1 className="mt-6 text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[5rem] font-semibold leading-[0.98] tracking-tight text-white text-balance">
              Ruang aman untuk{" "}
              <span className="font-serif italic font-normal text-white/80">
                bertumbuh
              </span>{" "}
              bersama.
            </h1>
            <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-white/60 text-pretty">
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
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40"
              >
                Tanya Kami
              </CTA>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
              <div className="bg-ink/60 backdrop-blur-sm p-6">
                <p className="text-4xl font-semibold text-white">3</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  Level Sertifikasi
                </p>
              </div>
              <div className="bg-ink/60 backdrop-blur-sm p-6">
                <p className="text-4xl font-semibold text-white">4</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  Inisiatif
                </p>
              </div>
              <div className="bg-ink/60 backdrop-blur-sm p-6 col-span-2">
                <p className="text-4xl font-semibold text-white">13+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  Pendamping Profesional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoB() {
  const paragraphs = [
    "Sebagian besar dari kita tumbuh dengan keyakinan bahwa masalah hidup bisa diselesaikan dengan cukup usaha, cukup kesabaran, atau cukup doa. Kita diajarkan untuk kuat. Untuk tidak cengeng.",
    "Di banyak keluarga, perasaan bukan sesuatu yang dibicarakan di meja makan. Perasaan adalah sesuatu yang ditelan bersama nasi dan lauk, lalu pura-pura kalau itu sudah berlalu.",
    "Kita menjadi kian mahir menggunakan topeng 'si baik-baik saja', namun tidak pernah benar-benar paham mengapa kita selalu berkubang di tempat yang sama. Sering kali, perasaan yang tak pernah dibicarakan justru menetap lebih lama di dalam diri.",
  ];

  return (
    <section className="py-28 lg:py-40 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-soft">
            Manifesto
          </p>
        </Reveal>
        <div className="mt-12 space-y-8">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={`text-pretty leading-relaxed text-body ${
                  i === 0
                    ? "text-3xl sm:text-4xl font-serif text-ink leading-[1.3]"
                    : "text-lg sm:text-xl text-muted"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.24}>
          <div className="mt-14 pl-8 border-l-2 border-accent">
            <p className="text-xl sm:text-2xl text-ink leading-relaxed text-pretty font-serif italic">
              Jiwamu adalah wadah di mana segala rasa berlabuh tanpa dihakimi
              dan ruang di mana setiap proses bertumbuh aman melegakan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatYouNeedB() {
  const items = [
    {
      icon: GraduationCap,
      title: "Kelas Pengembangan Diri",
      desc: "Mulai dan kembangkan kariermu untuk membantu sesama dengan para pengajar bereputasi.",
      href: "/kelas",
      cta: "Lihat Kelas",
    },
    {
      icon: Heartbeat,
      title: "Pendampingan Olah Jiwa",
      desc: "Dapatkan ruang aman untuk memahami diri, relasi, dan kehidupan emosionalmu bersama pendamping profesional.",
      href: "/layanan",
      cta: "Mulai Konsultasi",
    },
    {
      icon: BookOpen,
      title: "Suplemen Batin",
      desc: "Buku dan medium reflektif untuk menemani perjalanan batin dan pertumbuhanmu.",
      href: "/buku",
      cta: "Jelajahi Buku",
    },
  ];

  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
              Apa yang kamu butuhkan?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg text-muted text-pretty">
              Tiga pintu masuk untuk bertumbuh bersama Jiwamu.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-5" stagger={0.1}>
          <RevealItem key={items[0].href} index={0} className="md:col-span-3">
            <Link
              href={items[0].href}
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-hairline bg-white p-8 sm:p-10 min-h-[340px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-accent-lg overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute right-0 top-0 w-48 h-48 -mr-12 -mt-12 rounded-full bg-fill-soft opacity-60 blur-2xl"
              />
              <div className="relative flex items-center justify-center size-14 rounded-2xl bg-accent text-white shadow-accent">
                <GraduationCap weight="duotone" className="size-7" />
              </div>
              <div className="relative mt-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                  {items[0].title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted text-pretty max-w-md">
                  {items[0].desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  {items[0].cta}
                  <ArrowRight
                    weight="bold"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </RevealItem>

          <div className="md:col-span-3 flex flex-col gap-5">
            {items.slice(1).map((item, i) => (
              <RevealItem key={item.href} index={i + 1} className="flex-1">
                <Link
                  href={item.href}
                  className="group flex items-center gap-6 rounded-2xl border border-hairline bg-white p-6 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-accent-lg h-full"
                >
                  <div className="flex items-center justify-center size-12 rounded-xl bg-fill-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white shrink-0">
                    <item.icon weight="duotone" className="size-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted text-pretty">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight
                    weight="bold"
                    className="size-4 text-accent shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </RevealItem>
            ))}
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}

function ThisMonthB() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-soft">
                Bulan ini
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
                Fokus: kelas terdekat
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg text-muted text-pretty">
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
              <div className="relative rounded-2xl overflow-hidden border border-hairline bg-gradient-to-br from-fill-soft to-white p-8 sm:p-10">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-5xl sm:text-6xl font-semibold tracking-tight text-ink">11</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-soft">Juli 2026</p>
                  </div>
                  <div>
                    <p className="text-5xl sm:text-6xl font-semibold tracking-tight text-ink">4</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-soft">Kota</p>
                  </div>
                  <div>
                    <p className="text-5xl sm:text-6xl font-semibold tracking-tight text-ink">9</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-soft">Jam</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-hairline-neutral">
                  <p className="text-sm font-medium text-ink">Kota tersedia</p>
                  <p className="mt-2 text-sm text-muted">Malang · Jakarta · Yogyakarta · Bandung</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-ink">Level 1 · CAF</p>
                  <p className="mt-1 text-sm text-muted">Certification in Attachment Facilitator</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectB() {
  const contacts = [
    { label: "WhatsApp", value: SITE.waDisplay },
    { label: "YouTube & Facebook", value: "Jiwamu Talks" },
    { label: "Instagram, Threads & TikTok", value: "@jiwamu.daily" },
    { label: "Shopee", value: "jiwamu_store" },
  ];

  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
            Mari terhubung!
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg text-muted">Kami menanti di ruang-ruang yang nyaman bagimu.</p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline-neutral rounded-2xl overflow-hidden text-left" stagger={0.06}>
          {contacts.map((c, i) => (
            <RevealItem key={c.label} index={i} className="bg-white">
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-soft">{c.label}</p>
                <p className="mt-2 text-base font-medium text-ink">{c.value}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function SubscribeB() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <Reveal>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink text-balance">
              Berlangganan Gratis Sekarang
            </h2>
            <p className="mt-3 text-muted text-pretty">
              Dapatkan edisi terbaru Majalah Jiwamu setiap bulan.
            </p>

            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Nama"
                aria-label="Nama"
                className="flex-1 rounded-full border border-hairline bg-white px-5 py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="No. WhatsApp"
                aria-label="No. WhatsApp"
                className="flex-1 rounded-full border border-hairline bg-white px-5 py-3 text-sm text-ink placeholder:text-soft focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-accent transition-all hover:bg-accent-deep hover:shadow-accent-lg active:scale-[0.98] whitespace-nowrap"
              >
                Kirim
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
