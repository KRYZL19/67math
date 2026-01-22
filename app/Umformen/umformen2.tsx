"use client";

import Link from "next/link";
import { useState } from "react";

// Aufgaben-Daten: immer eine Form gegeben, die anderen beiden sind gesucht
const exercises = [
  // Normalform gegeben
  { id: 1, given: "normal", normal: "f(x) = x² - 6x + 8", nullstellen: "f(x) = (x - 2)(x - 4)", scheitel: "f(x) = (x - 3)² - 1" },
  { id: 2, given: "normal", normal: "f(x) = x² + 4x + 3", nullstellen: "f(x) = (x + 1)(x + 3)", scheitel: "f(x) = (x + 2)² - 1" },
  { id: 3, given: "normal", normal: "f(x) = 2x² - 8x + 6", nullstellen: "f(x) = 2(x - 1)(x - 3)", scheitel: "f(x) = 2(x - 2)² - 2" },
  { id: 4, given: "normal", normal: "f(x) = x² - 4x", nullstellen: "f(x) = x(x - 4)", scheitel: "f(x) = (x - 2)² - 4" },
  { id: 5, given: "normal", normal: "f(x) = x² + 6x + 5", nullstellen: "f(x) = (x + 1)(x + 5)", scheitel: "f(x) = (x + 3)² - 4" },
  { id: 6, given: "normal", normal: "f(x) = 3x² - 12x + 9", nullstellen: "f(x) = 3(x - 1)(x - 3)", scheitel: "f(x) = 3(x - 2)² - 3" },
  { id: 7, given: "normal", normal: "f(x) = x² - 10x + 21", nullstellen: "f(x) = (x - 3)(x - 7)", scheitel: "f(x) = (x - 5)² - 4" },
  
  // Nullstellenform gegeben
  { id: 8, given: "nullstellen", normal: "f(x) = x² - 8x + 15", nullstellen: "f(x) = (x - 3)(x - 5)", scheitel: "f(x) = (x - 4)² - 1" },
  { id: 9, given: "nullstellen", normal: "f(x) = x² + 2x - 8", nullstellen: "f(x) = (x - 2)(x + 4)", scheitel: "f(x) = (x + 1)² - 9" },
  { id: 10, given: "nullstellen", normal: "f(x) = 2x² - 12x + 10", nullstellen: "f(x) = 2(x - 1)(x - 5)", scheitel: "f(x) = 2(x - 3)² - 8" },
  { id: 11, given: "nullstellen", normal: "f(x) = x² - 9", nullstellen: "f(x) = (x - 3)(x + 3)", scheitel: "f(x) = x² - 9" },
  { id: 12, given: "nullstellen", normal: "f(x) = x² + 7x + 10", nullstellen: "f(x) = (x + 2)(x + 5)", scheitel: "f(x) = (x + 3.5)² - 2.25" },
  { id: 13, given: "nullstellen", normal: "f(x) = 2x² + 4x - 6", nullstellen: "f(x) = 2(x - 1)(x + 3)", scheitel: "f(x) = 2(x + 1)² - 8" },
  { id: 14, given: "nullstellen", normal: "f(x) = x² - 5x + 6", nullstellen: "f(x) = (x - 2)(x - 3)", scheitel: "f(x) = (x - 2.5)² - 0.25" },
  
  // Scheitelpunktform gegeben
  { id: 15, given: "scheitel", normal: "f(x) = x² - 4x + 1", nullstellen: "f(x) = (x - 2 - √3)(x - 2 + √3)", scheitel: "f(x) = (x - 2)² - 3" },
  { id: 16, given: "scheitel", normal: "f(x) = x² + 8x + 15", nullstellen: "f(x) = (x + 3)(x + 5)", scheitel: "f(x) = (x + 4)² - 1" },
  { id: 17, given: "scheitel", normal: "f(x) = 2x² - 12x + 23", nullstellen: "f(x) = 2(x - 3 - √2)(x - 3 + √2)", scheitel: "f(x) = 2(x - 3)² + 5" },
  { id: 18, given: "scheitel", normal: "f(x) = x² - 6x + 9", nullstellen: "f(x) = (x - 3)²", scheitel: "f(x) = (x - 3)²" },
  { id: 19, given: "scheitel", normal: "f(x) = x² + 2x - 3", nullstellen: "f(x) = (x - 1)(x + 3)", scheitel: "f(x) = (x + 1)² - 4" },
  { id: 20, given: "scheitel", normal: "f(x) = 3x² - 18x + 24", nullstellen: "f(x) = 3(x - 2)(x - 4)", scheitel: "f(x) = 3(x - 3)² - 3" },
];

export default function Umformen2() {
  const [revealed, setRevealed] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (exerciseId: number, column: string) => {
    const key = `${exerciseId}-${column}`;
    setRevealed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isRevealed = (exerciseId: number, column: string) => {
    return revealed[`${exerciseId}-${column}`] || false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Header mit Zurück-Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zum Dashboard
          </Link>
        </div>

        {/* Hauptinhalt */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Umformungs-Übungen
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
              Forme zwischen den verschiedenen Darstellungen um
            </p>
          </div>

          {/* Tabelle */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-blue-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4 text-left font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                    #
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4 text-left font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                    Normalform
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4 text-left font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                    Nullstellenform
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4 text-left font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                    Scheitelpunktform
                  </th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise) => (
                  <tr key={exercise.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {exercise.id}
                    </td>
                    
                    {/* Normalform Spalte */}
                    <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4">
                      {exercise.given === "normal" ? (
                        <div className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white bg-green-50 dark:bg-green-900 p-2 rounded break-all">
                          {exercise.normal}
                        </div>
                      ) : (
                        <div>
                          {isRevealed(exercise.id, "normal") ? (
                            <div 
                              onClick={() => toggleReveal(exercise.id, "normal")}
                              className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white break-all cursor-pointer hover:opacity-70 transition-opacity p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                              title="Klicken zum Verstecken"
                            >
                              {exercise.normal}
                            </div>
                          ) : (
                            <button
                              onClick={() => toggleReveal(exercise.id, "normal")}
                              className="w-full px-2 sm:px-4 py-2 bg-blue-500 text-white text-xs sm:text-sm rounded hover:bg-blue-600 transition-colors blur-sm hover:blur-none"
                            >
                              Lösung anzeigen
                            </button>
                          )}
                        </div>
                      )}
                    </td>

                    {/* Nullstellenform Spalte */}
                    <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4">
                      {exercise.given === "nullstellen" ? (
                        <div className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white bg-green-50 dark:bg-green-900 p-2 rounded break-all">
                          {exercise.nullstellen}
                        </div>
                      ) : (
                        <div>
                          {isRevealed(exercise.id, "nullstellen") ? (
                            <div 
                              onClick={() => toggleReveal(exercise.id, "nullstellen")}
                              className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white break-all cursor-pointer hover:opacity-70 transition-opacity p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                              title="Klicken zum Verstecken"
                            >
                              {exercise.nullstellen}
                            </div>
                          ) : (
                            <button
                              onClick={() => toggleReveal(exercise.id, "nullstellen")}
                              className="w-full px-2 sm:px-4 py-2 bg-blue-500 text-white text-xs sm:text-sm rounded hover:bg-blue-600 transition-colors blur-sm hover:blur-none"
                            >
                              Lösung anzeigen
                            </button>
                          )}
                        </div>
                      )}
                    </td>

                    {/* Scheitelpunktform Spalte */}
                    <td className="border border-gray-300 dark:border-gray-600 p-2 sm:p-4">
                      {exercise.given === "scheitel" ? (
                        <div className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white bg-green-50 dark:bg-green-900 p-2 rounded break-all">
                          {exercise.scheitel}
                        </div>
                      ) : (
                        <div>
                          {isRevealed(exercise.id, "scheitel") ? (
                            <div 
                              onClick={() => toggleReveal(exercise.id, "scheitel")}
                              className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white break-all cursor-pointer hover:opacity-70 transition-opacity p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                              title="Klicken zum Verstecken"
                            >
                              {exercise.scheitel}
                            </div>
                          ) : (
                            <button
                              onClick={() => toggleReveal(exercise.id, "scheitel")}
                              className="w-full px-2 sm:px-4 py-2 bg-blue-500 text-white text-xs sm:text-sm rounded hover:bg-blue-600 transition-colors blur-sm hover:blur-none"
                            >
                              Lösung anzeigen
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legende */}
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Hinweis:</strong> Die grün markierten Felder zeigen die gegebene Form. 
              Klicke auf "Lösung anzeigen" um die anderen Formen zu sehen. 
              Klicke auf eine sichtbare Lösung, um sie wieder zu verstecken und erneut zu üben! 🔄
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
