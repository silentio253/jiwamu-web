"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
const REPO = "silentio253/jiwamu-web";
const BRANCH = "main";

type Collection = {
  name: string;
  label: string;
  folder: string;
  fields: Field[];
};

type Field = {
  name: string;
  label: string;
  widget: string;
  options?: string[];
  default?: string | boolean;
};

type Item = {
  name: string;
  path: string;
  sha: string;
};

const COLLECTIONS: Collection[] = [
  {
    name: "artikel",
    label: "Artikel",
    folder: "content/artikel",
    fields: [
      { name: "title", label: "Judul", widget: "string" },
      { name: "slug", label: "Slug", widget: "string" },
      { name: "date", label: "Tanggal", widget: "datetime" },
      { name: "category", label: "Kategori", widget: "select", options: ["Kesehatan Mental", "Relasi", "Pengasuhan", "Pengembangan Diri", "Opini"] },
      { name: "description", label: "Ringkasan", widget: "text" },
      { name: "thumbnail", label: "URL Thumbnail", widget: "string" },
      { name: "body", label: "Konten", widget: "markdown" },
    ],
  },
  {
    name: "video",
    label: "Video",
    folder: "content/video",
    fields: [
      { name: "title", label: "Judul", widget: "string" },
      { name: "slug", label: "Slug", widget: "string" },
      { name: "date", label: "Tanggal", widget: "datetime" },
      { name: "description", label: "Deskripsi", widget: "text" },
      { name: "youtube_url", label: "URL YouTube", widget: "string" },
      { name: "thumbnail", label: "URL Thumbnail", widget: "string" },
    ],
  },
  {
    name: "buku",
    label: "Buku",
    folder: "content/buku",
    fields: [
      { name: "title", label: "Judul", widget: "string" },
      { name: "slug", label: "Slug", widget: "string" },
      { name: "author", label: "Pengarang", widget: "string" },
      { name: "price", label: "Harga", widget: "string" },
      { name: "year", label: "Tahun", widget: "string" },
      { name: "description", label: "Deskripsi", widget: "markdown" },
      { name: "coverUrl", label: "URL Cover", widget: "string" },
    ],
  },
  {
    name: "majalah",
    label: "Majalah",
    folder: "content/majalah",
    fields: [
      { name: "title", label: "Judul", widget: "string" },
      { name: "slug", label: "Slug", widget: "string" },
      { name: "edition", label: "Edisi", widget: "string" },
      { name: "date", label: "Tanggal", widget: "string" },
      { name: "description", label: "Deskripsi", widget: "text" },
      { name: "coverUrl", label: "URL Cover", widget: "string" },
      { name: "isLatest", label: "Edisi Terbaru", widget: "boolean", default: false },
    ],
  },
  {
    name: "proyek",
    label: "Proyek",
    folder: "content/proyek",
    fields: [
      { name: "title", label: "Judul", widget: "string" },
      { name: "code", label: "Kode", widget: "string" },
      { name: "status", label: "Status", widget: "select", options: ["active", "completed"] },
      { name: "description", label: "Deskripsi", widget: "markdown" },
      { name: "raised", label: "Dana Terkumpul", widget: "number" },
      { name: "target", label: "Target Dana", widget: "number" },
    ],
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("artikel");
  const [items, setItems] = useState<Item[]>([]);
  const [editing, setEditing] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const collection = COLLECTIONS.find((c) => c.name === activeTab)!;

  const fetchItems = useCallback(async () => {
    if (!GITHUB_TOKEN) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${collection.folder}?ref=${BRANCH}`,
        { headers: { Authorization: `token ${GITHUB_TOKEN}` } },
      );
      if (res.ok) {
        const data = await res.json();
        setItems(data.filter((f: Item) => f.name.endsWith(".json")));
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, [collection.folder]);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/set-state-in-effect
  }, [fetchItems]);

  const handleSave = async () => {
    if (!editing || !GITHUB_TOKEN) return;
    setLoading(true);
    setMessage("");

    const slug = editing.slug || editing.title?.toLowerCase().replace(/\s+/g, "-") || "item";
    const filename = `${slug}.json`;
    const content = JSON.stringify(editing, null, 2);
    const encoded = btoa(unescape(encodeURIComponent(content)));

    try {
      const checkRes = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${collection.folder}/${filename}?ref=${BRANCH}`,
        { headers: { Authorization: `token ${GITHUB_TOKEN}` } },
      );

      let sha = "";
      if (checkRes.ok) {
        const data = await checkRes.json();
        sha = data.sha;
      }

      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${collection.folder}/${filename}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `${sha ? "Update" : "Add"} ${collection.label}: ${editing.title || filename}`,
            content: encoded,
            sha: sha || undefined,
            branch: BRANCH,
          }),
        },
      );

      if (res.ok) {
        setMessage(`✓ ${sha ? "Diupdate" : "Ditambahkan"}: ${editing.title || filename}`);
        setEditing(null);
        fetchItems();
      } else {
        const err = await res.json();
        setMessage(`✗ Error: ${err.message}`);
      }
    } catch (e) {
      setMessage(`✗ Error: ${e}`);
    }
    setLoading(false);
  };

  const handleDelete = async (item: Item) => {
    if (!GITHUB_TOKEN || !confirm(`Hapus ${item.name}?`)) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${item.path}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Delete ${collection.label}: ${item.name}`,
            sha: item.sha,
            branch: BRANCH,
          }),
        },
      );

      if (res.ok) {
        setMessage(`✓ Dihapus: ${item.name}`);
        fetchItems();
      }
    } catch (e) {
      setMessage(`✗ Error: ${e}`);
    }
    setLoading(false);
  };

  const handleNew = () => {
    const defaults: Record<string, string> = {};
    collection.fields.forEach((f) => {
      defaults[f.name] = f.default?.toString() || "";
    });
    setEditing(defaults);
  };

  if (!GITHUB_TOKEN) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold text-ink">Admin — Jiwamu</h1>
          <p className="mt-4 text-sm text-muted">
            Token belum di-setup. Tambahkan environment variable:
          </p>
          <code className="mt-2 block text-xs bg-fill-soft p-3 rounded-lg text-accent">
            NEXT_PUBLIC_GITHUB_TOKEN=ghp_xxx
          </code>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-hairline-neutral">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <h1 className="text-sm font-semibold text-ink">Jiwamu CMS</h1>
            <Link href="/" className="text-xs text-accent hover:text-accent-deep">
              ← Kembali ke situs
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto pb-4 border-b border-hairline-neutral mb-6">
          {COLLECTIONS.map((c) => (
            <button
              key={c.name}
              onClick={() => { setActiveTab(c.name); setEditing(null); setMessage(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === c.name ? "bg-accent text-white" : "text-body hover:bg-fill-soft"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${message.startsWith("✓") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
            {message}
          </div>
        )}

        {/* Edit Form */}
        {editing && (
          <div className="mb-8 p-6 rounded-xl border border-hairline-neutral bg-white">
            <h2 className="text-lg font-semibold text-ink mb-4">
              {editing.title ? `Edit: ${editing.title}` : `Tambah ${collection.label}`}
            </h2>
            <div className="space-y-4">
              {collection.fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-medium text-soft mb-1">{field.label}</label>
                  {field.widget === "select" ? (
                    <select
                      value={editing[field.name] || ""}
                      onChange={(e) => setEditing({ ...editing, [field.name]: e.target.value })}
                      className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent"
                    >
                      <option value="">Pilih...</option>
                      {field.options?.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                  ) : field.widget === "markdown" || field.widget === "text" ? (
                    <textarea
                      value={editing[field.name] || ""}
                      onChange={(e) => setEditing({ ...editing, [field.name]: e.target.value })}
                      rows={field.widget === "markdown" ? 8 : 4}
                      className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink font-mono focus:outline-none focus:border-accent resize-y"
                    />
                  ) : field.widget === "boolean" ? (
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={editing[field.name] === "true"}
                        onChange={(e) => setEditing({ ...editing, [field.name]: e.target.checked.toString() })}
                        className="rounded border-hairline-neutral"
                      />
                      <span className="text-sm text-body">Ya</span>
                    </label>
                  ) : (
                    <input
                      type={field.widget === "number" ? "number" : "text"}
                      value={editing[field.name] || ""}
                      onChange={(e) => setEditing({ ...editing, [field.name]: e.target.value })}
                      className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={handleSave} disabled={loading} className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-deep active:scale-[0.98] disabled:opacity-50">
                {loading ? "Menyimpan..." : "Simpan"}
              </button>
              <button onClick={() => setEditing(null)} className="rounded-lg border border-hairline-neutral px-5 py-2.5 text-sm font-medium text-body hover:bg-fill-soft">
                Batal
              </button>
            </div>
          </div>
        )}

        {/* List */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-ink">
            {collection.label}
            <span className="ml-2 text-sm text-soft font-normal">({items.length} item)</span>
          </h2>
          {!editing && (
            <button onClick={handleNew} className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-deep">
              + Tambah Baru
            </button>
          )}
        </div>

        {loading && items.length === 0 ? (
          <p className="text-sm text-soft">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-soft">Belum ada {collection.label.toLowerCase()}.</p>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.path} className="flex items-center justify-between p-4 rounded-lg border border-hairline-neutral bg-white hover:bg-fill-soft transition-colors">
                <span className="text-sm text-ink font-medium">{item.name.replace(".json", "")}</span>
                <div className="flex gap-2">
                  <button
                    onClick={async () => {
                      const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${item.path}?ref=${BRANCH}`, { headers: { Authorization: `token ${GITHUB_TOKEN}` } });
                      if (res.ok) {
                        const data = await res.json();
                        const content = atob(data.content);
                        setEditing(JSON.parse(content));
                      }
                    }}
                    className="text-xs text-accent hover:text-accent-deep"
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item)} className="text-xs text-red-500 hover:text-red-700">
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
