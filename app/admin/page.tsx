"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Load Decap CMS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    script.onload = () => {
      // CMS loaded - it will automatically look for config
      console.log("Decap CMS loaded");
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
          <p className="text-xs text-gray-400 mt-2">If this takes too long, refresh the page</p>
        </div>
      </div>
    </div>
  );
}
