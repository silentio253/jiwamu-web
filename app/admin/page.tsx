"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [token, setToken] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("jiwamu_cms_token") || "";
    }
    return "";
  });
  const [status, setStatus] = useState("idle");
  const [items, setItems] = useState<any[]>([]);
  const [editing, setEditing] = useState<Record<string, string> | null>(null);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("artikel");

  const handleTokenChange = (newToken: string) => {
    setToken(newToken);
    if (typeof window !== "undefined") {
      localStorage.setItem("jiwamu_cms_token", newToken);
    }
  };

  const collections: Record<string, { label: string; folder: string; fields: { name: string; label: string; type: string }[] }> = {
    artikel: {
      label: "Artikel",
      folder: "content/artikel",
      fields: [
        { name: "title", label: "Judul", type: "text" },
        { name: "slug", label: "Slug", type: "text" },
        { name: "date", label: "Tanggal (YYYY-MM-DD)", type: "text" },
        { name: "category", label: "Kategori", type: "select" },
        { name: "description", label: "Ringkasan", type: "textarea" },
        { name: "thumbnail", label: "URL Thumbnail", type: "text" },
        { name: "body", label: "Konten", type: "textarea" },
      ],
    },
    video: {
      label: "Video",
      folder: "content/video",
      fields: [
        { name: "title", label: "Judul", type: "text" },
        { name: "slug", label: "Slug", type: "text" },
        { name: "date", label: "Tanggal (YYYY-MM-DD)", type: "text" },
        { name: "description", label: "Deskripsi", type: "textarea" },
        { name: "youtube_url", label: "URL YouTube", type: "text" },
      ],
    },
    buku: {
      label: "Buku",
      folder: "content/buku",
      fields: [
        { name: "title", label: "Judul", type: "text" },
        { name: "slug", label: "Slug", type: "text" },
        { name: "author", label: "Pengarang", type: "text" },
        { name: "price", label: "Harga", type: "text" },
        { name: "year", label: "Tahun", type: "text" },
        { name: "description", label: "Deskripsi", type: "textarea" },
        { name: "coverUrl", label: "URL Cover", type: "text" },
      ],
    },
    majalah: {
      label: "Majalah",
      folder: "content/majalah",
      fields: [
        { name: "title", label: "Judul", type: "text" },
        { name: "slug", label: "Slug", type: "text" },
        { name: "edition", label: "Edisi", type: "text" },
        { name: "date", label: "Tanggal", type: "text" },
        { name: "description", label: "Deskripsi", type: "textarea" },
        { name: "coverUrl", label: "URL Cover", type: "text" },
      ],
    },
    proyek: {
      label: "Proyek",
      folder: "content/proyek",
      fields: [
        { name: "title", label: "Judul", type: "text" },
        { name: "code", label: "Kode", type: "text" },
        { name: "status", label: "Status", type: "text" },
        { name: "description", label: "Deskripsi", type: "textarea" },
        { name: "raised", label: "Dana Terkumpul (Rp)", type: "number" },
        { name: "target", label: "Target Dana (Rp)", type: "number" },
      ],
    },
  };

  const col = collections[activeTab];

  const handleLoad = async () => {
    if (!token) {
      setMessage("Masukkan GitHub token dulu");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(
        `https://api.github.com/repos/silentio253/jiwamu-web/contents/${col.folder}?ref=main`,
        { headers: { Authorization: `token ${token}` } },
      );
      if (res.ok) {
        const data = await res.json();
        setItems(data.filter((f: any) => f.name.endsWith(".json")));
        setStatus("loaded");
      } else {
        setStatus("error");
        setMessage(`Error: ${res.status}`);
      }
    } catch (e) {
      setStatus("error");
      setMessage(`Error: ${e}`);
    }
  };

  const handleSave = async () => {
    if (!editing || !token) return;
    const slug = editing.slug || editing.title?.toLowerCase().replace(/\s+/g, "-") || "item";
    const filename = `${slug}.json`;
    const content = JSON.stringify(editing, null, 2);
    const encoded = btoa(unescape(encodeURIComponent(content)));

    try {
      const checkRes = await fetch(
        `https://api.github.com/repos/silentio253/jiwamu-web/contents/${col.folder}/${filename}?ref=main`,
        { headers: { Authorization: `token ${token}` } },
      );
      let sha = "";
      if (checkRes.ok) {
        const data = await checkRes.json();
        sha = data.sha;
      }

      const res = await fetch(
        `https://api.github.com/repos/silentio253/jiwamu-web/contents/${col.folder}/${filename}`,
        {
          method: "PUT",
          headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `${sha ? "Update" : "Add"} ${col.label}: ${editing.title || filename}`,
            content: encoded,
            sha: sha || undefined,
            branch: "main",
          }),
        },
      );

      if (res.ok) {
        setMessage(`✓ Disimpan: ${editing.title || filename}`);
        setEditing(null);
        handleLoad();
      } else {
        const err = await res.json();
        setMessage(`✗ Error: ${err.message}`);
      }
    } catch (e) {
      setMessage(`✗ Error: ${e}`);
    }
  };

  const handleDelete = async (item: any) => {
    if (!confirm(`Hapus ${item.name}?`)) return;
    try {
      const res = await fetch(
        `https://api.github.com/repos/silentio253/jiwamu-web/contents/${item.path}`,
        {
          method: "DELETE",
          headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `Delete ${col.label}: ${item.name}`,
            sha: item.sha,
            branch: "main",
          }),
        },
      );
      if (res.ok) {
        setMessage(`✓ Dihapus: ${item.name}`);
        handleLoad();
      }
    } catch (e) {
      setMessage(`✗ Error: ${e}`);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fafbfd" }}>
      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "12px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong style={{ fontSize: 14 }}>Jiwamu CMS</strong>
          <Link href="/" style={{ fontSize: 12, color: "#4b6bff" }}>← Kembali</Link>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px" }}>
        {/* Token input */}
        <div style={{ marginBottom: 16, padding: 16, background: "white", borderRadius: 12, border: "1px solid #e5e7eb" }}>
          <label style={{ fontSize: 12, fontWeight: 500, marginBottom: 8, display: "block" }}>
            GitHub Token (ghp_xxx)
          </label>
          <input
            type="password"
            value={token}
            onChange={(e) => handleTokenChange(e.target.value)}
            placeholder="ghp_xxx..."
            style={{ width: "100%", padding: "10px 16px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 14 }}
          />
          <p style={{ fontSize: 11, color: "#667085", marginTop: 8 }}>
            Token disimpan di browser. Juga set di Vercel: Settings → Environment Variables → NEXT_PUBLIC_GITHUB_TOKEN
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, overflowX: "auto", paddingBottom: 16, borderBottom: "1px solid #e5e7eb" }}>
          {Object.entries(collections).map(([key, c]) => (
            <button
              key={key}
              onClick={() => { setActiveTab(key); setStatus("idle"); setItems([]); setEditing(null); setMessage(""); }}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                background: activeTab === key ? "#4b6bff" : "transparent",
                color: activeTab === key ? "white" : "#344054",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Status */}
        {message && (
          <div style={{ marginBottom: 16, padding: 12, borderRadius: 8, fontSize: 13, background: message.startsWith("✓") ? "#f0fdf4" : "#fef2f2", color: message.startsWith("✓") ? "#15803d" : "#b91c1c", border: `1px solid ${message.startsWith("✓") ? "#bbf7d0" : "#fecaca"}` }}>
            {message}
          </div>
        )}

        {/* Load button */}
        {status === "idle" && (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <p style={{ fontSize: 14, color: "#475467", marginBottom: 16 }}>
              Klik tombol untuk muat {col.label.toLowerCase()}
            </p>
            <button
              onClick={handleLoad}
              style={{ padding: "12px 24px", borderRadius: 8, background: "#4b6bff", color: "white", border: "none", fontWeight: 500, cursor: "pointer" }}
            >
              Muat {col.label}
            </button>
          </div>
        )}

        {/* Edit form */}
        {editing && (
          <div style={{ marginBottom: 32, padding: 24, background: "white", borderRadius: 12, border: "1px solid #e5e7eb" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              {editing.title ? `Edit: ${editing.title}` : `Tambah ${col.label}`}
            </h2>
            {col.fields.map((field) => (
              <div key={field.name} style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 12, fontWeight: 500, marginBottom: 4, display: "block" }}>
                  {field.label}
                </label>
                {field.type === "select" && field.name === "category" ? (
                  <select
                    value={editing[field.name] || ""}
                    onChange={(e) => setEditing({ ...editing, [field.name]: e.target.value })}
                    style={{ width: "100%", padding: "10px 16px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 14, background: "white" }}
                  >
                    <option value="">Pilih kategori...</option>
                    <option value="Kesehatan Mental">Kesehatan Mental</option>
                    <option value="Relasi">Relasi</option>
                    <option value="Pengasuhan">Pengasuhan</option>
                    <option value="Pengembangan Diri">Pengembangan Diri</option>
                    <option value="Opini">Opini</option>
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    value={editing[field.name] || ""}
                    onChange={(e) => setEditing({ ...editing, [field.name]: e.target.value })}
                    rows={field.name === "body" ? 8 : 4}
                    style={{ width: "100%", padding: "10px 16px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontFamily: field.name === "body" ? "monospace" : "inherit", resize: "vertical" }}
                  />
                ) : (
                  <input
                    type={field.type === "number" ? "number" : "text"}
                    value={editing[field.name] || ""}
                    onChange={(e) => setEditing({ ...editing, [field.name]: e.target.value })}
                    placeholder={field.name === "slug" ? "otomatis dari judul" : ""}
                    style={{ width: "100%", padding: "10px 16px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 14 }}
                  />
                )}
              </div>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <button onClick={handleSave} style={{ padding: "10px 20px", borderRadius: 8, background: "#4b6bff", color: "white", border: "none", fontWeight: 500, cursor: "pointer" }}>
                Simpan
              </button>
              <button onClick={() => setEditing(null)} style={{ padding: "10px 20px", borderRadius: 8, background: "transparent", color: "#344054", border: "1px solid #e5e7eb", fontWeight: 500, cursor: "pointer" }}>
                Batal
              </button>
            </div>
          </div>
        )}

        {/* List */}
        {status === "loaded" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: 600 }}>
                {col.label} <span style={{ fontSize: 14, fontWeight: 400, color: "#475467" }}>({items.length} item)</span>
              </h2>
              {!editing && (
                <button onClick={() => {
                  const defaults: Record<string, string> = {};
                  col.fields.forEach((f) => { defaults[f.name] = ""; });
                  setEditing(defaults);
                }} style={{ padding: "8px 16px", borderRadius: 8, background: "#4b6bff", color: "white", border: "none", fontWeight: 500, cursor: "pointer" }}>
                  + Tambah Baru
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <p style={{ fontSize: 14, color: "#475467" }}>Belum ada {col.label.toLowerCase()}</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((item: any) => (
                  <div key={item.path} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16, background: "white", border: "1px solid #e5e7eb", borderRadius: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{item.name.replace(".json", "")}</span>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={async () => {
                          const res = await fetch(`https://api.github.com/repos/silentio253/jiwamu-web/contents/${item.path}?ref=main`, { headers: { Authorization: `token ${token}` } });
                          if (res.ok) {
                            const data = await res.json();
                            setEditing(JSON.parse(atob(data.content)));
                          }
                        }}
                        style={{ fontSize: 12, color: "#4b6bff", background: "none", border: "none", cursor: "pointer" }}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item)} style={{ fontSize: 12, color: "#b91c1c", background: "none", border: "none", cursor: "pointer" }}>
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
