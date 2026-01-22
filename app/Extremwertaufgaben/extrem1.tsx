"use client";

import { useState } from "react";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import BackButton from "../components/BackButton";

export default function Extrem1() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Hauptbedingung",
      description: "Formuliere die Hauptbedingung - was soll maximiert oder minimiert werden?",
      example: "Beispiel: Flächeninhalt A = x · y soll maximiert werden",
      icon: "🎯",
      color: "from-blue-400 to-blue-600"
    },
    {
      number: 2,
      title: "Nebenbedingungen",
      description: "Identifiziere alle Nebenbedingungen aus der Aufgabenstellung",
      example: "Beispiel: Umfang U = 2x + 2y = 20 (konstant)",
      icon: "🔗",
      color: "from-green-400 to-green-600"
    },
    {
      number: 3,
      title: "Funktion in Abhängigkeit von x",
      description: "Forme die Hauptbedingung um, sodass sie nur noch von x abhängt. Die Funktion ist immer ein Produkt in Nullstellenform!",
      example: "f(x) = x · (10 - x) = -x² + 10x (Nullstellenform: f(x) = -x(x - 10))",
      details: [
        "• Löse die Nebenbedingung nach einer Variablen auf",
        "• Setze in die Hauptbedingung ein",
        "• Bringe in Nullstellenform (Produkt)",
        "• Bestimme den Scheitel xs mit der Formel: xs = (x₁ + x₂) / 2",
        "• Optional: Berechne ys = f(xs) für den y-Wert des Scheitels"
      ],
      icon: "📊",
      color: "from-purple-400 to-purple-600"
    },
    {
      number: 4,
      title: "Antwort formulieren",
      description: "Schreibe einen vollständigen Antwortsatz, der die Aufgabenstellung beantwortet",
      example: "Der Flächeninhalt ist maximal, wenn x = 5 cm beträgt. Die maximale Fläche beträgt 25 cm².",
      details: [
        "• Verstehe, was x im Kontext der Aufgabe bedeutet",
        "• Beantworte die konkrete Fragestellung",
        "• Gib Einheiten an",
        "• Formuliere verständlich und vollständig"
      ],
      icon: "✍️",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <BackButton color="purple" />

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-block p-2 sm:p-3 md:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-3 sm:mb-4">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 px-2">
            Extremwertaufgaben lösen
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-2">
            Schritt-für-Schritt Anleitung
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <button
                  onClick={() => setCurrentStep(index)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm md:text-base transition-all transform hover:scale-110 ${
                    currentStep === index
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110"
                      : currentStep > index
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {currentStep > index ? "✓" : step.number}
                </button>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 sm:h-1.5 md:h-2 mx-1 sm:mx-2 rounded ${
                    currentStep > index ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Display */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden">
            {/* Step Header */}
            <div className={`bg-gradient-to-r ${steps[currentStep].color} p-4 sm:p-6 md:p-8 text-white`}>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{steps[currentStep].icon}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Schritt {steps[currentStep].number}</h2>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-1 sm:mt-1.5 md:mt-2">{steps[currentStep].title}</h3>
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                {steps[currentStep].description}
              </p>

              {/* Example Box */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
                <h4 className="font-semibold text-sm sm:text-base md:text-lg text-purple-800 dark:text-purple-300 mb-2 sm:mb-3">
                  💡 Beispiel:
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200 font-mono bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg break-words overflow-x-auto">
                  {steps[currentStep].example}
                </p>
              </div>

              {/* Additional Details */}
              {steps[currentStep].details && (
                <div className="bg-blue-50 dark:bg-gray-700 rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6">
                  <h4 className="font-semibold text-sm sm:text-base md:text-lg text-blue-800 dark:text-blue-300 mb-2 sm:mb-3">
                    📋 Wichtige Punkte:
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
                    {steps[currentStep].details.map((detail, index) => (
                      <li key={index} className="leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center p-3 sm:p-4 md:p-6 lg:p-8 bg-gray-50 dark:bg-gray-700 gap-2 sm:gap-4">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all ${
                  currentStep === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:-translate-x-1"
                }`}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Zurück</span>
              </button>

              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {currentStep + 1} / {steps.length}
                </p>
              </div>

              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all ${
                  currentStep === steps.length - 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:translate-x-1"
                }`}
              >
                <span className="hidden sm:inline">Weiter</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Quick Tips Section */}
          <div className="mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border-2 border-amber-200 dark:border-amber-700">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-300 mb-3 sm:mb-4 flex items-center gap-2">
              💡 Quick-Tipps & Formeln
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                {
                  title: "Scheitelpunkt aus Nullstellen",
                  formula: "xs = (x₁ + x₂) / 2",
                  tip: "Der Scheitelpunkt liegt genau in der Mitte zwischen den Nullstellen"
                },
                {
                  title: "Nullstellenform erkennen",
                  formula: "f(x) = a(x - x₁)(x - x₂)",
                  tip: "Extremwertaufgaben führen IMMER zu einem Produkt!"
                },
                {
                  title: "Vorzeichen von a",
                  formula: "a > 0 → Minimum, a < 0 → Maximum",
                  tip: "Negatives a bedeutet nach unten geöffnete Parabel"
                }
              ].map((tip, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border-l-4 border-amber-500 hover:shadow-md transition-all"
                >
                  <h4 className="font-bold text-sm sm:text-base text-gray-800 dark:text-gray-200 mb-1 sm:mb-2">
                    {tip.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-400 mb-1 sm:mb-2 bg-purple-50 dark:bg-gray-700 p-1.5 sm:p-2 rounded">
                    {tip.formula}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">
                    {tip.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
