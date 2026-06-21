import Link from "next/link";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { SITE, waLink } from "@/lib/site";
import {
  GraduationCap,
  Heartbeat,
  BookOpen,
  ArrowRight,
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
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-fill-soft via-surface to-surface"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-hairline to-transparent"
      />

      <div className="mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="motion-safe-fade-up text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Ekosistem Kelekatan
            </p>
            <h1
              className="mt-6 motion-safe-fade-up text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-ink text-balance"
              style={{ animationDelay: "0.08s" }}
            >
              Ruang aman untuk{" "}
              <span className="font-serif italic font-normal text-accent">
                bertumbuh
              </span>{" "}
              bersama.
            </h1>
            <p
              className="mt-6 motion-safe-fade-up max-w-xl text-lg leading-relaxed text-muted text-pretty"
              style={{ animationDelay: "0.16s" }}
            >
              Jiwamu adalah ekosistem pengembangan diri dan media digital
              berbasis teori kelekatan — ruang belajar, pendampingan,
              penerbitan, media, dan gerakan sosial.
            </p>
            <div
              className="mt-8 motion-safe-fade-up flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.24s" }}
            >
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

          <div
            className="lg:col-span-5 motion-safe-fade-up"
            style={{ animationDelay: "0.32s" }}
          >
            <div className="relative">
              <div className="relative rounded-[32px] border border-hairline bg-white p-2 shadow-accent-lg">
                <div className="rounded-[24px] bg-gradient-to-br from-fill-soft to-white p-8 sm:p-10">
                  <p className="font-serif text-2xl sm:text-3xl italic leading-snug text-ink text-pretty">
                    &ldquo;Penderitaan hidup lebih masuk akal untuk ditanggung
                    jika kita saling berpegang tangan.&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-12 bg-accent" />
                    <p className="text-sm font-medium text-muted">
                      #BertumbuhBersama
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-pretty leading-relaxed text-body ${
              i === 0
                ? "text-xl sm:text-2xl font-serif text-ink"
                : "text-lg text-muted mt-6"
            }`}
          >
            {p}
          </p>
        ))}
        <div className="mt-10 pl-6 border-l-2 border-accent">
          <p className="text-lg sm:text-xl text-ink leading-relaxed text-pretty">
            Jiwamu adalah wadah di mana segala rasa berlabuh tanpa dihakimi dan
            ruang di mana setiap proses bertumbuh aman melegakan.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatYouNeed() {
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
    <section className="py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
            Apa yang kamu butuhkan?
          </h2>
          <p className="mt-4 text-lg text-muted text-pretty">
            Tiga pintu masuk untuk bertumbuh bersama Jiwamu.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex flex-col rounded-2xl border border-hairline bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-accent-lg"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-fill-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <item.icon weight="duotone" className="size-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                {item.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {item.cta}
                <ArrowRight
                  weight="bold"
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThisMonth() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
              Bulan ini di Jiwamu
            </h2>
            <p className="mt-4 text-lg text-muted">
              Jadwal kelas terdekat dan rilisan terbaru.
            </p>
          </div>
          <CTA href="/kelas" variant="ghost" withArrow>
            Lihat Semua
          </CTA>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-fill-soft to-white p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Kelas Terdekat
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              Certification in Attachment Facilitator
            </h3>
            <p className="mt-3 text-sm text-muted">
              Level 1 — Dasar membaca pola relasi dan kebutuhan emosional.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <span className="font-medium text-ink">Sabtu, 11 Juli 2026</span>
              <span>·</span>
              <span>Malang, Jakarta, Yogyakarta, Bandung</span>
            </div>
            <div className="mt-6">
              <CTA href="/kelas/attachmentfacilitator" withArrow>
                Daftar Sekarang
              </CTA>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-white p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Rilisan Terbaru
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              Majalah Jiwamu Edisi Terbaru
            </h3>
            <p className="mt-3 text-sm text-muted">
              Terbitan resmi Perkumpulan Pamong Jiwa Indonesia (PANJI). ISSN
              3063-542X.
            </p>
            <div className="mt-6">
              <CTA href="/majalah" variant="ghost" withArrow>
                Baca Edisi Terbaru
              </CTA>
            </div>
          </div>
        </div>
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
          Mari terhubung!
        </h2>
        <p className="mt-4 text-lg text-muted">
          Kami menanti di ruang-ruang yang nyaman bagimu.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline-neutral rounded-2xl overflow-hidden text-left">
          {contacts.map((c) => (
            <div key={c.label} className="bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-soft">
                {c.label}
              </p>
              <p className="mt-2 text-base font-medium text-ink">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-hairline bg-gradient-to-br from-fill-soft via-surface to-white p-8 sm:p-12 text-center shadow-soft">
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
    </section>
  );
}
