"use client";

import { useState } from "react";
import { Eye, EyeOff, CheckCircle, Lightbulb, Trophy } from "lucide-react";
import BackButton from "../components/BackButton";
import FlaechenGrundwissen from "./FlaechenGrundwissen";

type Problem = {
  id: number;
  title: string;
  problem: string;
  hint: string;
  solution: {
    hauptbedingung: string;
    nebenbedingung: string;
    funktion: string;
    berechnung: string[];
    antwort: string;
  };
};

export default function Extrem2() {
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  const problems: Problem[] = [
    {
      id: 1,
      title: "a = 20, b = 10 optimieren",
      problem: "Ein Rechteck hat die Seiten a = 20 und b = 10. Um wie viel muss a kleiner und b größer werden (gleiche Änderung x), damit die Fläche maximal wird?",
      hint: "a wird um x kleiner: (20-x), b wird um x größer: (10+x)",
      solution: {
        hauptbedingung: "A = a · b → maximieren, wobei a = 20-x und b = 10+x",
        nebenbedingung: "Die große Seite a bekommt -x: a = 20-x. Die kleine Seite b bekommt +x: b = 10+x",
        funktion: "A(x) = (20-x) · (10+x) = 200 + 20x - 10x - x² = -x² + 10x + 200 = -(x² - 10x - 200) = -(x-15)(x+5) umgeformt: = -(x+5)(x-15)",
        berechnung: [
          "Ausmultipliziert: A(x) = -x² + 10x + 200",
          "Nullstellen: x₁ = -5, x₂ = 15",
          "Scheitel: xs = (-5 + 15) / 2 = 5",
          "a = 20 - 5 = 15",
          "b = 10 + 5 = 15",
          "Maximale Fläche: A(5) = 15 · 15 = 225"
        ],
        antwort: "Die Fläche ist maximal, wenn a um 5 kleiner (a = 15) und b um 5 größer (b = 15) wird. Die maximale Fläche beträgt 225 Flächeneinheiten."
      }
    },
    {
      id: 2,
      title: "Rechteck mit festem Umfang",
      problem: "Ein Rechteck hat einen Umfang von 40 cm. Welche Seitenlängen x und y muss es haben, damit die Fläche maximal wird?",
      hint: "Umfang: U = 2x + 2y = 40, Fläche: A = x · y",
      solution: {
        hauptbedingung: "A(x,y) = x · y → maximieren",
        nebenbedingung: "Aus U = 2x + 2y = 40 folgt: x + y = 20. Die große Seite bekommt -x, die kleine Seite bekommt +x: y = 20 - x",
        funktion: "A(x) = x · (20 - x) = -x² + 20x = -x(x - 20)",
        berechnung: [
          "Nullstellen: x₁ = 0, x₂ = 20",
          "Scheitel: xs = (0 + 20) / 2 = 10",
          "ys = 20 - 10 = 10",
          "Maximale Fläche: A(10) = 10 · 10 = 100 cm²"
        ],
        antwort: "Die Fläche ist maximal, wenn x = 10 cm und y = 10 cm. Das Rechteck ist also ein Quadrat mit einer maximalen Fläche von 100 cm²."
      }
    },
    {
      id: 3,
      title: "Zwei Zahlen mit Summe 20",
      problem: "Zwei Zahlen x und y haben die Summe 20. Maximiere das Produkt x · y.",
      hint: "Die Summe ist fest: x + y = 20",
      solution: {
        hauptbedingung: "P(x,y) = x · y → maximieren",
        nebenbedingung: "x + y = 20. Die größere Zahl bekommt -x, die kleinere +x: y = 20 - x",
        funktion: "P(x) = x · (20 - x) = -x² + 20x = -x(x - 20)",
        berechnung: [
          "Nullstellen: x₁ = 0, x₂ = 20",
          "Scheitel: xs = (0 + 20) / 2 = 10",
          "ys = 20 - 10 = 10",
          "Maximales Produkt: P(10) = 10 · 10 = 100"
        ],
        antwort: "Das Produkt ist maximal, wenn x = 10 und y = 10. Das maximale Produkt beträgt 100."
      }
    },
    {
      id: 4,
      title: "Ticketerlös maximieren",
      problem: "Ein Kino hat 200 Plätze. Bei einem Ticketpreis von 10€ sind alle Plätze ausverkauft. Pro 1€ Preiserhöhung bleiben 10 Plätze leer. Welcher Preis maximiert den Erlös?",
      hint: "Erlös = Preis · Anzahl verkaufter Tickets",
      solution: {
        hauptbedingung: "E(x) = Preis · Anzahl → maximieren (x = Preiserhöhung in €)",
        nebenbedingung: "Preis = 10 + x, Anzahl = 200 - 10x. Der höhere Preis bekommt +x, die niedrigere Anzahl bekommt -10x",
        funktion: "E(x) = (10 + x) · (200 - 10x) = 2000 + 100x - 10x² = -10(x² - 10x - 200) = -10(x + 10)(x - 20)",
        berechnung: [
          "Ausmultipliziert: E(x) = -10x² + 100x + 2000",
          "Nullstellen: x₁ = -10, x₂ = 20",
          "Scheitel: xs = (-10 + 20) / 2 = 5",
          "Preis = 10 + 5 = 15€",
          "Anzahl = 200 - 10(5) = 150 Tickets",
          "Maximaler Erlös: E(5) = 15 · 150 = 2250€"
        ],
        antwort: "Der Erlös ist maximal bei einem Ticketpreis von 15€. Es werden dann 150 Tickets verkauft und der maximale Erlös beträgt 2250€."
      }
    },
    {
      id: 5,
      title: "Rechteck mit Gesamtlänge 30",
      problem: "Die Summe der Seiten x und y eines Rechtecks beträgt 30. Maximiere die Fläche A = x · y.",
      hint: "x + y = 30",
      solution: {
        hauptbedingung: "A(x,y) = x · y → maximieren",
        nebenbedingung: "x + y = 30. Die große Seite bekommt -x: y = 30 - x",
        funktion: "A(x) = x · (30 - x) = -x² + 30x = -x(x - 30)",
        berechnung: [
          "Nullstellen: x₁ = 0, x₂ = 30",
          "Scheitel: xs = (0 + 30) / 2 = 15",
          "ys = 30 - 15 = 15",
          "Maximale Fläche: A(15) = 15 · 15 = 225"
        ],
        antwort: "Die Fläche ist maximal, wenn x = 15 und y = 15. Die maximale Fläche beträgt 225 Flächeneinheiten."
      }
    },
    {
      id: 6,
      title: "Zwei Seiten mit Summe 50",
      problem: "Die Summe von 2x und y beträgt 50. Maximiere das Produkt x · y.",
      hint: "2x + y = 50",
      solution: {
        hauptbedingung: "P(x,y) = x · y → maximieren",
        nebenbedingung: "2x + y = 50. Die große Seite bekommt -2x: y = 50 - 2x",
        funktion: "P(x) = x · (50 - 2x) = 50x - 2x² = -2x(x - 25)",
        berechnung: [
          "Nullstellen: x₁ = 0, x₂ = 25",
          "Scheitel: xs = (0 + 25) / 2 = 12,5",
          "ys = 50 - 2(12,5) = 25",
          "Maximales Produkt: P(12,5) = 12,5 · 25 = 312,5"
        ],
        antwort: "Das Produkt ist maximal, wenn x = 12,5 und y = 25. Das maximale Produkt beträgt 312,5."
      }
    }
  ];

  const toggleSolution = (id: number) => {
    setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <BackButton color="emerald" />

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-block p-2 sm:p-3 md:p-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-3 sm:mb-4">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 px-2">
            Übungsaufgaben
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2">
            Flächenprobleme mit x · y
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 px-2">
            Versuche zuerst selbst zu lösen, dann zeige die Lösung!
          </p>
        </div>

        {/* Problems Grid */}
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl"
            >
              {/* Problem Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 sm:p-4 md:p-6 text-white">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
                    {problem.id}
                  </div>
                  <h2 className="text-base sm:text-xl md:text-2xl font-bold">{problem.title}</h2>
                </div>
              </div>

              {/* Problem Content */}
              <div className="p-3 sm:p-4 md:p-6">
                {/* Problem Statement */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 mb-3 sm:mb-4">
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg text-blue-900 dark:text-blue-300 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="text-base sm:text-lg md:text-xl">📋</span>
                    <span>Aufgabenstellung:</span>
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                    {problem.problem}
                  </p>
                </div>

                {/* Hint */}
                <div className="bg-amber-50 dark:bg-gray-700 rounded-lg md:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Tipp:</strong> {problem.hint}</span>
                  </p>
                </div>

                {/* Toggle Solution Button */}
                <button
                  onClick={() => toggleSolution(problem.id)}
                  className={`w-full py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base transition-all transform hover:scale-105 ${
                    showSolution[problem.id]
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                  }`}
                >
                  {showSolution[problem.id] ? (
                    <span className="flex items-center justify-center gap-2">
                      <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Lösung ausblenden</span>
                      <span className="sm:hidden">Ausblenden</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Lösung anzeigen</span>
                      <span className="sm:hidden">Anzeigen</span>
                    </span>
                  )}
                </button>

                {/* Solution (Collapsible) */}
                {showSolution[problem.id] && (
                  <div className="mt-3 sm:mt-4 md:mt-6 space-y-3 sm:space-y-4 animate-fade-in">
                    {/* Step 1: Hauptbedingung */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5">
                      <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">1</span>
                        <span>Hauptbedingung:</span>
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200 font-mono text-xs sm:text-sm ml-8 sm:ml-9 md:ml-10 break-words">
                        {problem.solution.hauptbedingung}
                      </p>
                    </div>

                    {/* Step 2: Nebenbedingung */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5">
                      <h4 className="font-bold text-green-900 dark:text-green-200 mb-2 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">2</span>
                        <span>Nebenbedingung:</span>
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200 font-mono text-xs sm:text-sm ml-8 sm:ml-9 md:ml-10 break-words">
                        {problem.solution.nebenbedingung}
                      </p>
                    </div>

                    {/* Step 3: Funktion */}
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5">
                      <h4 className="font-bold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">3</span>
                        <span className="leading-tight">Funktion in Abhängigkeit von x:</span>
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200 font-mono text-xs sm:text-sm ml-8 sm:ml-9 md:ml-10 mb-2 sm:mb-3 break-words">
                        {problem.solution.funktion}
                      </p>
                      <div className="ml-8 sm:ml-9 md:ml-10 space-y-1 sm:space-y-2">
                        {problem.solution.berechnung.map((step, idx) => (
                          <p key={idx} className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm break-words">
                            {step}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Step 4: Antwort */}
                    <div className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5">
                      <h4 className="font-bold text-pink-900 dark:text-pink-200 mb-2 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                        <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0">4</span>
                        <span>Antwort:</span>
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base ml-8 sm:ml-9 md:ml-10 leading-relaxed">
                        {problem.solution.antwort}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-12 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-300 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <span>Wichtige Erkenntnisse</span>
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200">
            <li>• Bei Flächenproblemen ist die Hauptbedingung meist <strong>A = x · y</strong></li>
            <li>• Die Nebenbedingung kommt aus den Randbedingungen (Umfang, Material, etc.)</li>
            <li>• Die Funktion muss immer in <strong>Nullstellenform</strong> gebracht werden</li>
            <li>• Der Scheitel liegt bei <strong>xs = (x₁ + x₂) / 2</strong></li>
            <li>• Vergiss nicht, die Antwort im <strong>Kontext der Aufgabe</strong> zu formulieren!</li>
          </ul>
        </div>

        {/* Flächengrundwissen Section */}
        <div className="max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-12">
          <FlaechenGrundwissen />
        </div>
      </div>
    </div>
  );
}
