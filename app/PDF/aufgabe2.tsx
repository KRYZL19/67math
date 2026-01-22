"use client";

import { Download, Printer, Eye, X } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Aufgabe2() {
  const [showSolution, setShowSolution] = useState(false);
  const [viewPdf, setViewPdf] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = (filename: string) => {
    const printWindow = window.open(`/pdfs/${filename}`, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-2xl sm:text-3xl">📊</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
            Aufgabenblatt 2
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Nullstellenform → Normalform, Scheitelpunkt, Eigenschaften
          </p>
        </div>
      </div>

      {/* Aufgaben PDF */}
      <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <span className="text-blue-500">📄</span>
          Aufgabenblatt
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleDownload('Aufgabenblatt2.pdf')}
            className="flex-1 min-w-[120px] bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          <button
            onClick={() => handlePrint('Aufgabenblatt2.pdf')}
            className="flex-1 min-w-[120px] bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Drucken
          </button>
        </div>
      </div>

      {/* Lösung Button */}
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all transform hover:scale-105 flex items-center justify-center gap-2 mb-4"
      >
        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
        {showSolution ? 'Lösung verbergen' : 'Lösung anzeigen'}
      </button>

      {/* Lösungen PDF */}
      {showSolution && (
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg border-2 border-green-300 dark:border-green-700 animate-fadeIn">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-green-600 dark:text-green-400">✅</span>
            Lösungsblatt
          </h4>
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={() => setViewPdf(true)}
              className="flex-1 min-w-[120px] bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Ansehen
            </button>
            <button
              onClick={() => handleDownload('Loesungsblatt2.pdf')}
              className="flex-1 min-w-[120px] bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={() => handlePrint('Loesungsblatt2.pdf')}
              className="flex-1 min-w-[120px] bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              Drucken
            </button>
          </div>
        </div>
      )}

      {/* PDF Viewer Modal */}
      {viewPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setViewPdf(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lösungsblatt 2</h3>
              <button onClick={() => setViewPdf(false)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 flex flex-col items-center">
              <Document
                file="/pdfs/Loesungsblatt2.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="flex items-center justify-center p-8"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}
              >
                <Page pageNumber={pageNumber} renderTextLayer={true} renderAnnotationLayer={true} className="max-w-full" width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 100, 800) : 800} />
              </Document>
              {numPages > 0 && (
                <div className="mt-4 flex items-center gap-4">
                  <button onClick={() => setPageNumber(Math.max(1, pageNumber - 1))} disabled={pageNumber <= 1} className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors">Zurück</button>
                  <span className="text-gray-900 dark:text-white">Seite {pageNumber} von {numPages}</span>
                  <button onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))} disabled={pageNumber >= numPages} className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors">Weiter</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
