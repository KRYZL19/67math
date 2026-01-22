"use client";

import { useState } from "react";
import BackButton from "../components/BackButton";

type FormType = "scheitel" | "normal" | "nullstellen";

export default function Umformen1() {
  const [fromForm, setFromForm] = useState<FormType>("scheitel");
  const [toForm, setToForm] = useState<FormType>("normal");

  // Automatically adjust if same form is selected on both sides
  const handleFromChange = (form: FormType) => {
    setFromForm(form);
    if (form === toForm) {
      // Find a different form to switch to
      const forms: FormType[] = ["scheitel", "normal", "nullstellen"];
      const otherForm = forms.find(f => f !== form) || "normal";
      setToForm(otherForm);
    }
  };

  const handleToChange = (form: FormType) => {
    setToForm(form);
    if (form === fromForm) {
      // Find a different form to switch to
      const forms: FormType[] = ["scheitel", "normal", "nullstellen"];
      const otherForm = forms.find(f => f !== form) || "normal";
      setFromForm(otherForm);
    }
  };

  const formLabels: Record<FormType, string> = {
    scheitel: "Scheitelpunktform",
    normal: "Normalform",
    nullstellen: "Nullstellenform"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-6">
        <BackButton color="blue" />

        {/* Hauptinhalt */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
              Umformen von quadratischen Funktionen
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300">
              Wähle aus, zwischen welchen Formen du umrechnen möchtest
            </p>
          </div>

          {/* Translator-style Form Selector */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-2 sm:gap-4 mb-8 items-center">
            {/* From (Left) */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 p-2 sm:p-4 rounded-lg sm:rounded-xl">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2 text-center">Von:</h3>
              <div className="space-y-1 sm:space-y-2">
                {(["scheitel", "normal", "nullstellen"] as FormType[]).map((form) => (
                  <button
                    key={form}
                    onClick={() => handleFromChange(form)}
                    className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-all ${
                      fromForm === form
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="hidden sm:inline">{formLabels[form]}</span>
                    <span className="inline sm:hidden">
                      {form === "scheitel" ? "Scheitel" : form === "normal" ? "Normal" : "Nullst."}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Arrow (Center) */}
            <div className="flex justify-center items-center px-1">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* To (Right) */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 p-2 sm:p-4 rounded-lg sm:rounded-xl">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2 text-center">Nach:</h3>
              <div className="space-y-1 sm:space-y-2">
                {(["scheitel", "normal", "nullstellen"] as FormType[]).map((form) => (
                  <button
                    key={form}
                    onClick={() => handleToChange(form)}
                    className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-all ${
                      toForm === form
                        ? "bg-green-600 text-white shadow-lg scale-105"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="hidden sm:inline">{formLabels[form]}</span>
                    <span className="inline sm:hidden">
                      {form === "scheitel" ? "Scheitel" : form === "normal" ? "Normal" : "Nullst."}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Display */}
          <div className="space-y-6">
            {fromForm === "scheitel" && toForm === "normal" && <ScheitelNormal />}
            {fromForm === "scheitel" && toForm === "nullstellen" && <ScheitelNullstellen />}
            {fromForm === "normal" && toForm === "scheitel" && <NormalScheitel />}
            {fromForm === "normal" && toForm === "nullstellen" && <NormalNullstellen />}
            {fromForm === "nullstellen" && toForm === "scheitel" && <NullstellenScheitel />}
            {fromForm === "nullstellen" && toForm === "normal" && <NullstellenNormal />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Scheitelpunktform → Normalform
function ScheitelNormal() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Von Scheitelpunktform zu Normalform
      </h2>
      
      <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ausgangsform:</h3>
        <p className="text-lg font-mono text-gray-800 dark:text-gray-200">f(x) = a(x - d)² + e</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Scheitelpunkt: S(d|e)</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Beispiel: f(x) = 2(x - 3)² + 5</h3>
        
        <div className="space-y-4">
          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 1: Binomische Formel anwenden</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2(x - 3)² + 5</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2(x² - 6x + 9) + 5</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Wir nutzen: (a - b)² = a² - 2ab + b²
            </p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Hier: (x - 3)² = x² - 2·3·x + 3² = x² - 6x + 9
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 2: Klammer ausmultiplizieren</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2·x² - 2·6x + 2·9 + 5</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2x² - 12x + 18 + 5</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Distributivgesetz: Multipliziere die 2 mit jedem Term in der Klammer
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 3: Zusammenfassen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2x² - 12x + 23</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Addiere die konstanten Terme: 18 + 5 = 23
            </p>
          </div>

          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Endergebnis (Normalform):</p>
            <p className="text-lg font-mono text-green-900 dark:text-green-100">f(x) = 2x² - 12x + 23</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">Form: f(x) = ax² + bx + c</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Scheitelpunktform → Nullstellenform
function ScheitelNullstellen() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Von Scheitelpunktform zu Nullstellenform
      </h2>
      
      <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ausgangsform:</h3>
        <p className="text-lg font-mono text-gray-800 dark:text-gray-200">f(x) = a(x - d)² + e</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Beispiel: f(x) = 2(x - 3)² - 8</h3>
        
        <div className="space-y-4">
          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 1: Gleichung aufstellen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">0 = 2(x - 3)² - 8</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Setze f(x) = 0, um die Nullstellen zu finden
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 2: Nach (x - d)² isolieren</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">2(x - 3)² = 8</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">(x - 3)² = 4</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Addiere 8 auf beiden Seiten, dann dividiere durch 2
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 3: Wurzel ziehen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x - 3 = ±√4</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x - 3 = ±2</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Beachte: ± bedeutet beide Lösungen (positiv und negativ)
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 4: Nullstellen berechnen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x₁ = 3 + 2 = 5</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x₂ = 3 - 2 = 1</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Addiere 3 auf beiden Seiten
            </p>
          </div>

          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Endergebnis (Nullstellenform):</p>
            <p className="text-lg font-mono text-green-900 dark:text-green-100">f(x) = 2(x - 1)(x - 5)</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">Form: f(x) = a(x - x₁)(x - x₂)</p>
            <p className="text-sm text-green-700 dark:text-green-300">Nullstellen: x₁ = 1, x₂ = 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Normalform → Scheitelpunktform
function NormalScheitel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Von Normalform zu Scheitelpunktform
      </h2>
      
      <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ausgangsform:</h3>
        <p className="text-lg font-mono text-gray-800 dark:text-gray-200">f(x) = ax² + bx + c</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Beispiel: f(x) = 2x² - 12x + 23</h3>
        
        <div className="space-y-4">
          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 1: a ausklammern (bei x²-Term und x-Term)</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2(x² - 6x) + 23</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Klammere den Faktor vor x² aus: 2x² - 12x = 2(x² - 6x)
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 2: Quadratische Ergänzung</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">Berechne: (b/(2a))² = (-6/2)² = (-3)² = 9</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Nimm den Koeffizient vor x (hier: -6), teile durch 2, quadriere
            </p>
            <p className="ml-4 text-gray-700 dark:text-gray-300 mt-2">f(x) = 2(x² - 6x + 9 - 9) + 23</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Addiere und subtrahiere 9 in der Klammer (= 0, ändert nichts)
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 3: Binomische Formel rückwärts</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2((x - 3)² - 9) + 23</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Erkenne: x² - 6x + 9 = (x - 3)²
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 4: Ausmultiplizieren und zusammenfassen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2(x - 3)² - 2·9 + 23</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2(x - 3)² - 18 + 23</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2(x - 3)² + 5</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Multipliziere die -9 aus der Klammer mit 2, dann addiere
            </p>
          </div>

          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Endergebnis (Scheitelpunktform):</p>
            <p className="text-lg font-mono text-green-900 dark:text-green-100">f(x) = 2(x - 3)² + 5</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">Form: f(x) = a(x - d)² + e</p>
            <p className="text-sm text-green-700 dark:text-green-300">Scheitelpunkt: S(3|5)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Normalform → Nullstellenform
function NormalNullstellen() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Von Normalform zu Nullstellenform
      </h2>
      
      <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ausgangsform:</h3>
        <p className="text-lg font-mono text-gray-800 dark:text-gray-200">f(x) = ax² + bx + c</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Beispiel: f(x) = 2x² - 12x + 10</h3>
        
        <div className="space-y-4">
          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 1: Mitternachtsformel anwenden</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x = (-b ± √(b² - 4ac)) / (2a)</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Mit a = 2, b = -12, c = 10
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 2: Werte einsetzen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x = (12 ± √((-12)² - 4·2·10)) / (2·2)</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x = (12 ± √(144 - 80)) / 4</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x = (12 ± √64) / 4</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Berechne Diskriminante: b² - 4ac = 144 - 80 = 64
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 3: Wurzel berechnen und vereinfachen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x = (12 ± 8) / 4</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → √64 = 8
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 4: Beide Nullstellen berechnen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x₁ = (12 + 8) / 4 = 20 / 4 = 5</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">x₂ = (12 - 8) / 4 = 4 / 4 = 1</p>
          </div>

          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Endergebnis (Nullstellenform):</p>
            <p className="text-lg font-mono text-green-900 dark:text-green-100">f(x) = 2(x - 1)(x - 5)</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">Form: f(x) = a(x - x₁)(x - x₂)</p>
            <p className="text-sm text-green-700 dark:text-green-300">Nullstellen: x₁ = 1, x₂ = 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Nullstellenform → Scheitelpunktform
function NullstellenScheitel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Von Nullstellenform zu Scheitelpunktform
      </h2>
      
      <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ausgangsform:</h3>
        <p className="text-lg font-mono text-gray-800 dark:text-gray-200">f(x) = a(x - x₁)(x - x₂)</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Beispiel: f(x) = 2(x - 1)(x - 5)</h3>
        
        <div className="space-y-4">
          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 1: Scheitelpunkt-x-Koordinate berechnen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">d = (x₁ + x₂) / 2 = (1 + 5) / 2 = 3</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Der Scheitelpunkt liegt genau in der Mitte zwischen den Nullstellen
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 2: y-Koordinate durch Einsetzen berechnen</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">e = f(3) = 2(3 - 1)(3 - 5)</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">e = 2 · 2 · (-2)</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">e = -8</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Setze x = 3 in die ursprüngliche Funktion ein
            </p>
          </div>

          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Endergebnis (Scheitelpunktform):</p>
            <p className="text-lg font-mono text-green-900 dark:text-green-100">f(x) = 2(x - 3)² - 8</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">Form: f(x) = a(x - d)² + e</p>
            <p className="text-sm text-green-700 dark:text-green-300">Scheitelpunkt: S(3|-8)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Nullstellenform → Normalform
function NullstellenNormal() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Von Nullstellenform zu Normalform
      </h2>
      
      <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ausgangsform:</h3>
        <p className="text-lg font-mono text-gray-800 dark:text-gray-200">f(x) = a(x - x₁)(x - x₂)</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Beispiel: f(x) = 2(x - 1)(x - 5)</h3>
        
        <div className="space-y-4">
          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 1: Erste Klammer ausmultiplizieren</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2[(x - 1)(x - 5)]</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2[x·x - x·5 - 1·x + 1·5]</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2[x² - 5x - x + 5]</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Nutze: (a - b)(c - d) = ac - ad - bc + bd
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 2: Zusammenfassen in der Klammer</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2[x² - 6x + 5]</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Fasse gleiche Terme zusammen: -5x - x = -6x
            </p>
          </div>

          <div className="step">
            <p className="font-semibold text-blue-600 dark:text-blue-400">Schritt 3: Faktor ausmultiplizieren</p>
            <p className="ml-4 text-gray-700 dark:text-gray-300">f(x) = 2x² - 12x + 10</p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → Distributivgesetz: Multipliziere 2 mit jedem Term
            </p>
            <p className="ml-4 text-sm italic text-gray-600 dark:text-gray-400">
              → 2·x² = 2x², 2·(-6x) = -12x, 2·5 = 10
            </p>
          </div>

          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mt-4">
            <p className="font-bold text-green-800 dark:text-green-200">Endergebnis (Normalform):</p>
            <p className="text-lg font-mono text-green-900 dark:text-green-100">f(x) = 2x² - 12x + 10</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-2">Form: f(x) = ax² + bx + c</p>
          </div>
        </div>
      </div>
    </div>
  );
}
