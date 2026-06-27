import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Jiwamu CMS",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
