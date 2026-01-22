"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, TrendingUp, Activity, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Set random logo only on client side to avoid hydration mismatch
    const random = Math.random();
    if (random < 0.33) {
      setLogoSrc("/67.png");
    } else if (random < 0.66) {
      setLogoSrc("/67-6-7.gif");
    } else {
      setLogoSrc("/noFilter.png");
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative">
      <main className="w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hallooooooo des wird ne 1
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Umformen Card */}
          <Link href="/Umformen">
            <div className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8 border-2 border-transparent hover:border-blue-500">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                  Umformen
                </h2>
              </div>
            </div>
          </Link>

          {/* Extremwertaufgaben Card */}
          <Link href="/Extremwertaufgaben">
            <div className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8 border-2 border-transparent hover:border-purple-500">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-purple-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                  Extremwertaufgaben
                </h2>
              </div>
            </div>
          </Link>

          {/* Parabeln GoodToKnow Card */}
          <Link href="/Parabeln">
            <div className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8 border-2 border-transparent hover:border-pink-500">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                  Parabeln GoodToKnow
                </h2>
              </div>
            </div>
          </Link>

          {/* PDF Downloads Card */}
          <Link href="/PDF">
            <div className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8 border-2 border-transparent hover:border-green-500">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                  PDF Downloads
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Logo unten rechts */}
      {logoSrc && (
        <div 
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 cursor-pointer z-40"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={logoSrc}
            alt="Logo"
            width={120}
            height={120}
            className="opacity-70 hover:opacity-100 transition-opacity hover:scale-110 transition-transform"
            unoptimized={logoSrc.endsWith('.gif')}
          />
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* X Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Schließen"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* GIF */}
            <div className="flex justify-center items-center">
              <Image
                src="/67-6-7.gif"
                alt="67 Animation"
                width={500}
                height={500}
                className="rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
