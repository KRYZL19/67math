"use client";

import { FileText } from "lucide-react";
import dynamic from "next/dynamic";
import BackButton from "../components/BackButton";

const Aufgabe1 = dynamic(() => import("./aufgabe1"), { ssr: false });
const Aufgabe2 = dynamic(() => import("./aufgabe2"), { ssr: false });
const Aufgabe3 = dynamic(() => import("./aufgabe3"), { ssr: false });

export default function PDFPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <BackButton color="blue" />

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
            <FileText className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            PDF Downloads
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Übungsaufgaben mit Lösungen
          </p>
        </div>

        {/* Aufgaben Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Aufgabe1 />
          <Aufgabe2 />
          <Aufgabe3 />
        </div>
      </div>
    </div>
  );
}
