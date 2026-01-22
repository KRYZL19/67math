"use client";

import React, { useState } from 'react';
import BackButton from '../components/BackButton';

export default function ParabelnToGo() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'vorzeichen',
      title: 'Vorzeichen vor x² (a-Wert)',
      icon: '↕️',
      content: [
        {
          label: 'a > 0 (positiv)',
          description: 'Parabel nach oben geöffnet',
          detail: 'Scheitelpunkt ist ein MINIMUM',
          example: 'f(x) = 2x² oder f(x) = x² + 3',
          color: 'bg-green-50 border-green-300'
        },
        {
          label: 'a < 0 (negativ)',
          description: 'Parabel nach unten geöffnet',
          detail: 'Scheitelpunkt ist ein MAXIMUM',
          example: 'f(x) = -x² oder f(x) = -3x² + 5',
          color: 'bg-red-50 border-red-300'
        }
      ]
    },
    {
      id: 'streckung',
      title: 'Streckung / Stauchung',
      icon: '↔️',
      content: [
        {
          label: '|a| > 1',
          description: 'Parabel ist GESTRECKT (schmaler)',
          detail: 'Je größer |a|, desto steiler',
          example: 'f(x) = 3x² ist gestreckter als f(x) = x²',
          color: 'bg-blue-50 border-blue-300'
        },
        {
          label: '0 < |a| < 1',
          description: 'Parabel ist GESTAUCHT (breiter)',
          detail: 'Je kleiner |a|, desto flacher',
          example: 'f(x) = 0.5x² ist gestaucht',
          color: 'bg-purple-50 border-purple-300'
        },
        {
          label: '|a| = 1',
          description: 'Normalparabel',
          detail: 'Standard-Form ohne Streckung/Stauchung',
          example: 'f(x) = x² oder f(x) = -x²',
          color: 'bg-gray-50 border-gray-300'
        }
      ]
    },
    {
      id: 'symmetrie',
      title: 'Symmetrie',
      icon: '⚖️',
      content: [
        {
          label: 'Allgemeine Regel',
          description: 'JEDE Parabel ist symmetrisch',
          detail: 'Symmetrieachse: x = xs (x-Wert des Scheitelpunkts)',
          example: 'Scheitelpunkt S(2|3) → Symmetrieachse: x = 2',
          color: 'bg-yellow-50 border-yellow-300'
        },
        {
          label: 'd = 0 (kein linearer Term)',
          description: 'Symmetrisch zur y-Achse',
          detail: 'Scheitelpunkt liegt auf der y-Achse',
          example: 'f(x) = x² + 5 → S(0|5)',
          color: 'bg-indigo-50 border-indigo-300'
        },
        {
          label: 'd ≠ 0',
          description: 'Symmetrisch zu x = xs',
          detail: 'Scheitelpunkt verschoben, aber immer symmetrisch',
          example: 'f(x) = (x-3)² → Symmetrieachse: x = 3',
          color: 'bg-pink-50 border-pink-300'
        }
      ]
    },
    {
      id: 'formen',
      title: 'Parabel-Formen',
      icon: '📐',
      content: [
        {
          label: 'Normalform',
          description: 'f(x) = ax² + bx + c',
          detail: 'c ist der y-Achsenabschnitt',
          example: 'f(x) = 2x² - 4x + 1',
          color: 'bg-teal-50 border-teal-300'
        },
        {
          label: 'Scheitelpunktform',
          description: 'f(x) = a(x - d)² + e',
          detail: 'Scheitelpunkt S(d|e) direkt ablesbar',
          example: 'f(x) = 3(x - 2)² + 5 → S(2|5)',
          color: 'bg-orange-50 border-orange-300'
        },
        {
          label: 'Faktorisierte Form',
          description: 'f(x) = a(x - x₁)(x - x₂)',
          detail: 'Nullstellen x₁ und x₂ direkt ablesbar',
          example: 'f(x) = 2(x - 1)(x - 3) → x₁=1, x₂=3',
          color: 'bg-lime-50 border-lime-300'
        }
      ]
    },
    {
      id: 'scheitelpunkt',
      title: 'Scheitelpunkt Eigenschaften',
      icon: '🎯',
      content: [
        {
          label: 'Definition',
          description: 'Höchster oder tiefster Punkt der Parabel',
          detail: 'S(xs | ys) - Wendepunkt der Funktion',
          example: 'Bei f(x) = (x-2)² + 3 ist S(2|3)',
          color: 'bg-rose-50 border-rose-300'
        },
        {
          label: 'Bei a > 0',
          description: 'Scheitelpunkt = MINIMUM',
          detail: 'Kleinster y-Wert der Funktion',
          example: 'f(x) = x² hat Minimum bei S(0|0)',
          color: 'bg-emerald-50 border-emerald-300'
        },
        {
          label: 'Bei a < 0',
          description: 'Scheitelpunkt = MAXIMUM',
          detail: 'Größter y-Wert der Funktion',
          example: 'f(x) = -x² + 4 hat Maximum bei S(0|4)',
          color: 'bg-amber-50 border-amber-300'
        }
      ]
    },
    {
      id: 'verschiebung',
      title: 'Verschiebungen',
      icon: '↗️',
      content: [
        {
          label: 'Vertikale Verschiebung (+e)',
          description: 'f(x) = ax² + e',
          detail: 'Parabel wird um e nach oben/unten verschoben',
          example: 'f(x) = x² + 3 → 3 Einheiten nach oben',
          color: 'bg-cyan-50 border-cyan-300'
        },
        {
          label: 'Horizontale Verschiebung (+d)',
          description: 'f(x) = a(x - d)²',
          detail: 'Parabel wird um d nach rechts/links verschoben',
          example: 'f(x) = (x - 2)² → 2 Einheiten nach rechts',
          color: 'bg-violet-50 border-violet-300'
        },
        {
          label: 'Beide Verschiebungen',
          description: 'f(x) = a(x - d)² + e',
          detail: 'Scheitelpunkt bei S(d|e)',
          example: 'f(x) = 2(x - 3)² + 1 → S(3|1)',
          color: 'bg-fuchsia-50 border-fuchsia-300'
        }
      ]
    },
    {
      id: 'nullstellen',
      title: 'Nullstellen & Diskriminante',
      icon: '✖️',
      content: [
        {
          label: 'D > 0',
          description: 'Zwei verschiedene Nullstellen',
          detail: 'Parabel schneidet x-Achse zweimal',
          example: 'f(x) = x² - 4 → x₁ = -2, x₂ = 2',
          color: 'bg-sky-50 border-sky-300'
        },
        {
          label: 'D = 0',
          description: 'Eine doppelte Nullstelle',
          detail: 'Parabel berührt x-Achse (Scheitelpunkt auf x-Achse)',
          example: 'f(x) = (x - 3)² → x = 3',
          color: 'bg-slate-50 border-slate-300'
        },
        {
          label: 'D < 0',
          description: 'Keine Nullstellen',
          detail: 'Parabel schneidet x-Achse nicht',
          example: 'f(x) = x² + 4 → keine Nullstellen',
          color: 'bg-neutral-50 border-neutral-300'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <BackButton color="pink" />
          
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-purple-300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              📚 Parabeln To Go
            </h1>
            <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg">
              Alle wichtigen Eigenschaften und Regeln für Parabeln auf einen Blick
            </p>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg transition-all transform hover:scale-105 ${
                activeSection === section.id
                  ? 'bg-purple-600 text-white ring-2 sm:ring-4 ring-purple-300'
                  : 'bg-white text-gray-800 hover:shadow-xl'
              }`}
            >
              <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{section.icon}</div>
              <div className="text-xs sm:text-sm font-semibold text-center">{section.title}</div>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`transition-all duration-300 ${
                activeSection === null || activeSection === section.id
                  ? 'opacity-100'
                  : 'opacity-40'
              }`}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 border border-gray-200 sm:border-2">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl">{section.icon}</span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{section.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {section.content.map((item, index) => (
                    <div
                      key={index}
                      className={`p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border sm:border-2 ${item.color} transition-all hover:shadow-lg hover:scale-105`}
                    >
                      <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-gray-800">
                        {item.label}
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2">
                        {item.description}
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                        {item.detail}
                      </p>
                      <div className="bg-white bg-opacity-70 rounded-md sm:rounded-lg p-2 sm:p-3 mt-1 sm:mt-2">
                        <p className="text-xs text-gray-500 font-mono break-words">
                          {item.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Formulas Summary */}
        <div className="mt-4 sm:mt-6 md:mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-white drop-shadow-lg">📋 Schnellübersicht Formeln</h2>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg">
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-purple-700">Scheitelpunkt finden:</h3>
              <p className="font-mono text-xs sm:text-sm mb-1 sm:mb-2 text-gray-800 bg-purple-50 p-2 rounded">xs = (x₁ + x₂) / 2</p>
              <p className="font-mono text-xs sm:text-sm text-gray-800 bg-purple-50 p-2 rounded">ys = f(xs)</p>
              <p className="text-xs text-gray-600 mt-2 italic">Scheitelpunkt liegt in der Mitte der Nullstellen</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg">
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-pink-700">Nullstellen (abc-Formel):</h3>
              <p className="font-mono text-xs sm:text-sm text-gray-800 bg-pink-50 p-2 rounded">x₁,₂ = (-b ± √(b² - 4ac)) / (2a)</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg">
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-purple-700">Diskriminante:</h3>
              <p className="font-mono text-xs sm:text-sm text-gray-800 bg-purple-50 p-2 rounded">D = b² - 4ac</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg">
              <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-pink-700">Umformung:</h3>
              <p className="font-mono text-xs sm:text-sm mb-1 text-gray-800 bg-pink-50 p-2 rounded">Normal → Scheitel:</p>
              <p className="font-mono text-xs text-gray-700 bg-pink-50 p-2 rounded mt-1">Quadratische Ergänzung</p>
            </div>
          </div>
        </div>

        {/* Memory Tips */}
        <div className="mt-4 sm:mt-6 md:mt-8 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border sm:border-2 border-yellow-300">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center text-gray-800">💡 Merkhilfen</h2>
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">😊</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Positives a → Lächeln</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Nach oben geöffnet = glückliche Parabel</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">☹️</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Negatives a → Traurig</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Nach unten geöffnet = traurige Parabel</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">⚖️</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Immer symmetrisch!</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Scheitelpunkt = Symmetrieachse</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">🎯</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Scheitelpunktform am besten!</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">S(d|e) direkt ablesen</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">➕</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">c = y-Achsenabschnitt</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Bei x=0 schneidet die Parabel die y-Achse bei c</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">📏</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">|a| &gt; 1 = schmaler</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Gestreckt = steiler nach oben/unten</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">📐</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">|a| &lt; 1 = breiter</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Gestaucht = flacher Verlauf</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">✖️</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Nullstellen mit (x₁ + x₂) / 2</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Scheitelpunkt liegt in der Mitte der Nullstellen</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">🔄</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Binomische Formeln wichtig!</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">(a±b)² = a² ± 2ab + b² zum Umformen nutzen</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">⬆️</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">+e verschiebt nach oben</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Vertikale Verschiebung: f(x) = x² + 3 → 3 nach oben</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">➡️</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">-d verschiebt nach rechts</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Horizontale Verschiebung: (x-2)² → 2 nach rechts</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">🎲</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Diskriminante D</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">D = b² - 4ac zeigt Anzahl der Nullstellen</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">💯</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Immer Probe machen!</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Setze xs in f(x) ein → kontrolliere ys</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl flex-shrink-0">📝</span>
              <div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Quadratische Ergänzung</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">Nimm (b/2)², addiere und subtrahiere in Klammer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
