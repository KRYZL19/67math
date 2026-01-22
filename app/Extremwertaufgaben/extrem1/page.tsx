import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Extrem1 from "../extrem1";

export default function Extrem1Page() {
  return (
    <div>
      {/* Back Button */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-10">
        <Link 
          href="/Extremwertaufgaben" 
          className="inline-flex items-center px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs sm:text-sm md:text-base"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Zurück</span>
        </Link>
      </div>
      
      <Extrem1 />
    </div>
  );
}
