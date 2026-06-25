import Link from "next/link";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { waLink, SITE } from "@/lib/site";
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
      <HeroSection />
      <InisiatifSection />
      <LegalSection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-deep">
              Tentang Kami
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
              Jiwamu adalah ekosistem pengembangan diri dan media digital berbasis teori kelekatan.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Jiwamu hadir sebagai ruang belajar, pendampingan, penerbitan,
              media, dan gerakan sosial yang berangkat dari teori kelekatan
              atau <em>attachment</em> — sebuah cabang empiris dari
              psikoanalisis. Kami percaya bahwa banyak persoalan manusia tidak
              dapat dilepaskan dari pengalaman relasional: bagaimana kita
              mencintai, merasa aman, terluka, bertahan, dan bertumbuh bersama
              orang lain.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base text-muted leading-relaxed text-pretty">
              Secara hukum, Jiwamu merupakan merek dagang di bawah PT Jiwa
              Media Utama. Jiwamu juga menjadi bagian dari Pusat Usaha dan
              Kaderisasi Perkumpulan Pamong Jiwa Indonesia (PUSAKA PANJI)
              bersama beberapa lembaga lain, seperti Institut Psikoanalisis
              Indonesia, Yayasan Pusat Psikoanalisis Indonesia, Penerbit
              Minerva, Hypnopreneur Indonesia, dan TBM Matahari.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InisiatifSection() {
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
      desc: "Ruang kolaborasi untuk membagikan, mempertemukan, dan menyatukan ide tentang jiwa dan kehidupan manusia. Majalah ini terbit berkala setiap bulan dan menjadi salah satu medium utama Jiwamu untuk membangun literasi kesehatan jiwa yang populer, reflektif, dan bertanggung jawab.",
      href: "/majalah",
    },
    {
      icon: UsersThree,
      title: "Jiwamu Project",
      desc: "Laboratorium riset dekolonisasi kesehatan mental yang didukung oleh semangat kolektif. Melalui Jiwamu Project, kami berupaya membaca ulang kesehatan mental dalam konteks pengalaman hidup, budaya, sejarah, relasi kuasa, pertarungan gender, spiritualitas, dan kehidupan masyarakat Indonesia.",
      href: "/proyek",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink mb-12">
            Inisiatif Jiwamu
          </h2>
        </Reveal>

        <RevealStagger className="space-y-6" stagger={0.08}>
          {initiatives.map((item, i) => (
            <RevealItem key={i} index={i}>
              <Link
                href={item.href}
                className="group flex items-start gap-6 rounded-xl border border-hairline-neutral bg-surface p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent"
              >
                <div className="flex items-center justify-center size-12 rounded-xl bg-fill-soft text-accent shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
                  <item.icon weight="duotone" className="size-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed text-pretty">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function LegalSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
            Legalitas
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-xl border border-hairline-neutral bg-surface-alt p-6 sm:p-8">
            <p className="text-base text-muted leading-relaxed text-pretty">
              Jiwamu merupakan merek dagang di bawah{" "}
              <strong className="text-ink">PT Jiwa Media Utama</strong>.
              Jiwamu juga menjadi bagian dari Pusat Usaha dan Kaderisasi
              Perkumpulan Pamong Jiwa Indonesia (PUSAKA PANJI) bersama
              beberapa lembaga lain:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Institut Psikoanalisis Indonesia",
                "Yayasan Pusat Psikoanalisis Indonesia",
                "Penerbit Minerva",
                "Hypnopreneur Indonesia",
                "TBM Matahari",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink">
            Hubungi Kami
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-muted">
            Kami menanti di ruang-ruang yang nyaman bagimu.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 rounded-xl border border-hairline-neutral overflow-hidden bg-surface/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline-neutral">
              {[
                { icon: MapPin, label: "Alamat", value: `${SITE.address.line}, ${SITE.address.city}, ${SITE.address.province}` },
                { icon: Phone, label: "WhatsApp", value: SITE.waDisplay },
                { icon: YoutubeLogo, label: "YouTube", value: "Jiwamu Talks" },
                { icon: InstagramLogo, label: "Instagram", value: "@jiwamu.daily" },
                { icon: TiktokLogo, label: "TikTok", value: "@jiwamu.daily" },
                { icon: Storefront, label: "Shopee", value: "jiwamu_store" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-surface p-5 sm:p-6">
                  <div className="flex items-center justify-center size-9 rounded-full bg-fill-soft text-ink shrink-0">
                    <item.icon weight="regular" className="size-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-soft">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-ink truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8">
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
    </section>
  );
}
