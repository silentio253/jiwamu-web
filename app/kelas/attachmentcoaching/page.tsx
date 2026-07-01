import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { SITE, waLink } from "@/lib/site";
import {
  CheckCircle,
  CaretDown,
  Download,
  MapPin,
  Clock,
  CurrencyDollar,
  Sparkle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Certification in Attachment Coaching (CAC) — Kelas Jiwamu",
  description:
    "Level 2 — Pelajari berbagai kebutuhan attachment di setiap rentang usia, bagaimana luka attachment terbentuk, dan bagaimana pola tidak aman terus berulang dalam hubungan.",
};

export default function CACPage() {
  return (
    <>
      <Hero />
      <Competency />
      <Curriculum />
      <Duration />
      <Investment />
      <Facilities />
      <Trainers />
      <Schedule />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-fill-soft to-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center size-10 rounded-xl bg-accent text-white text-sm font-semibold">
              2
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-soft">
              Level 2 · CAC
            </span>
          </div>
          <h1 className="mt-6 text-2xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink text-balance">
            Certification in Attachment Coaching
          </h1>
          <p className="mt-6 text-lg text-muted text-pretty">
            Kelas ini merupakan pelatihan lanjutan bagi peserta yang telah
            menyelesaikan Certification in Attachment Facilitator (CAF).
            Program ini dirancang untuk membantu peserta memahami berbagai
            kebutuhan attachment di setiap rentang usia, bagaimana luka
            attachment terbentuk, dan bagaimana pola tidak aman terus berulang
            dalam hubungan.
          </p>
          <p className="mt-4 text-muted text-pretty">
            Kamu akan belajar membaca luka sebagai jejak pengalaman relasional
            yang menunggu untuk dipahami, diproses, dan ditata ulang dengan
            lebih aman.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA
              href={waLink("Hai Kak Nuy, saya ingin gabung kelas CAC!")}
              size="lg"
              external
              withArrow
            >
              Daftar Sekarang
            </CTA>
            <CTA href="#" variant="ghost" size="lg">
              <Download weight="bold" className="size-4" />
              Unduh Brosur
            </CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ title, icon: Icon }: { title: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-10 rounded-xl bg-fill-soft text-accent">
        <Icon weight="duotone" className="size-5" />
      </div>
      <h2 className="text-xl sm:text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{title}</h2>
    </div>
  );
}

function Competency() {
  const items = [
    "Memahami blueprint yang membentuk caramu melihat diri dan orang lain",
    "Mengidentifikasi luka attachment yang memengaruhi pola hubunganmu saat ini",
    "Membaca struktur 'lingkaran ketakutan' yang mengaktifkan reaksi otomatis dalam konflik",
    "Mengurai bagaimana siklus tidak aman terbentuk dan mengapa ia terus berulang",
    "Membangun 'lingkaran aman' sebagai pola relasi yang lebih sehat",
    "Menguasai teknik merekonstruksi narasi hidup agar tidak lagi terjebak pada cerita lama",
    "Menerapkan berbagai teknik healing untuk meningkatkan kesadaran dan kepekaan",
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Standar Kompetensi" icon={CheckCircle} />
        <p className="mt-4 text-muted">Dengan mengikuti pelatihan ini, kamu mampu untuk:</p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle weight="bold" className="size-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed text-body text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Curriculum() {
  const modules = [
    "Remembering Attachment Systems", "Dimensions of Wound", "Defensive Strategy",
    "IWM: The Meaning of Rupture", "Fear: The Threat of Rupture", "Shame: The Self in Rupture",
    "Self-Fulfilling Prophecy", "Attachment Narrative", "Fundamental Rule",
    "Mentalization", "Healing Journey", "Informed Consent",
    "Framework and Setting", "Attachment Screen-Replay (ASR)", "Hypno-Introspection",
    "Mirror-Image Technique", "Breaking Narrative Thought", "Narrative Defusion",
    "(M)other Expectation", "Creative-Aggression Technique", "Emotional Attunement",
    "Separation Dialogue", "Instigation Technique",
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Materi Pelajaran" icon={Sparkle} />
        <p className="mt-4 text-muted">Beberapa materi yang akan kamu pelajari:</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {modules.map((m, i) => (
            <span key={i} className="inline-flex items-center rounded-lg border-2 border-hairline-neutral bg-surface-alt px-4 py-2 text-sm text-body">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Duration() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Durasi Pelatihan" icon={Clock} />
        <div className="mt-8 rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-8">
          <p className="text-lg leading-relaxed text-body text-pretty">
            Pelatihan dirancang secara intensif dalam <strong className="text-ink">satu hari penuh (9 jam)</strong>.
            Format ini memungkinkan peserta memperoleh wawasan dan keterampilan
            attachment healing secara padat, aplikatif, dan langsung dapat
            digunakan dalam kehidupan sehari-hari maupun praktik pendampingan lanjutan.
          </p>
        </div>
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Investasi" icon={CurrencyDollar} />
        <div className="mt-8 rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-8 sm:p-10">
          <p className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink">Rp 3.000.000</p>
          <div className="mt-6 rounded-xl bg-surface p-5">
            <p className="text-sm font-medium text-ink">Pembayaran melalui:</p>
            <p className="mt-2 text-sm text-body">
              {SITE.bank.name}<br />
              No. Rekening: <span className="font-mono font-medium text-ink">{SITE.bank.account}</span><br />
              An. {SITE.bank.holder}
            </p>
            <p className="mt-3 text-sm text-soft">Hubungi kami untuk penawaran harga terbaik.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const items = [
    "Sebutan Certified Attachment Coach (CAC)", "Modul dan Starter Kit Eksklusif",
    "Sertifikat Keikutsertaan dari Jiwamu",
    "Sertifikat Keanggotaan Madya di Perkumpulan Pamong Jiwa Indonesia (PANJI)",
    "Kesempatan konsultasi lanjutan dengan trainer",
    "Kesempatan mengulang materi CAC di kelas yang diadakan di seluruh Indonesia",
    "Undangan keterlibatan dalam proyek penelitian lapangan",
    "Diskon 30% untuk setiap buku PUSAKA PANJI",
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Fasilitas" icon={CheckCircle} />
        <p className="mt-4 text-muted">Anda juga akan mendapatkan:</p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle weight="bold" className="size-5 text-wa shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed text-body text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Trainers() {
  const trainers = [
    { name: "Fakhrun Siraj", cred: "CABP", exp: "10+ tahun" },
    { name: "Cin Hapsari Tomoidjojo", cred: "CABP", exp: "10+ tahun" },
    { name: "Muhammad Syibbli Z.", cred: "CABP", exp: "10+ tahun" },
    { name: "Juan Lee (Yen)", cred: "CABP", exp: "10+ tahun" },
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Staf Trainer" icon={Sparkle} />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trainers.map((t) => (
            <div key={t.name} className="rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-5 text-center">
              <div className="mx-auto flex items-center justify-center size-20 rounded-lg bg-fill-soft text-accent">
                <span className="text-2xl font-serif">{t.name.charAt(0)}</span>
              </div>
              <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
              <p className="mt-1 text-xs text-soft">{t.cred}</p>
              <p className="mt-1 text-xs text-soft">Berpengalaman {t.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const cities = [
    { city: "Malang", date: "Minggu, 12 Juli 2026" },
    { city: "Jakarta", date: "Minggu, 12 Juli 2026" },
    { city: "Yogyakarta", date: "Minggu, 12 Juli 2026" },
    { city: "Bandung", date: "Minggu, 12 Juli 2026" },
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Jadwal Terdekat" icon={MapPin} />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cities.map((c) => (
            <div key={c.city} className="flex items-center justify-between rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-5">
              <div className="flex items-center gap-3">
                <MapPin weight="duotone" className="size-5 text-accent" />
                <div>
                  <p className="text-base font-medium text-ink">{c.city}</p>
                  <p className="text-sm text-soft">{c.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-soft">Nama hotel akan diumumkan menyusul.</p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Apa bedanya Attachment Coaching dengan pendekatan coaching lainnya?", a: "Banyak pendekatan coaching berfokus pada perubahan perilaku, target, atau motivasi. Attachment Coaching berangkat dari sesuatu yang lebih mendasar: kebutuhan manusia untuk merasa aman dalam hubungan. Karena sering kali, seseorang sulit berubah bukan karena kurang disiplin, tetapi karena takut ditolak, takut gagal, atau terbiasa hidup dalam pola relasi tertentu sejak lama." },
    { q: "Apakah saya harus mengikuti CAF sebelum mengikuti CAC?", a: "Ya. CAC adalah program lanjutan dari CAF. Peserta perlu memiliki fondasi attachment terlebih dahulu agar dapat mengikuti materi healing dengan lebih utuh dan aman." },
    { q: "Apa perbedaan CAF dan CAC?", a: "CAF berfokus pada kemampuan membaca kebutuhan emosional, memahami gaya attachment, dan merespons masalah relasional sehari-hari. CAC masuk lebih dalam pada berbagai kebutuhan batin, luka attachment, narasi hidup, siklus tidak aman, dan teknik pemulihan batin." },
    { q: "Jika saya sudah memiliki latar belakang dalam layanan berbantuan, apakah saya boleh menerapkan materi CAC?", a: "Tentu saja. Program ini dapat memperkaya praktik pendampingan, layanan kesehatan mental, praktis medis, coaching, pendidikan, parenting, maupun pelayanan kemanusiaan sesuai latar belakang dan kewenangan masing-masing peserta." },
    { q: "Apakah CAC berarti saya sudah bisa membuka praktik?", a: "CAC memberikan keterampilan attachment tingkat lanjutan, tetapi belum untuk akses praktik. Untuk mendapatkannya, peserta dianjurkan untuk melanjutkan hingga Level 3 (CABP)." },
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="FAQ" icon={Sparkle} />
        <div className="mt-8 space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="text-base font-medium text-ink text-pretty">{faq.q}</span>
                <CaretDown weight="bold" className="size-4 text-soft shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border-2 border-hairline-neutral bg-gradient-to-br from-fill-soft via-surface to-surface p-8 sm:p-12 text-center shadow-soft">
          <h2 className="text-xl sm:text-2xl sm:text-3xl font-semibold tracking-tight text-ink text-balance">Siap melanjutkan perjalanan?</h2>
          <p className="mt-3 text-muted text-pretty">Daftar sekarang dan jadilah Certified Attachment Coach (CAC).</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTA href={waLink("Hai Kak Nuy, saya ingin gabung kelas CAC!")} size="lg" external withArrow>Daftar Sekarang</CTA>
            <CTA href="#" variant="ghost" size="lg"><Download weight="bold" className="size-4" />Unduh Brosur</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
