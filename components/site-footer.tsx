import Link from "next/link";
import Image from "next/image";
import { SITE, FOOTER_KELAS, FOOTER_SUMBER_DAYA, waLink } from "@/lib/site";
import { YoutubeLogo, InstagramLogo, TiktokLogo, Phone } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline-neutral bg-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-1">
              <Image
                src="/logo-icon.png"
                alt="Jiwamu"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-xl font-semibold tracking-tight text-white">
                Jiwamu
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-soft/70">
              PT Jiwa Media Utama
              <br />
              Pusat Usaha dan Kaderisasi
              <br />
              Perkumpulan Pamong Jiwa Indonesia (PUSAKA PANJI)
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-soft/60">
              {SITE.address.line}
              <br />
              {SITE.address.city}, {SITE.address.province}
            </address>
            <a
              href={waLink("Hai Kak Nuy, saya ingin tahu lebih lanjut tentang Jiwamu!")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-deep"
            >
              <Phone weight="bold" className="size-4" />
              {SITE.waDisplay}
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-soft/60">
              Kelas
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_KELAS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-soft/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-soft/60">
              Sumber Daya
            </h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_SUMBER_DAYA.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-soft/80 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-soft/60">
              Terhubung
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-soft/80 transition-colors hover:text-accent"
                >
                  <YoutubeLogo weight="regular" className="size-4" />
                  Jiwamu Talks
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-soft/80 transition-colors hover:text-accent"
                >
                  <InstagramLogo weight="regular" className="size-4" />
                  @jiwamu.daily
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-soft/80 transition-colors hover:text-accent"
                >
                  <TiktokLogo weight="regular" className="size-4" />
                  @jiwamu.daily
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-soft/80 transition-colors hover:text-accent"
                >
                  Shopee: jiwamu_store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <p className="text-xs text-soft/50">
            © {new Date().getFullYear()} PT Jiwa Media Utama
          </p>
        </div>
      </div>
    </footer>
  );
}
