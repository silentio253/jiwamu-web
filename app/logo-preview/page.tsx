import Image from "next/image";
import Link from "next/link";

export default function LogoPreviewPage() {
  return (
    <section className="min-h-screen bg-surface pt-24 pb-16">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-ink mb-2">
          Logo Preview — Pilih Kandidat
        </h1>
        <p className="text-muted mb-12">
          Klik salah satu untuk melihat di header sebenarnya. Refresh halaman
          setelah memilih.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-xl border border-hairline-neutral bg-surface-alt p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-deep mb-6">
              Kandidat A
            </p>
            <div className="relative h-24 w-full mb-6">
              <Image
                src="/logo-kandidat-a.png"
                alt="Kandidat A — logo baru menu header"
                fill
                className="object-contain"
                sizes="400px"
              />
            </div>
            <p className="text-sm font-medium text-ink">Transparan Jiwamu Logo - 1</p>
            <p className="text-xs text-soft mt-1">886 KB · PNG</p>
          </div>

          <div className="rounded-xl border border-hairline-neutral bg-surface-alt p-8 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-deep mb-6">
              Kandidat B
            </p>
            <div className="relative h-24 w-full mb-6">
              <Image
                src="/logo-kandidat-b.png"
                alt="Kandidat B — logo baru menu header"
                fill
                className="object-contain"
                sizes="400px"
              />
            </div>
            <p className="text-sm font-medium text-ink">logo baru menu header</p>
            <p className="text-xs text-soft mt-1">184 KB · PNG</p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-deep mb-6">
            Preview di Header
          </p>

          <div className="space-y-8">
            <div className="rounded-xl border border-hairline-neutral overflow-hidden">
              <div className="bg-surface/90 px-6 py-4 flex items-center gap-3 border-b border-hairline-neutral">
                <Image
                  src="/logo-kandidat-a.png"
                  alt=""
                  width={26}
                  height={26}
                  className="shrink-0"
                />
                <span className="text-base font-semibold tracking-tight text-ink">
                  Jiwamu
                </span>
                <span className="ml-auto text-xs text-soft">Kandidat A</span>
              </div>
              <div className="bg-surface-alt px-6 py-12 text-center">
                <p className="text-sm text-muted">
                  Preview header dengan Kandidat A
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-hairline-neutral overflow-hidden">
              <div className="bg-surface/90 px-6 py-4 flex items-center gap-3 border-b border-hairline-neutral">
                <Image
                  src="/logo-kandidat-b.png"
                  alt=""
                  width={26}
                  height={26}
                  className="shrink-0"
                />
                <span className="text-base font-semibold tracking-tight text-ink">
                  Jiwamu
                </span>
                <span className="ml-auto text-xs text-soft">Kandidat B</span>
              </div>
              <div className="bg-surface-alt px-6 py-12 text-center">
                <p className="text-sm text-muted">
                  Preview header dengan Kandidat B
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-3">
          <Link
            href="/"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-deep"
          >
            Kembali ke Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
