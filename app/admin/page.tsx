"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="nc-root" className="min-h-screen bg-white">
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-sm text-gray-500">Loading CMS...</p>
      </div>
    </div>
  );
}
