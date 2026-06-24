import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { SITE } from "@/lib/site";
import { CheckCircle } from "@/components/icons";
import proyekData from "@/content/proyek.json";

export const metadata: Metadata = {
  title: "Proyek — Jiwamu",
  description:
    "Jiwamu Project merupakan kolaborasi untuk mengembangkan kajian kesehatan mental yang lebih dekat dengan sejarah, budaya, spiritualitas, dan pengalaman hidup masyarakat Indonesia.",
};

type Proyek = {
  id: number;
  code: string;
  title: string;
  status: "active" | "completed";
  description: string;
  raised: number;
  target: number;
};

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function ProyekPage() {
  const active = (proyekData as Proyek[]).filter((p) => p.status === "active");
  const completed = (proyekData as Proyek[]).filter(
    (p) => p.status === "completed",
  );

  return (
    <>
      <HeroSection />
      <ActiveSection projects={active} />
      <CompletedSection projects={completed} />
      <DonateSection />
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
              Jiwamu Project
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.1] tracking-tight text-ink text-balance">
              Laboratorium riset dekolonisasi kesehatan mental.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed text-pretty">
              Jiwamu Project merupakan kolaborasi antara Yayasan Pusat
              Psikoanalisis Indonesia dan PT Jiwa Media Utama untuk
              mengembangkan kajian kesehatan mental yang lebih dekat dengan
              sejarah, budaya, spiritualitas, dan pengalaman hidup masyarakat
              Indonesia.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base text-muted leading-relaxed text-pretty">
              Kami percaya bahwa banyak pengetahuan kejiwaan modern berkembang
              dalam konteks sejarah dan budaya tertentu. Karena itu, kami
              berupaya membangun dialog yang lebih setara antara pengetahuan
              global dan pengalaman lokal masyarakat Indonesia.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ActiveSection({ projects }: { projects: Proyek[] }) {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink mb-12">
            Proyek Berjalan
          </h2>
        </Reveal>

        <RevealStagger className="space-y-6" stagger={0.1}>
          {projects.map((project, i) => (
            <RevealItem key={project.id} index={i}>
              <div className="rounded-xl border border-hairline-neutral bg-surface p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-soft">
                      Kode {project.code}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-fill-soft px-3 py-1 text-xs font-medium text-accent">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Berjalan
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted leading-relaxed text-pretty">
                  {project.description}
                </p>

                <div className="mt-6 pt-4 border-t border-hairline-neutral">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted">Dana terkumpul</span>
                    <span className="text-sm font-medium text-ink">
                      {formatRupiah(project.raised)} / {formatRupiah(project.target)}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-fill-soft overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-1000"
                      style={{
                        width: `${Math.min(100, (project.raised / project.target) * 100)}%`,
                      }}
                    />
                  </div>
                  <div className="mt-4 text-right">
                    <CTA
                      href={`https://wa.me/${SITE.waNumber.replace(/^0/, "62")}?text=${encodeURIComponent(`Hai Kak Nuy, saya ingin berdonasi untuk Proyek ${project.title} (${project.code})`)}`}
                      variant="ghost"
                      size="sm"
                      external
                    >
                      Donasi Sekarang
                    </CTA>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function CompletedSection({ projects }: { projects: Proyek[] }) {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink mb-12">
            Proyek Selesai
          </h2>
        </Reveal>

        <RevealStagger className="space-y-6" stagger={0.1}>
          {projects.map((project, i) => (
            <RevealItem key={project.id} index={i}>
              <div className="rounded-xl border border-hairline-neutral bg-surface-alt p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-soft">
                      Kode {project.code}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-fill-soft px-3 py-1 text-xs font-medium text-soft">
                    <CheckCircle weight="bold" className="size-3" />
                    Selesai
                  </span>
                </div>

                <p className="mt-4 text-sm text-muted leading-relaxed text-pretty">
                  {project.description}
                </p>

                <div className="mt-6 pt-4 border-t border-hairline-neutral">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">Dana terkumpul</span>
                    <span className="text-sm font-medium text-ink">
                      {formatRupiah(project.raised)} / {formatRupiah(project.target)}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-fill-soft overflow-hidden">
                    <div className="h-full rounded-full bg-soft w-full" />
                  </div>
                  <p className="mt-2 text-xs text-soft text-right">Donasi Ditutup!</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function DonateSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-ink text-balance">
            Dukung Perjalanan Kami
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-muted text-pretty">
            Setiap bentuk sumbangan adalah bahan bakar bagi keberlanjutan
            riset, penerbitan, dan pendidikan yang kami bangun dengan sepenuh
            hati.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-8 rounded-xl border border-hairline-neutral bg-surface p-6 sm:p-8">
            <p className="text-sm text-muted">
              Salurkan donasi melalui:
            </p>
            <p className="mt-4 text-lg font-semibold text-ink">
              {SITE.bank.name}
            </p>
            <p className="mt-2 text-2xl font-mono font-semibold text-accent">
              {SITE.bank.account}
            </p>
            <p className="mt-2 text-sm text-muted">
              a.n. {SITE.bank.holder}
            </p>
            <p className="mt-4 text-xs text-soft">
              Tambahkan kode proyek di akhir nominal donasi.
              <br />
              Contoh: Rp150.004 → untuk Proyek Psikologi Sukerta
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
