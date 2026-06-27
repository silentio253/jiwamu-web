"use client";

import { useEffect, useRef, useState } from "react";

type QuillEditorProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function QuillEditor({
  value,
  onChange,
  placeholder = "Tulis konten di sini...",
}: QuillEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    // Dynamic import Quill
    import("quill").then((QuillModule) => {
      const Quill = QuillModule.default;

      if (containerRef.current && !quillRef.current) {
        // Create editor container
        const editor = document.createElement("div");
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(editor);

        try {
          quillRef.current = new Quill(editor, {
            theme: "snow",
            placeholder,
            modules: {
              toolbar: [
                [{ header: [2, 3, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["blockquote", "link"],
                ["clean"],
              ],
            },
          });

          // Set initial value
          if (value) {
            quillRef.current.root.innerHTML = value;
          }

          // Listen for changes
          quillRef.current.on("text-change", () => {
            if (quillRef.current) {
              const html = quillRef.current.root.innerHTML;
              onChangeRef.current(html);
            }
          });
        } catch (e) {
          console.error("Quill init error:", e);
          // Fallback: show textarea
          const textarea = document.createElement("textarea");
          textarea.value = value;
          textarea.style.width = "100%";
          textarea.style.minHeight = "200px";
          textarea.style.padding = "12px";
          textarea.style.border = "1px solid #e5e7eb";
          textarea.style.borderRadius = "8px";
          textarea.style.fontSize = "14px";
          textarea.addEventListener("input", (e) => {
            onChangeRef.current((e.target as HTMLTextAreaElement).value);
          });
          containerRef.current.innerHTML = "";
          containerRef.current.appendChild(textarea);
        }
      }
    }).catch((e) => {
      console.error("Quill load error:", e);
      // Fallback: show textarea
      if (containerRef.current) {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.width = "100%";
        textarea.style.minHeight = "200px";
        textarea.style.padding = "12px";
        textarea.style.border = "1px solid #e5e7eb";
        textarea.style.borderRadius = "8px";
        textarea.style.fontSize = "14px";
        textarea.addEventListener("input", (e) => {
          onChangeRef.current((e.target as HTMLTextAreaElement).value);
        });
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(textarea);
      }
    });

    return () => {
      quillRef.current = null;
    };
  }, [mounted, placeholder]);

  // Update value from outside
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value;
    }
  }, [value]);

  if (!mounted) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        placeholder={placeholder}
        className="w-full rounded-lg border border-hairline-neutral bg-surface px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-accent resize-y"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="quill-editor rounded-lg border border-hairline-neutral overflow-hidden"
    />
  );
}
