"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Extrem1 from "./extrem1";
import Extrem2 from "./extrem2";

export default function ExtremwertaufgabenPage() {
  const [activeComponent, setActiveComponent] = useState<"extrem1" | "extrem2">("extrem1");

  if (activeComponent === "extrem1") {
    return (
      <div>
        <Extrem1 />
        {/* Navigation Button am unteren Rand */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setActiveComponent("extrem2")}
            className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Zu Übungen</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Extrem2 />
      {/* Navigation Button am unteren Rand */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setActiveComponent("extrem1")}
          className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-105 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          <span>Zu Theorie</span>
        </button>
      </div>
    </div>
  );
}
