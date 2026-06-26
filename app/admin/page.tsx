"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    // Prevent auto-init
    win.CMS_MANUAL_INIT = true;

    // Load Decap CMS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    script.onload = () => {
      // Wait for CMS to be ready
      const check = setInterval(() => {
        if (win.CMS && win.CMS.init) {
          clearInterval(check);
          win.CMS.init({
            config: {
              backend: {
                name: "github",
                repo: "silentio253/jiwamu-web",
                branch: "main",
                auth_type: "token",
                token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || "",
              },
              locale: "id",
              publish_mode: "editorial_workflow",
              media_folder: "public/images/uploads",
              public_folder: "/images/uploads",
              collections: [
                {
                  name: "artikel",
                  label: "Artikel",
                  folder: "content/artikel",
                  create: true,
                  slug: "{{slug}}",
                  fields: [
                    { label: "Judul", name: "title", widget: "string" },
                    { label: "Slug", name: "slug", widget: "string" },
                    { label: "Tanggal", name: "date", widget: "datetime" },
                    { label: "Kategori", name: "category", widget: "select", options: ["Kesehatan Mental", "Relasi", "Pengasuhan", "Pengembangan Diri", "Opini"] },
                    { label: "Ringkasan", name: "description", widget: "text" },
                    { label: "Thumbnail", name: "thumbnail", widget: "image", required: false },
                    { label: "Konten", name: "body", widget: "markdown" },
                  ],
                },
                {
                  name: "video",
                  label: "Video",
                  folder: "content/video",
                  create: true,
                  slug: "{{slug}}",
                  fields: [
                    { label: "Judul", name: "title", widget: "string" },
                    { label: "Slug", name: "slug", widget: "string" },
                    { label: "Tanggal", name: "date", widget: "datetime" },
                    { label: "Deskripsi", name: "description", widget: "text" },
                    { label: "URL YouTube", name: "youtube_url", widget: "string" },
                    { label: "Thumbnail", name: "thumbnail", widget: "image", required: false },
                  ],
                },
                {
                  name: "buku",
                  label: "Buku",
                  folder: "content/buku",
                  create: true,
                  slug: "{{slug}}",
                  fields: [
                    { label: "Judul", name: "title", widget: "string" },
                    { label: "Slug", name: "slug", widget: "string" },
                    { label: "Pengarang", name: "author", widget: "string" },
                    { label: "Harga", name: "price", widget: "string" },
                    { label: "Tahun", name: "year", widget: "string" },
                    { label: "Halaman", name: "pages", widget: "string" },
                    { label: "Ukuran", name: "size", widget: "string" },
                    { label: "Berat", name: "weight", widget: "string" },
                    { label: "Penerbit", name: "publisher", widget: "string", default: "Penerbit Jiwamu" },
                    { label: "Cover", name: "coverUrl", widget: "image", required: false },
                    { label: "Deskripsi", name: "description", widget: "markdown" },
                    { label: "Daftar Isi", name: "tableOfContents", widget: "list", required: false },
                  ],
                },
                {
                  name: "majalah",
                  label: "Majalah",
                  folder: "content/majalah",
                  create: true,
                  slug: "{{slug}}",
                  fields: [
                    { label: "Judul", name: "title", widget: "string" },
                    { label: "Slug", name: "slug", widget: "string" },
                    { label: "Edisi", name: "edition", widget: "string" },
                    { label: "Tanggal", name: "date", widget: "string" },
                    { label: "Deskripsi", name: "description", widget: "text" },
                    { label: "Cover", name: "coverUrl", widget: "image", required: false },
                    { label: "URL Unduh PDF", name: "downloadUrl", widget: "string", required: false },
                    { label: "Edisi Terbaru", name: "isLatest", widget: "boolean", default: false },
                  ],
                },
                {
                  name: "proyek",
                  label: "Proyek",
                  folder: "content/proyek",
                  create: true,
                  slug: "{{slug}}",
                  fields: [
                    { label: "Judul", name: "title", widget: "string" },
                    { label: "Kode", name: "code", widget: "string" },
                    { label: "Status", name: "status", widget: "select", options: ["active", "completed"] },
                    { label: "Deskripsi", name: "description", widget: "markdown" },
                    { label: "Dana Terkumpul (Rp)", name: "raised", widget: "number" },
                    { label: "Target Dana (Rp)", name: "target", widget: "number" },
                  ],
                },
              ],
            },
          });
        }
      }, 100);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="nc-root" className="min-h-screen bg-white">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-sm text-gray-500">Loading CMS...</p>
          <p className="text-xs text-gray-400 mt-2">GitHub backend — login with token</p>
        </div>
      </div>
    </div>
  );
}
