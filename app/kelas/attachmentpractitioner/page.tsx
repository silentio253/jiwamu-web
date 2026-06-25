import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { SITE, waLink } from "@/lib/site";
import {
  CheckCircle, CaretDown, Download, MapPin, Clock,
  CurrencyDollar, Sparkle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Certification in Attachment-Based Practitioner (CABP) — Kelas Jiwamu",
  description:
    "Level 3 — Kelas tertinggi dalam jalur sertifikasi Jiwamu. Kompetensi praktik berbasis attachment dalam berbagai bidang kehidupan.",
};

export default function CABPPage() {
  return (
    <>
      <Hero /><Competency /><Curriculum /><Duration /><Investment /><Facilities /><Trainers /><Schedule /><FAQ /><FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-fill-soft to-surface">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center size-10 rounded-xl bg-accent text-white text-sm font-semibold">3</span>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-soft">Level 3 · CABP</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink text-balance">
            Certification in Attachment-Based Practitioner
          </h1>
          <p className="mt-6 text-lg text-muted text-pretty">
            Kelas ini adalah level tertinggi dalam jalur sertifikasi Jiwamu.
            Program ini dirancang bagi peserta yang telah memiliki pemahaman
            mengenai Attachment Facilitating dan Attachment Coaching, serta
            ingin mengembangkan kompetensi praktik berbasis attachment dalam
            berbagai bidang kehidupan.
          </p>
          <p className="mt-4 text-muted text-pretty">
            Lulusan CABP berkesempatan untuk mengembangkan layanan berbasis
            attachment melalui ekosistem Jiwamu, termasuk membuka profil layanan
            di jiwamu.com sesuai ketentuan dan standardisasi yang berlaku, serta
            dukungan penuh untuk publikasi dan pengembangan kompetensi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href={waLink("Hai Kak Nuy, saya ingin gabung kelas CABP!")} size="lg" external withArrow>Daftar Sekarang</CTA>
            <CTA href="#" variant="ghost" size="lg"><Download weight="bold" className="size-4" />Unduh Brosur</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ title, icon: Icon }: { title: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-10 rounded-xl bg-fill-soft text-accent"><Icon weight="duotone" className="size-5" /></div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">{title}</h2>
    </div>
  );
}

function Competency() {
  const items = [
    "Memahami dinamika attachment dalam rentang kehidupan manusia, dari masa kanak-kanak hingga lansia",
    "Menganalisis masalah melalui kerangka attachment-based formulation",
    "Menerapkan perspektif attachment dalam konteks kesehatan mental, pendidikan, keluarga, pasangan, pekerjaan, spiritualitas, ekonomi, dan keadilan sosial",
    "Merancang layanan, program, atau intervensi berbasis attachment dalam berbagai bidang kehidupan",
    "Mengembangkan kemampuan menulis dan publikasi sebagai bagian dari edukasi publik",
    "Memahami etika, batas peran, persetujuan terinformasi, pengaturan praktik, dan tanggung jawab profesional",
    "Membangun praktik layanan berbasis attachment secara terstruktur, reflektif, dan bertanggung jawab",
    "Berkontribusi dalam ekosistem Jiwamu sebagai praktisi, penulis, peneliti, trainer, atau mitra pengembangan profesional",
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface-alt">
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
    "Modul 1 — Writing for Publication", "Modul 2 — Attachment and Mental Health",
    "Modul 3 — Attachment and Education", "Modul 4 — Attachment and Workplace",
    "Modul 5 — Attachment and Parenting", "Modul 6 — Attachment and Romantic Relationship",
    "Modul 7 — Attachment and Spirituality", "Modul 8 — Attachment and Money",
    "Modul 9 — Attachment and Social Justice", "Modul 10 — Start Your Practice!",
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Materi Pelajaran" icon={Sparkle} />
        <p className="mt-4 text-muted">CABP terdiri dari 10 modul utama:</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {modules.map((m, i) => (
            <span key={i} className="inline-flex items-center rounded-lg border border-hairline-neutral bg-surface-alt px-4 py-2 text-sm text-body">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Duration() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Durasi Pelatihan" icon={Clock} />
        <div className="mt-8 rounded-2xl border border-hairline bg-surface-alt p-8">
          <p className="text-2xl font-semibold text-ink">3 Bulan (100 Jam Pembelajaran)</p>
          <p className="mt-4 text-lg leading-relaxed text-body text-pretty">
            Pelatihan disampaikan secara modular dengan sistem blended learning,
            yaitu gabungan pembelajaran offline dan online. Format ini dirancang
            agar peserta mampu untuk membaca, berdiskusi, melakukan refleksi,
            mengerjakan tugas, mengembangkan rancangan praktik, dan mempersiapkan
            kontribusi profesional.
          </p>
        </div>
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Investasi" icon={CurrencyDollar} />
        <div className="mt-8 rounded-2xl border border-hairline bg-surface-alt p-8 sm:p-10">
          <p className="text-4xl font-semibold tracking-tight text-ink">Rp 13.000.000</p>
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
    "Sebutan Certified Attachment-Based Practitioner (CABP)", "Akses untuk menawarkan layanan di Jiwamu",
    "Prospek untuk bergabung dengan Training of Trainers (TOT)", "Total 11 Modul dan Starter Kit Eksklusif",
    "Paket Edisi Bahasa Indonesia John Bowlby (4 Buku)", "Sertifikat Keikutsertaan dari Jiwamu",
    "Sertifikat Keanggotaan Praktisi di Perkumpulan Pamong Jiwa Indonesia (PANJI)",
    "Gratis mengulang materi di kelas yang diadakan di seluruh Indonesia",
    "Undangan keterlibatan dalam proyek penelitian dan publikasi", "Diskon 50% untuk setiap buku PUSAKA PANJI",
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface-alt">
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
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Staf Trainer" icon={Sparkle} />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trainers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-hairline bg-surface-alt p-5 text-center">
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
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="Jadwal Terdekat" icon={MapPin} />
        <div className="mt-8 grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between rounded-2xl border border-hairline bg-gradient-to-br from-fill-soft to-surface p-6">
            <div className="flex items-center gap-3">
              <MapPin weight="duotone" className="size-5 text-accent" />
              <div>
                <p className="text-base font-medium text-ink">Start: Yogyakarta</p>
                <p className="text-sm text-soft">Sabtu, 22 Agustus 2026</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-hairline bg-surface-alt p-6">
            <div className="flex items-center gap-3">
              <MapPin weight="duotone" className="size-5 text-accent" />
              <div>
                <p className="text-base font-medium text-ink">Graduation: Yogyakarta</p>
                <p className="text-sm text-soft">Sabtu & Minggu, 31 Oktober – 1 November 2026</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm text-soft">Nama hotel akan diumumkan menyusul.</p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Apakah saya harus mengikuti CAF dan CAC sebelum mengikuti CABP?", a: "Ya. CABP adalah level tertinggi dalam jalur sertifikasi Jiwamu. Peserta perlu menyelesaikan CAC dan CAH terlebih dahulu agar memiliki fondasi konseptual dan keterampilan dasar yang memadai. Namun kami juga menawarkan program jalur khusus untuk psikolog (HIMPSI), psikologi klinis (IPK.ID), dokter (IDI), psikoanalis (API), konselor (IKI), hipnoterapis (PKHI dan PRAHIPTI), dan coach (ICF). Lihat CABP Professional Bridging Program." },
    { q: "Apa yang membedakan CABP dari CAF dan CAC?", a: "CAF berfokus pada keterampilan dasar attachment. CAC berfokus pada luka attachment dan proses coaching. CABP memperluas keduanya menjadi kompetensi praktik yang lebih komprehensif, lintas bidang, dan profesional." },
    { q: "Apakah lulusan CABP dapat membuka layanan di Jiwamu?", a: "Lulusan CABP berkesempatan menawarkan layanan melalui ekosistem Jiwamu sesuai ketentuan, evaluasi, dan standardisasi yang berlaku." },
    { q: "Apakah CABP hanya untuk profesional kesehatan mental?", a: "Tidak. Program ini terbuka bagi peserta yang telah menyelesaikan CAF dan CAC, terutama mereka yang bekerja atau berminat dalam bidang pendampingan, pendidikan, pengasuhan, komunitas, organisasi, spiritualitas, maupun pengembangan manusia." },
    { q: "Apakah program ini lebih teoritis atau praktis?", a: "Keduanya. CABP menggabungkan pembelajaran teoritis, refleksi, penugasan, diskusi, pengembangan tulisan, dan persiapan praktik layanan berbasis attachment." },
    { q: "Apakah saya akan dibantu memulai praktik?", a: "Ya. Modul terakhir, Start Your Practice!, dirancang untuk membantu peserta menyiapkan layanan, positioning, etika, pengaturan praktik, dan kemungkinan integrasi dengan ekosistem Jiwamu." },
    { q: "Mengapa CABP berlangsung 3 bulan?", a: "Karena CABP dirancang sebagai proses pembentukan praktisi, sehingga peserta membutuhkan waktu untuk membaca, berdiskusi, berlatih, mengerjakan tugas, dan mengembangkan arah praktik masing-masing." },
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead title="FAQ" icon={Sparkle} />
        <div className="mt-8 space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-hairline bg-surface-alt p-5">
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
    <section className="py-20 sm:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-hairline bg-gradient-to-br from-fill-soft via-surface to-surface p-8 sm:p-12 text-center shadow-soft">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink text-balance">Siap untuk naik kelas?</h2>
          <p className="mt-3 text-muted text-pretty">Daftar sekarang dan jadilah Certified Attachment-Based Practitioner (CABP).</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTA href={waLink("Hai Kak Nuy, saya ingin gabung kelas CABP!")} size="lg" external withArrow>Daftar Sekarang</CTA>
            <CTA href="#" variant="ghost" size="lg"><Download weight="bold" className="size-4" />Unduh Brosur</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
