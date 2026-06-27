"use client";

import { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamic import Quill
    import("quill").then((QuillModule) => {
      const Quill = QuillModule.default;

      if (containerRef.current && !quillRef.current) {
        // Create editor container
        const editor = document.createElement("div");
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(editor);

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
      }
    });

    return () => {
      quillRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update value from outside
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value;
    }
  }, [value]);

  return (
    <div
      ref={containerRef}
      className="quill-editor rounded-lg border border-hairline-neutral overflow-hidden"
    />
  );
}
