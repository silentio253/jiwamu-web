"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { List, X, CaretDown, ArrowUpRight } from "@/components/icons";
import { NAV_ITEMS } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              aria-label="Jiwamu — Beranda"
            >
              <Image
                src="/logo-icon.png"
                alt="Jiwamu"
                width={26}
                height={26}
                className="shrink-0"
                priority
              />
              <span className="text-base font-semibold tracking-tight text-ink">
                Jiwamu
              </span>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
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
                        <div className="min-w-[200px] rounded-xl border border-hairline-neutral bg-white p-1.5 shadow-soft">
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
                href="/tes-kelekatan"
                className="hidden sm:inline-flex group items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-deep active:scale-[0.98] whitespace-nowrap"
              >
                Tes Kelekatan
                <span className="flex items-center justify-center size-5 rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight weight="bold" className="size-3" />
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="xl:hidden flex items-center justify-center size-9 rounded-lg border border-hairline-neutral bg-white text-ink transition-colors hover:bg-fill-soft"
                aria-label="Buka menu"
              >
                <List weight="bold" className="size-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-px bg-hairline-neutral" />
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
            className="flex items-center justify-center size-10 rounded-lg border border-hairline-neutral bg-white text-ink transition-colors hover:bg-fill-soft"
            aria-label="Tutup menu"
          >
            <X weight="bold" className="size-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          {NAV_ITEMS.map((item) => (
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
                      className="block rounded-lg px-4 py-3 text-base text-body transition-colors hover:bg-fill-soft hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-body transition-colors hover:bg-fill-soft hover:text-ink"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/tes-kelekatan"
            onClick={onClose}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-base font-medium text-white transition-all hover:bg-accent-deep active:scale-[0.98]"
          >
            Tes Kelekatan
            <span className="flex items-center justify-center size-5 rounded-full bg-white/15">
              <ArrowUpRight weight="bold" className="size-3" />
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
