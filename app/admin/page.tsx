"use client";

import { useState } from "react";
import Link from "next/link";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
const REPO = "silentio253/jiwamu-web";
const BRANCH = "main";

const COLLECTIONS = [
  { name: "artikel", label: "Artikel", folder: "content/artikel" },
  { name: "video", label: "Video", folder: "content/video" },
  { name: "buku", label: "Buku", folder: "content/buku" },
  { name: "majalah", label: "Majalah", folder: "content/majalah" },
  { name: "proyek", label: "Proyek", folder: "content/proyek" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("artikel");
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const collection = COLLECTIONS.find((c) => c.name === activeTab)!;

  const handleLoad = async () => {
    if (!GITHUB_TOKEN) {
      setMessage("✗ Token belum di-setup di Vercel environment variables.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${collection.folder}?ref=${BRANCH}`,
        { headers: { Authorization: `token ${GITHUB_TOKEN}` } },
      );
      if (res.ok) {
        const data = await res.json();
        setItems(data.filter((f: any) => f.name.endsWith(".json")));
        setLoaded(true);
        setMessage(`✓ ${data.length} item ditemukan`);
      } else if (res.status === 404) {
        setItems([]);
        setLoaded(true);
        setMessage(`✓ Folder belum ada — klik "Tambah Baru" untuk mulai`);
      } else {
        setMessage(`✗ Error: ${res.status} ${res.statusText}`);
      }
    } catch (e: any) {
      setMessage(`✗ Error: ${e.message || e}`);
    }
    setLoading(false);
  };

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
          headers: { Authorization: `token ${GITHUB_TOKEN}`, "Content-Type": "application/json" },
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
        handleLoad(); // Refresh list
      } else {
        const err = await res.json();
        setMessage(`✗ Error: ${err.message}`);
      }
    } catch (e: any) {
      setMessage(`✗ Error: ${e.message || e}`);
    }
    setLoading(false);
  };

  const handleDelete = async (item: any) => {
    if (!GITHUB_TOKEN || !confirm(`Hapus ${item.name}?`)) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/contents/${item.path}`,
        {
          method: "DELETE",
          headers: { Authorization: `token ${GITHUB_TOKEN}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `Delete ${collection.label}: ${item.name}`,
            sha: item.sha,
            branch: BRANCH,
          }),
        },
      );
      if (res.ok) {
        setMessage(`✓ Dihapus: ${item.name}`);
        handleLoad();
      }
    } catch (e: any) {
      setMessage(`✗ Error: ${e.message || e}`);
    }
    setLoading(false);
  };

  const handleNew = () => {
    setEditing({ title: "", slug: "", body: "", description: "" });
  };

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
        {/* Status */}
        <div className="mb-4 p-3 rounded-lg bg-fill-soft text-sm text-body">
          {GITHUB_TOKEN
            ? `✓ Token ter-setup (${GITHUB_TOKEN.slice(0, 4)}...${GITHUB_TOKEN.slice(-4)})`
            : "✗ Token belum di-setup. Tambahkan NEXT_PUBLIC_GITHUB_TOKEN di Vercel."}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto pb-4 border-b border-hairline-neutral mb-6">
          {COLLECTIONS.map((c) => (
            <button
              key={c.name}
              onClick={() => {
                setActiveTab(c.name);
                setEditing(null);
                setMessage("");
                setLoaded(false);
                setItems([]);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === c.name
                  ? "bg-accent text-white"
                  : "text-body hover:bg-fill-soft"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              message.startsWith("✓")
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message}
          </div>
        )}

        {/* Load button */}
        {!loaded && (
          <div className="text-center py-12">
            <p className="text-sm text-muted mb-4">
              Klik tombol di bawah untuk memuat konten {collection.label.toLowerCase()}
            </p>
            <button
              onClick={handleLoad}
              disabled={loading}
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-deep disabled:opacity-50"
            >
              {loading ? "Memuat..." : `Muat ${collection.label}`}
            </button>
          </div>
        )}

        {/* Edit Form */}
        {editing && (
          <div className="mb-8 p-6 rounded-xl border border-hairline-neutral bg-white">
            <h2 className="text-lg font-semibold text-ink mb-4">
              {editing.title ? `Edit: ${editing.title}` : `Tambah ${collection.label}`}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-soft mb-1">Judul</label>
                <input
                  type="text"
                  value={editing.title || ""}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-soft mb-1">Slug</label>
                <input
                  type="text"
                  value={editing.slug || ""}
                  onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                  placeholder="otomatis dari judul"
                  className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-soft mb-1">Deskripsi</label>
                <textarea
                  value={editing.description || ""}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent resize-y"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-soft mb-1">Konten</label>
                <textarea
                  value={editing.body || ""}
                  onChange={(e) => setEditing({ ...editing, body: e.target.value })}
                  rows={8}
                  className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink font-mono focus:outline-none focus:border-accent resize-y"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSave}
                disabled={loading}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-deep active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? "Menyimpan..." : "Simpan"}
              </button>
              <button
                onClick={() => setEditing(null)}
                className="rounded-lg border border-hairline-neutral px-5 py-2.5 text-sm font-medium text-body hover:bg-fill-soft"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        {/* List */}
        {loaded && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-ink">
                {collection.label}
                <span className="ml-2 text-sm text-soft font-normal">({items.length} item)</span>
              </h2>
              {!editing && (
                <button
                  onClick={handleNew}
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-deep"
                >
                  + Tambah Baru
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <p className="text-sm text-soft">
                Belum ada {collection.label.toLowerCase()}. Klik &quot;Tambah Baru&quot; untuk mulai.
              </p>
            ) : (
              <div className="space-y-2">
                {items.map((item: any) => (
                  <div
                    key={item.path}
                    className="flex items-center justify-between p-4 rounded-lg border border-hairline-neutral bg-white hover:bg-fill-soft transition-colors"
                  >
                    <span className="text-sm text-ink font-medium">
                      {item.name.replace(".json", "")}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={async () => {
                          setLoading(true);
                          const res = await fetch(
                            `https://api.github.com/repos/${REPO}/contents/${item.path}?ref=${BRANCH}`,
                            { headers: { Authorization: `token ${GITHUB_TOKEN}` } },
                          );
                          if (res.ok) {
                            const data = await res.json();
                            const content = atob(data.content);
                            setEditing(JSON.parse(content));
                          }
                          setLoading(false);
                        }}
                        className="text-xs text-accent hover:text-accent-deep"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
