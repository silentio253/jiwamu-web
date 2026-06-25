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
  title: "Certification in Attachment Facilitator (CAF) — Kelas Jiwamu",
  description:
    "Level 1 — Pelajari dasar-dasar attachment untuk membaca pola relasi, memahami kebutuhan emosional, mengelola konflik, dan merespons orang lain dengan lebih tepat.",
};

export default function CAFPage() {
  return (
    <>
      <CAFHero />
      <CompetencySection />
      <CurriculumSection />
      <DurationSection />
      <InvestmentSection />
      <FacilitiesSection />
      <TrainerSection />
      <ScheduleSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}

function CAFHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-fill-soft to-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center size-10 rounded-xl bg-accent text-white text-sm font-semibold">
              1
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-soft">
              Level 1 · CAF
            </span>
          </div>
          <h1 className="mt-6 text-2xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink text-balance">
            Certification in Attachment Facilitator
          </h1>
          <p className="mt-6 text-lg text-muted text-pretty">
            Dalam pelatihan ini, kamu akan mempelajari dasar-dasar attachment
            untuk membaca pola relasi, memahami kebutuhan emosional, mengelola
            konflik, dan merespons orang lain dengan lebih tepat: kapan cukup
            hadir dan mendengarkan, kapan perlu memberi arahan.
          </p>
          <p className="mt-4 text-muted text-pretty">
            Program ini cocok untuk kamu yang ingin memahami diri,
            memperbaiki hubungan, atau mulai mengembangkan keterampilan dasar
            dalam membantu sesama.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA
              href={waLink("Hai Kak Nuy, saya ingin gabung kelas CAF!")}
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

function SectionHeader({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-10 rounded-xl bg-fill-soft text-accent">
        <Icon weight="duotone" className="size-5" />
      </div>
      <h2 className="text-xl sm:text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}

function CompetencySection() {
  const items = [
    "Memahami kebutuhan terdalam manusia akan rasa aman",
    "Menyelami pola bawah sadar yang membentuk caramu mencintai dan menjalin relasi",
    "Menguasai pendekatan yang tepat: kapan mendengarkan dan kapan memberikan arahan",
    "Mengurai kekuatan dan tantangan dari setiap gaya attachment",
    "Mengidentifikasi kecenderungan gaya attachment (langsung asesmen di kelas)",
    "Memahami akar konflik, kecemburuan, ketakutan ditinggalkan, dan pola menjauh dalam hubungan",
    "Mendeteksi, mencegah, dan memperbaiki berbagai bentuk masalah dengan pasangan, keluarga, dan pertemanan",
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Standar Kompetensi" icon={CheckCircle} />
        <p className="mt-4 text-muted">Dengan mengikuti pelatihan ini, kamu mampu untuk:</p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle
                weight="bold"
                className="size-5 text-accent shrink-0 mt-0.5"
              />
              <span className="text-sm leading-relaxed text-body text-pretty">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CurriculumSection() {
  const modules = [
    "Home Is Where We Start From",
    "What is Attachment?",
    "Brief History of Attachment Studies",
    "Attachment and Loss",
    "Safe Haven dan Secure Base",
    "Read Before Respond (RBR)",
    "RBR Diagnostic Pathway",
    "Skill 1: Read Before Respond (RBR)",
    "Attachment Systems",
    "Attachment Pattern",
    "Internal Working Models",
    "Attachment Style",
    "ECR-R",
    "Skill 2: Measuring",
    "Attachment Rupture",
    "Dimensions of Wound",
    "Attachment Wound Cycle",
    "Window of Tolerance",
    "Skill 3: 4-Step Window",
    "Attachment Secure Cycle",
    "Rupture-Repair",
    "Skill 4: 4-Step Repair",
    "Secure Repetition Principle",
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Materi Pelajaran" icon={Sparkle} />
        <p className="mt-4 text-muted">Beberapa materi yang akan kamu pelajari:</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {modules.map((m, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-lg border border-hairline bg-surface-alt px-4 py-2 text-sm text-body"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function DurationSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Durasi Pelatihan" icon={Clock} />
        <div className="mt-8 rounded-2xl border border-hairline bg-surface-alt p-8">
          <p className="text-lg leading-relaxed text-body text-pretty">
            Pelatihan dirancang secara intensif dalam{" "}
            <strong className="text-ink">satu hari penuh (9 jam)</strong>.
            Format ini memungkinkan peserta memperoleh landasan attachment
            coaching secara padat, aplikatif, dan langsung dapat digunakan
            dalam kehidupan sehari-hari maupun praktik pendampingan dasar.
          </p>
        </div>
      </div>
    </section>
  );
}

function InvestmentSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Investasi" icon={CurrencyDollar} />
        <div className="mt-8 rounded-2xl border border-hairline bg-surface-alt p-8 sm:p-10">
          <p className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink">
            Rp 2.500.000
          </p>
          <div className="mt-6 rounded-xl bg-surface p-5">
            <p className="text-sm font-medium text-ink">Pembayaran melalui:</p>
            <p className="mt-2 text-sm text-body">
              {SITE.bank.name}
              <br />
              No. Rekening:{" "}
              <span className="font-mono font-medium text-ink">
                {SITE.bank.account}
              </span>
              <br />
              An. {SITE.bank.holder}
            </p>
            <p className="mt-3 text-sm text-soft">
              Hubungi kami untuk penawaran harga terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const items = [
    "Sebutan Certified Attachment Facilitator (CAF)",
    "Modul dan Starter Kit Eksklusif",
    "Laporan Asesmen Pola Attachment",
    "Buku Attachment Guidebook",
    "Sertifikat Keikutsertaan dari Jiwamu",
    "Sertifikat Keanggotaan Pratama di Perkumpulan Pamong Jiwa Indonesia (PANJI)",
    "Akses Fellow-Roasting setiap bulan",
    "Kesempatan konsultasi lanjutan dengan trainer",
    "Kesempatan mengulang materi CAF di kelas yang diadakan di seluruh Indonesia",
    "Diskon 15% untuk setiap buku PUSAKA PANJI",
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Fasilitas" icon={CheckCircle} />
        <p className="mt-4 text-muted">Anda juga akan mendapatkan:</p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle
                weight="bold"
                className="size-5 text-wa shrink-0 mt-0.5"
              />
              <span className="text-sm leading-relaxed text-body text-pretty">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TrainerSection() {
  const trainers = [
    { name: "Fakhrun Siraj", cred: "CABP", exp: "10+ tahun" },
    { name: "Cin Hapsari Tomoidjojo", cred: "CABP", exp: "10+ tahun" },
    { name: "Muhammad Syibbli Z.", cred: "CABP", exp: "10+ tahun" },
    { name: "Juan Lee (Yen)", cred: "CABP", exp: "10+ tahun" },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Staf Trainer" icon={Sparkle} />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-hairline bg-surface-alt p-5 text-center"
            >
              <div className="mx-auto flex items-center justify-center size-20 rounded-lg bg-fill-soft text-accent">
                <span className="text-2xl font-serif">
                  {t.name.charAt(0)}
                </span>
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

function ScheduleSection() {
  const cities = [
    { city: "Malang", date: "Sabtu, 11 Juli 2026" },
    { city: "Jakarta", date: "Sabtu, 11 Juli 2026" },
    { city: "Yogyakarta", date: "Sabtu, 11 Juli 2026" },
    { city: "Bandung", date: "Sabtu, 11 Juli 2026" },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Jadwal Terdekat" icon={MapPin} />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cities.map((c) => (
            <div
              key={c.city}
              className="flex items-center justify-between rounded-2xl border border-hairline bg-surface-alt p-5"
            >
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
        <p className="mt-6 text-sm text-soft">
          Nama hotel akan diumumkan menyusul.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Mengapa Attachment penting untuk dipelajari?",
      a: "Karena banyak persoalan hidup sebenarnya berakar pada relasi, seperti bagaimana kita mencintai, menghadapi konflik, merasa aman, takut ditinggalkan, atau justru menjauh dari kedekatan. Attachment membantu kita memahami pola-pola tersebut dengan lebih sadar dan manusiawi.",
    },
    {
      q: "Apakah kelas ini hanya untuk profesional kesehatan mental?",
      a: "Tidak. CAF dirancang untuk masyarakat umum, orang tua, guru, helper, coach, HR, maupun siapa saja yang ingin memahami manusia dan relasi secara lebih mendalam. Banyak peserta justru datang karena ingin memahami dirinya, pasangan, keluarga, atau pola hubungan yang terus berulang dalam hidupnya.",
    },
    {
      q: "Bagaimana kelas ini dibawakan?",
      a: "CAF dirancang sebagai kelas yang aplikatif dan reflektif. Selain memahami teori attachment, kamu juga akan mengikuti asesmen, mempelajari studi kasus, berlatih membaca kebutuhan emosional, dan mempraktikkan berbagai keterampilan dasar attachment coaching.",
    },
    {
      q: "Setelah mengikuti CAF, apakah saya langsung bisa membuka praktik?",
      a: "CAF merupakan pelatihan foundational level. Sebagian peserta menggunakan ilmu dan keterampilan di dalamnya untuk kehidupan pribadi, pengasuhan, pekerjaan, komunitas, atau pendampingan dasar. Sementara untuk praktik yang lebih mendalam dan profesional, peserta disarankan melanjutkan ke Level 2 dan Level 3.",
    },
    {
      q: "Saya takut kelas seperti ini terlalu menghakimi atau membuat saya merasa 'rusak'.",
      a: "Justru sebaliknya. CAF dirancang sebagai ruang belajar yang membantu peserta memahami bahwa banyak pola relasi manusia terbentuk dari pengalaman hidup dan kebutuhan akan rasa aman. Kami tidak percaya bahwa manusia bisa dipahami hanya dari label semata. Kami percaya manusia lebih dari segala nama.",
    },
    {
      q: "Apakah saya harus membongkar pengalaman pribadi saya di kelas?",
      a: "Tidak ada kewajiban untuk membuka pengalaman pribadi secara detail. Peserta tetap memiliki kendali penuh atas batas nyaman masing-masing. Kami menghormati privasi dan ritme setiap individu dalam proses belajar.",
    },
    {
      q: "Mengapa saya perlu belajar Attachment bersama Jiwamu?",
      a: "Karena di Jiwamu, kamu tidak hanya mengikuti kelas lalu selesai. Kamu akan masuk ke dalam ekosistem belajar dan komunitas yang terus bertumbuh melalui komunitas alumni, pertemuan nasional, media dan majalah, pengembangan profesional, hingga peluang menjadi penulis, coach, trainer, atau partner Jiwamu.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="FAQ" icon={Sparkle} />
        <div className="mt-8 space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-hairline bg-surface-alt p-5">
      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
        <span className="text-base font-medium text-ink text-pretty">{q}</span>
        <CaretDown
          weight="bold"
          className="size-4 text-soft shrink-0 transition-transform group-open:rotate-180"
        />
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">{a}</p>
    </details>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-hairline bg-gradient-to-br from-fill-soft via-surface to-surface p-8 sm:p-12 text-center shadow-soft">
          <h2 className="text-xl sm:text-2xl sm:text-3xl font-semibold tracking-tight text-ink text-balance">
            Siap memulai karier barumu?
          </h2>
          <p className="mt-3 text-muted text-pretty">
            Daftar sekarang dan jadilah Certified Attachment Facilitator (CAF).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTA
              href={waLink("Hai Kak Nuy, saya ingin gabung kelas CAF!")}
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
