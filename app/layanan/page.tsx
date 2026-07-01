import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { waLink } from "@/lib/site";
import {
  Heartbeat, CheckCircle, CaretDown, Download, Sparkle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Layanan — Pendampingan Olah Jiwa Jiwamu",
  description:
    "Ruang pendampingan untuk memahami diri, pola hubungan, pengalaman emosional, dan kehidupan batin secara lebih utuh.",
};

export default function LayananPage() {
  return (
    <>
      <Hero /><Expectations /><WhatWeDo /><HealingPathway /><Practitioners /><FAQ /><FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-fill-soft to-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="flex items-center justify-center size-14 rounded-2xl bg-fill-soft text-accent mx-auto">
            <Heartbeat weight="duotone" className="size-7" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-8 text-2xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink text-balance">
            Tidak semua hal dalam hidup perlu segera diperbaiki.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg sm:text-xl font-serif italic text-muted text-pretty">
            Sebagian perlu untuk dipahami bersama.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-6 text-lg text-muted text-pretty">
            Jiwamu menyediakan ruang pendampingan untuk kamu yang ingin memahami
            diri, pola hubungan, pengalaman emosional, dan kehidupan batin secara
            lebih utuh. Kami percaya bahwa setiap manusia memiliki ritme
            pertumbuhan yang berbeda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Expectations() {
  const items = [
    "Ruang untuk didengarkan tanpa penghakiman",
    "Pendekatan yang menghormati ritme dan kesiapan batin masing-masing",
    "Pendampingan dengan batas dan kerangka yang jelas",
    "Privasi dan kerahasiaan yang dijaga dengan sungguh-sungguh",
    "Proses yang tidak hanya berfokus pada gejala, tetapi juga pola relasi dan pengalaman hidup yang melatarbelakanginya",
    "Kesempatan untuk memahami diri, emosi, dan hubungan secara lebih utuh",
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink text-balance">
          Apa yang bisa kamu harapkan dari kami?
        </h2>
        <p className="mt-4 text-muted text-pretty">
          Bersama Jiwamu, kamu dapat mengharapkan:
        </p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle weight="bold" className="size-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed text-body text-pretty">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 pl-6 border-l-2 border-accent">
          <p className="text-lg text-ink leading-relaxed text-pretty">
            Kami percaya bahwa kamu lebih dari segala nama yang disematkan
            padamu. Kami bekerja denganmu dan hanya untukmu, secara utuh dan
            mendalam.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink text-balance">
          Apa yang kami lakukan?
        </h2>
        <p className="mt-4 text-muted text-pretty">
          Layanan kami dirancang sebagai proses pendampingan berkelanjutan,
          bukan sekadar percakapan satu atau dua sesi. Karena itu, layanan kami
          menggunakan sistem kontrak bulanan agar proses dapat berlangsung lebih
          stabil, lebih aman, dan lebih terarah.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-8">
            <h3 className="text-xl font-semibold text-ink">Coaching</h3>
            <p className="mt-3 text-sm text-muted text-pretty">Cocok bagi kamu yang:</p>
            <ul className="mt-4 space-y-2">
              {["Memiliki tujuan yang lebih fokus dan terbatas", "Sedang menghadapi persoalan tertentu dan segera ingin diselesaikan", "Membutuhkan ruang refleksi, arahan, atau pengembangan diri secara lebih terstruktur"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-body">
                  <CheckCircle weight="bold" className="size-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-surface-alt p-4">
              <p className="text-sm text-body">
                <span className="font-medium text-ink">Format:</span> 4 sesi setiap bulan dengan durasi 60–120 menit per sesi
              </p>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-8">
            <h3 className="text-xl font-semibold text-ink">Psikoanalisis</h3>
            <p className="mt-3 text-sm text-muted text-pretty">
              Cocok bagi kamu yang ingin menjadikan proses memahami diri sebagai
              bagian dari gaya hidup yang berkelanjutan, persis seperti gosok
              gigi dan olahraga.
            </p>
            <p className="mt-3 text-sm text-muted text-pretty">
              Pendekatan ini berfokus pada pola berulang, dinamika bawah sadar,
              pengalaman relasional, dan kehidupan emosional yang lebih mendalam.
            </p>
            <div className="mt-6 rounded-xl bg-surface-alt p-4">
              <p className="text-sm text-body">
                <span className="font-medium text-ink">Format:</span> Minimal 12 sesi setiap bulan dengan durasi 60 menit per sesi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HealingPathway() {
  const phases = [
    { title: "Pre-Treatment", desc: "Sesi pengenalan awal selama 30 menit tanpa biaya agar kamu dapat mengenal pendampingmu terlebih dahulu dan mempertimbangkan apakah layanan ini sesuai dengan kebutuhanmu." },
    { title: "Assessment & Case Formulation", desc: "Proses memahami gambaran kebutuhan, kekuatan, kerentanan, pola batin, serta kondisi emosionalmu saat ini." },
    { title: "Trial Sessions", desc: "Tahap awal untuk membiasakan diri dengan proses pendampingan sekaligus memastikan kecocokan proses kerja bersama." },
    { title: "Core Sessions", desc: "Tahap pendalaman untuk memahami dan memproses emosi sulit, memperkuat kualitas positif, dan membangun pola relasi yang lebih aman." },
    { title: "Trial Termination", desc: "Tahap persiapan mencukupkan layanan secara bertahap agar wawasan dan pengalaman yang diperoleh dapat mulai diterapkan dalam kehidupan sehari-hari." },
    { title: "Final Termination", desc: "Tahap penutupan dan tindak lanjut untuk membantu proses transisi secara lebih sehat dan sadar." },
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-xl bg-fill-soft text-accent">
            <Sparkle weight="duotone" className="size-5" />
          </div>
          <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-ink">Healing Pathway</h2>
        </div>
        <p className="mt-4 text-muted text-pretty">
          Setiap individu memiliki ritme dan kebutuhan yang berbeda. Karena itu,
          proses pendampingan di Jiwamu berlangsung secara bertahap melalui
          beberapa fase berikut:
        </p>
        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-hairline" aria-hidden />
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div key={i} className="relative pl-14">
                <div className="absolute left-0 flex items-center justify-center size-8 rounded-lg bg-accent text-white text-sm font-semibold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-ink">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Practitioners() {
  const practitioners = [
    { name: "Fakhrun Siraj", exp: "10+ tahun", expertise: "Masalah berulang, ide bunuh diri, hambatan seksual, dan psikosomatis" },
    { name: "Ratih Dian Nur Faizah", exp: "8+ tahun", expertise: "Kekerasan seksual, masalah hubungan, dan pengalaman batin perempuan" },
    { name: "Cin Hapsari Tomoidjojo", exp: "8+ tahun", expertise: "Keresahan spiritual, tekanan sistem, dan proses kreatif" },
    { name: "Juan Lee (Yen)", exp: "5+ tahun", expertise: "Masalah berulang, diskriminasi gender, dan queer" },
    { name: "Muhammad Syibbli Z.", exp: "5+ tahun", expertise: "Nilai hidup, kecemasan sosial, homoseksualitas, dan PMO" },
    { name: "Pipit Puspita Sari", exp: "10+ tahun", expertise: "Hambatan perkembangan, homoseksualitas, dan pengalaman orang tua dengan anak spesial" },
    { name: "Moch. Jodhy J. Rachman", exp: "10+ tahun", expertise: "Tekanan pekerjaan, produktivitas, dan konflik hubungan di tempat kerja" },
    { name: "Ade Machnun S.", exp: "5+ tahun", expertise: "Masalah hubungan, keresahan spiritual, dan bakat-minat" },
    { name: "Ida Ayu Andikawati Manuaba", exp: "5+ tahun", expertise: "Perselingkuhan, kemandirian perempuan, dan keresahan spiritual" },
    { name: "Adrian Septiadi", exp: "8+ tahun", expertise: "Fobia, kecemasan, dan psikosomatis" },
    { name: "Andi Mahdi Sahdani", exp: "8+ tahun", expertise: "Bakat-minat, psikosomatis, dan performa kerja" },
    { name: "Tjoeng Steven", exp: "10+ tahun", expertise: "Adiksi, gangguan kepribadian, dan mindfulness" },
    { name: "Ahmad Fauzan", exp: "10+ tahun", expertise: "Keresahan spiritual, masalah hubungan, dan keuangan" },
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink text-balance">
          Pendengar setiamu
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {practitioners.map((p) => (
            <div key={p.name} className="rounded-2xl border-2 border-hairline-neutral bg-surface-alt p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-fill-soft text-accent shrink-0">
                  <span className="text-lg font-serif">{p.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{p.name}</p>
                  <p className="text-xs text-soft">Berpengalaman {p.exp}</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted text-pretty">
                <span className="font-medium text-body">Keahlian:</span> {p.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Apakah layanan di Jiwamu sama dengan terapi?", a: "Layanan di Jiwamu berfokus pada pendampingan refleksi diri dan proses memahami pengalaman emosional secara lebih mendalam. Pendekatan yang digunakan dapat berbeda-beda sesuai kebutuhan, latar belakang, dan kesepakatan proses kerja bersama." },
    { q: "Apakah saya harus sedang 'sakit' untuk mengikuti layanan?", a: "Tidak. Banyak orang datang bukan karena mengalami krisis berat, tetapi karena ingin memahami dirinya, memperbaiki pola relasi, atau memiliki ruang refleksi yang lebih aman dan terarah." },
    { q: "Mengapa layanan menggunakan sistem bulanan dan bukan per sesi?", a: "Karena kami percaya proses memahami diri membutuhkan kontinuitas. Sistem bulanan membantu proses pendampingan berlangsung lebih stabil, konsisten, dan memiliki arah yang lebih jelas. Lagi pula, jika kita sepakat bahwa kesehatan mental itu penting, bukankah lebih baik membawanya sedekat mungkin dengan kehidupan kita?" },
    { q: "Apakah saya boleh memilih pendamping?", a: "Ya. Kamu dapat memilih pendamping berdasarkan kenyamanan, kebutuhan, atau bidang perhatian masing-masing." },
    { q: "Apakah layanan dilakukan secara online?", a: "Ya. Layanan tersedia secara online maupun offline sesuai ketersediaan dan kesepakatan bersama." },
    { q: "Apakah semua cerita saya akan dirahasiakan?", a: "Ya. Privasi dan kerahasiaan merupakan bagian penting dalam proses pendampingan di Jiwamu." },
  ];
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-xl bg-fill-soft text-accent">
            <Sparkle weight="duotone" className="size-5" />
          </div>
          <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-ink">FAQ</h2>
        </div>
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
    <section className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border-2 border-hairline-neutral bg-gradient-to-br from-fill-soft via-surface to-surface p-8 sm:p-12 text-center shadow-soft">
          <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-ink text-balance">
            Siap memulai perjalananmu?
          </h2>
          <p className="mt-3 text-muted text-pretty">
            Kami menantikan untuk mendengarkan ceritamu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTA href={waLink("Hai Kak Nuy, saya butuh teman pendengar!")} size="lg" external withArrow variant="wa">
              Mulai Konsultasi
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
