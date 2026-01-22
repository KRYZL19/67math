"use client";

import { useState } from "react";
import Link from "next/link";
import Umformen1 from "./umformen1";
import Umformen2 from "./umformen2";

export default function UmformenPage() {
  const [activeComponent, setActiveComponent] = useState<"umformen1" | "umformen2">("umformen1");

  if (activeComponent === "umformen1") {
    return (
      <div>
        <Umformen1 />
        {/* Navigation Button am unteren Rand */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setActiveComponent("umformen2")}
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
      <Umformen2 />
      {/* Navigation Button am unteren Rand */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setActiveComponent("umformen1")}
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
