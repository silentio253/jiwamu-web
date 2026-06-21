"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { List, X, CaretDown } from "@/components/icons";
import { NAV_ITEMS, SITE } from "@/lib/site";

function waLink(message: string): string {
  const phone = SITE.waNumber.replace(/^0/, "62");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              scrolled
                ? "rounded-2xl border border-hairline/60 bg-white/85 backdrop-blur-xl shadow-soft px-4 py-2.5"
                : "rounded-2xl border border-transparent bg-white/50 backdrop-blur-md px-5 py-3"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              aria-label="Jiwamu — Beranda"
            >
              <Image
                src="/logo-icon.png"
                alt="Jiwamu"
                width={28}
                height={28}
                className="rounded-lg shrink-0"
                priority
              />
              <span className="text-base font-semibold tracking-tight text-ink">
                Jiwamu
              </span>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="group relative">
                  {"children" in item && item.children ? (
                    <>
                      <button
                        className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-body transition-colors hover:bg-fill-soft hover:text-ink"
                        type="button"
                      >
                        {item.label}
                        <CaretDown
                          weight="bold"
                          className="size-3 transition-transform group-hover:rotate-180"
                        />
                      </button>
                      <div className="invisible absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 opacity-0 translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="min-w-[200px] rounded-xl border border-hairline bg-white p-1.5 shadow-accent-lg">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-3.5 py-2 text-sm text-body transition-colors hover:bg-fill-soft hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3.5 py-2 text-sm font-medium text-body transition-colors hover:bg-fill-soft hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <Link
                href={waLink("Hai Kak Nuy, saya ingin tahu lebih lanjut tentang Jiwamu!")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-accent transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-deep active:scale-[0.98] whitespace-nowrap"
              >
                Hubungi Kami
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="xl:hidden flex items-center justify-center size-9 rounded-lg border border-hairline bg-white text-ink transition-colors hover:bg-fill-soft"
                aria-label="Buka menu"
              >
                <List weight="bold" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[min(420px,100%)] bg-surface shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-hairline-neutral px-6 py-5">
          <span className="text-lg font-semibold text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center size-10 rounded-full border border-hairline bg-white text-ink transition-colors hover:bg-fill-soft"
            aria-label="Tutup menu"
          >
            <X weight="bold" className="size-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label}>
              {"children" in item && item.children ? (
                <div className="mb-2">
                  <p className="px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-soft">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block rounded-xl px-4 py-3 text-base text-body transition-colors hover:bg-fill-soft hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-body transition-colors hover:bg-fill-soft hover:text-ink"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href={waLink("Hai Kak Nuy, saya ingin tahu lebih lanjut tentang Jiwamu!")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-4 flex items-center justify-center rounded-full bg-accent px-5 py-3.5 text-base font-medium text-white shadow-accent transition-all hover:bg-accent-deep active:scale-[0.98]"
          >
            Hubungi via WhatsApp
          </Link>
        </nav>
      </div>
    </div>
  );
}
