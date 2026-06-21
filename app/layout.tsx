import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web.jiwamu.com"),
  title: {
    default: "Jiwamu — Bertumbuh Bersama",
    template: "%s — Jiwamu",
  },
  description:
    "Jiwamu adalah ekosistem pengembangan diri dan media digital berbasis teori kelekatan. Ruang belajar, pendampingan, penerbitan, media, dan gerakan sosial.",
  keywords: [
    "Jiwamu",
    "attachment",
    "kelekatan",
    "psikologi",
    "kesehatan mental",
    "coaching",
    "psikoanalisis",
    "PANJI",
  ],
  authors: [{ name: "PT Jiwa Media Utama" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Jiwamu — Bertumbuh Bersama",
    description:
      "Ekosistem pengembangan diri dan media digital berbasis teori kelekatan.",
    siteName: "Jiwamu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <noscript>
          <style>{`.reveal,.reveal-item{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
