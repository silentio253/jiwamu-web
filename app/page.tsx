import Link from "next/link";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { SITE, waLink } from "@/lib/site";
import {
  GraduationCap,
  Heartbeat,
  BookOpen,
  ArrowRight,
  Sparkle,
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
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-fill-soft via-surface to-surface"
      />

      <div className="mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                Ekosistem Kelekatan
              </p>
            </Reveal>
            <Reveal delay={0.08} y={32} blur>
              <h1 className="mt-6 text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.02] tracking-tight text-ink text-balance">
                Ruang aman untuk{" "}
                <span className="font-serif italic font-normal text-accent">
                  bertumbuh
                </span>{" "}
                bersama.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-lg sm:text-xl leading-relaxed text-muted text-pretty">
                Jiwamu adalah ekosistem pengembangan diri dan media digital
                berbasis teori kelekatan — ruang belajar, pendampingan,
                penerbitan, media, dan gerakan sosial.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
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
            </Reveal>
          </div>

          <div className="lg:col-span-5 xl:col-span-5">
            <Reveal delay={0.32} y={40} blur>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-br from-fill-soft to-transparent blur-2xl opacity-60"
                />
                <div className="rounded-[28px] border border-hairline bg-white/70 backdrop-blur-md p-8 sm:p-10 shadow-soft">
                  <p className="font-serif text-2xl sm:text-3xl italic leading-snug text-ink text-pretty">
                    &ldquo;Penderitaan hidup lebih masuk akal untuk ditanggung
                    jika kita saling berpegang tangan.&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px w-16 bg-accent" />
                    <div>
                      <p className="text-sm font-medium text-ink">
                        #BertumbuhBersama
                      </p>
                      <p className="text-xs text-soft mt-0.5">
                        Semangat Jiwamu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const paragraphs = [
    "Sebagian besar dari kita tumbuh dengan keyakinan bahwa masalah hidup bisa diselesaikan dengan cukup usaha, cukup kesabaran, atau cukup doa. Kita diajarkan untuk kuat. Untuk tidak cengeng.",
    "Di banyak keluarga, perasaan bukan sesuatu yang dibicarakan di meja makan. Perasaan adalah sesuatu yang ditelan bersama nasi dan lauk, lalu pura-pura kalau itu sudah berlalu.",
    "Kita menjadi kian mahir menggunakan topeng 'si baik-baik saja', namun tidak pernah benar-benar paham mengapa kita selalu berkubang di tempat yang sama. Sering kali, perasaan yang tak pernah dibicarakan justru menetap lebih lama di dalam diri.",
  ];

  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-soft">
            Manifesto
          </p>
        </Reveal>
        <div className="mt-10 space-y-6">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={`text-pretty leading-relaxed text-body ${
                  i === 0
                    ? "text-2xl sm:text-3xl font-serif text-ink leading-[1.4]"
                    : "text-lg text-muted"
                }`}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.24}>
          <div className="mt-12 pl-8 border-l-2 border-accent">
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

function WhatYouNeed() {
  return (
    <section className="py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
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

        <RevealStagger className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-5" stagger={0.1}>
          <RevealItem className="md:col-span-4">
            <Link
              href="/kelas"
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-hairline bg-gradient-to-br from-fill-soft to-white p-8 sm:p-10 min-h-[320px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-accent-lg overflow-hidden"
            >
              <div className="flex items-center justify-center size-14 rounded-2xl bg-accent text-white shadow-accent">
                <GraduationCap weight="duotone" className="size-7" />
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                  Kelas Pengembangan Diri
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted text-pretty max-w-md">
                  Mulai dan kembangkan kariermu untuk membantu sesama dengan
                  para pengajar bereputasi.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Lihat Kelas
                  <ArrowRight
                    weight="bold"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </RevealItem>

          <RevealItem className="md:col-span-2">
            <Link
              href="/layanan"
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-hairline bg-white p-8 min-h-[320px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-accent-lg"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-fill-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <Heartbeat weight="duotone" className="size-6" />
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  Pendampingan Olah Jiwa
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                  Dapatkan ruang aman untuk memahami diri, relasi, dan
                  kehidupan emosionalmu.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Mulai Konsultasi
                  <ArrowRight
                    weight="bold"
                    className="size-3.5 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </RevealItem>

          <RevealItem className="md:col-span-2">
            <Link
              href="/buku"
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-hairline bg-white p-8 min-h-[280px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-accent-lg"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-fill-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <BookOpen weight="duotone" className="size-6" />
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  Suplemen Batin
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                  Buku dan medium reflektif untuk menemani perjalanan batinmu.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Jelajahi Buku
                  <ArrowRight
                    weight="bold"
                    className="size-3.5 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </RevealItem>

          <RevealItem className="md:col-span-4">
            <Link
              href="/majalah"
              className="group relative flex h-full items-center justify-between gap-6 rounded-2xl border border-hairline bg-white p-8 sm:p-10 min-h-[180px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-accent-lg"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Sparkle weight="duotone" className="size-5 text-accent" />
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-soft">
                    Majalah Jiwamu
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  Terbitan resmi PANJI
                </h3>
                <p className="mt-2 text-sm text-muted text-pretty max-w-md">
                  Majalah bulanan berbasis ISSN 3063-542X. Tema berbeda setiap
                  edisi, kini tersedia gratis via WhatsApp.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Baca Edisi Terbaru
                  <ArrowRight
                    weight="bold"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
              <div className="hidden sm:flex shrink-0 items-center justify-center size-24 rounded-2xl bg-gradient-to-br from-fill-soft to-surface border border-hairline">
                <span className="font-serif text-5xl italic text-accent">M</span>
              </div>
            </Link>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}

function ThisMonth() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-soft">
                Bulan ini
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
                Fokus: kelas terdekat
              </h2>
            </div>
            <CTA href="/kelas" variant="ghost" withArrow>
              Lihat Semua Kelas
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={0.12} y={32} blur>
          <div className="mt-12 relative overflow-hidden rounded-[32px] border border-hairline bg-gradient-to-br from-fill-soft via-surface to-white p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                  Level 1 · CAF
                </p>
                <h3 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-ink text-balance">
                  Certification in Attachment Facilitator
                </h3>
                <p className="mt-5 text-base sm:text-lg text-muted text-pretty max-w-lg">
                  Dasar membaca pola relasi, memahami kebutuhan emosional, dan
                  merespons orang lain dengan lebih tepat.
                </p>
                <div className="mt-8">
                  <CTA href="/kelas/attachmentfacilitator" size="lg" withArrow>
                    Daftar Sekarang
                  </CTA>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-px bg-hairline-neutral rounded-2xl overflow-hidden">
                  <div className="bg-white p-6">
                    <p className="text-4xl font-semibold tracking-tight text-ink">
                      11
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-soft">
                      Juli 2026
                    </p>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-4xl font-semibold tracking-tight text-ink">
                      4
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-soft">
                      Kota
                    </p>
                  </div>
                  <div className="bg-white p-6 col-span-2">
                    <p className="text-sm font-medium text-ink">Kota tersedia</p>
                    <p className="mt-2 text-sm text-muted">
                      Malang · Jakarta · Yogyakarta · Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Connect() {
  const contacts = [
    { label: "WhatsApp", value: SITE.waDisplay },
    { label: "YouTube & Facebook", value: "Jiwamu Talks" },
    { label: "Instagram, Threads & TikTok", value: "@jiwamu.daily" },
    { label: "Shopee", value: "jiwamu_store" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
            Mari terhubung!
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg text-muted">
            Kami menanti di ruang-ruang yang nyaman bagimu.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline-neutral rounded-2xl overflow-hidden text-left" stagger={0.06}>
          {contacts.map((c) => (
            <RevealItem key={c.label} className="bg-white">
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-soft">
                  {c.label}
                </p>
                <p className="mt-2 text-base font-medium text-ink">{c.value}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Reveal y={32} blur>
          <div className="relative overflow-hidden rounded-[32px] border border-hairline bg-gradient-to-br from-fill-soft via-surface to-white p-8 sm:p-12 text-center shadow-soft">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 size-64 rounded-full bg-fill-soft blur-3xl opacity-50"
            />
            <div className="relative">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
