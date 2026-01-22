"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  color?: string;
}

export default function BackButton({ href = "/", color = "blue" }: BackButtonProps) {
  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    pink: "text-pink-600 dark:text-pink-400",
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="mb-4 sm:mb-6">
      <Link 
        href={href}
        className={`inline-flex items-center px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-white dark:bg-gray-800 ${colorClass} rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs sm:text-sm md:text-base`}
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
        <span className="hidden md:inline">Zurück zum Dashboard</span>
        <span className="md:hidden">Zurück</span>
      </Link>
    </div>
  );
}
