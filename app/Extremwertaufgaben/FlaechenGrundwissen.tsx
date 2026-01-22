"use client";

import { Square, RectangleHorizontal, Triangle, Circle, Hexagon, Diamond } from "lucide-react";

export default function FlaechenGrundwissen() {
  const formulas = [
    {
      icon: RectangleHorizontal,
      name: "Rechteck",
      area: "A = a · b",
      perimeter: "U = 2a + 2b",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Square,
      name: "Quadrat",
      area: "A = a²",
      perimeter: "U = 4a",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Triangle,
      name: "Dreieck",
      area: "A = ½ · g · h",
      perimeter: "U = a + b + c",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Circle,
      name: "Kreis",
      area: "A = π · r²",
      perimeter: "U = 2π · r",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Hexagon,
      name: "Trapez",
      area: "A = ½ · (a+c) · h",
      perimeter: "U = a + b + c + d",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Diamond,
      name: "Parallelogramm",
      area: "A = a · h",
      perimeter: "U = 2a + 2b",
      color: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <div className="text-3xl sm:text-4xl md:text-5xl">📐</div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Flächengrundwissen
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-0.5 md:mt-1">
                Die wichtigsten Flächenformeln im Überblick
              </p>
            </div>
          </div>

          {/* Formulas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
            {formulas.map((formula, index) => {
              const Icon = formula.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-600 dark:bg-slate-700 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 hover:bg-slate-500 dark:hover:bg-slate-600 transition-all transform hover:scale-105"
                >
                  <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 flex items-center gap-2 text-white">
                    <div className={`bg-gradient-to-r ${formula.color} p-1.5 sm:p-2 rounded-lg`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">{formula.name}</span>
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2 font-mono text-xs sm:text-sm">
                    <p className="bg-slate-500 dark:bg-slate-800 text-white rounded px-2 sm:px-3 py-1.5 sm:py-2">
                      {formula.area}
                    </p>
                    <p className="bg-slate-500 dark:bg-slate-800 text-white rounded px-2 sm:px-3 py-1.5 sm:py-2">
                      {formula.perimeter}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 bg-slate-600 dark:bg-slate-800 rounded-lg md:rounded-xl">
            <p className="text-xs sm:text-sm text-slate-200">
              <strong className="text-white">Legende:</strong> A = Fläche, U = Umfang, a/b/c = Seiten, g = Grundseite, h = Höhe, r = Radius
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
