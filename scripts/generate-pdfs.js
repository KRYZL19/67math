const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

// Stelle sicher, dass der PDFs Ordner existiert
const pdfsDir = path.join(__dirname, '../public/pdfs');
if (!fs.existsSync(pdfsDir)) {
  fs.mkdirSync(pdfsDir, { recursive: true });
}

// Logo als Base64 einlesen
const logoPath = path.join(__dirname, '../public/67.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUrl = 'data:image/png;base64,' + logoBase64;

// Aufgabenblatt 1 - Normalform gegeben
function createAufgabenblatt1() {
  const doc = new jsPDF();
  
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Aufgabenblatt 1 - Normalform', 105, 12, { align: 'center' });
  
  const startY = 20;
  const rowHeight = 12;
  
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.text('Normalform', 10, startY);
  doc.text('Nullstellen', 50, startY);
  doc.text('Scheitelpunkt', 80, startY);
  doc.text('Achsensym.', 120, startY);
  doc.text('Streckung', 150, startY);
  doc.text('Öffnung', 175, startY);
  doc.line(10, startY + 2, 200, startY + 2);
  
  const data = [
    'f(x) = x² - 6x + 8',
    'f(x) = 2x² + 4x - 6',
    'f(x) = -x² + 4x + 5',
    'f(x) = x² + 8x + 15',
    'f(x) = 3x² - 12x + 9',
    'f(x) = -2x² + 8x - 6',
    'f(x) = x² - 4',
    'f(x) = 0.5x² - 2x',
    'f(x) = 4x² - 16',
    'f(x) = -x² + 2x + 3',
  ];
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(7);
  
  let currentY = startY + rowHeight;
  
  data.forEach((func) => {
    doc.text(func, 10, currentY);
    currentY += rowHeight;
  });
  
  doc.addImage(logoDataUrl, 'PNG', 175, 275, 15, 15);
  doc.save(path.join(pdfsDir, 'Aufgabenblatt1.pdf'));
  console.log('✓ Aufgabenblatt1.pdf erstellt');
}

// Lösungsblatt 1
function createLoesungsblatt1() {
  const doc = new jsPDF();
  
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Lösungsblatt 1 - Normalform', 105, 12, { align: 'center' });
  
  const startY = 20;
  const rowHeight = 12;
  
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.text('Normalform', 10, startY);
  doc.text('Nullstellen', 50, startY);
  doc.text('Scheitelpunkt', 80, startY);
  doc.text('Achsensym.', 120, startY);
  doc.text('Streckung', 150, startY);
  doc.text('Öffnung', 175, startY);
  doc.line(10, startY + 2, 200, startY + 2);
  
  const data = [
    { func: 'f(x) = x² - 6x + 8', null: 'x₁=2, x₂=4', scheitel: 'S(3|-1)', achse: 'x = 3', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 2x² + 4x - 6', null: 'x₁=-3, x₂=1', scheitel: 'S(-1|-8)', achse: 'x = -1', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -x² + 4x + 5', null: 'x₁=-1, x₂=5', scheitel: 'S(2|9)', achse: 'x = 2', streckung: 'normal', oeffnung: 'unten' },
    { func: 'f(x) = x² + 8x + 15', null: 'x₁=-3, x₂=-5', scheitel: 'S(-4|-1)', achse: 'x = -4', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 3x² - 12x + 9', null: 'x₁=1, x₂=3', scheitel: 'S(2|-3)', achse: 'x = 2', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -2x² + 8x - 6', null: 'x₁=1, x₂=3', scheitel: 'S(2|2)', achse: 'x = 2', streckung: 'gestreckt', oeffnung: 'unten' },
    { func: 'f(x) = x² - 4', null: 'x₁=-2, x₂=2', scheitel: 'S(0|-4)', achse: 'x = 0', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 0.5x² - 2x', null: 'x₁=0, x₂=4', scheitel: 'S(2|-2)', achse: 'x = 2', streckung: 'gestaucht', oeffnung: 'oben' },
    { func: 'f(x) = 4x² - 16', null: 'x₁=-2, x₂=2', scheitel: 'S(0|-16)', achse: 'x = 0', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -x² + 2x + 3', null: 'x₁=-1, x₂=3', scheitel: 'S(1|4)', achse: 'x = 1', streckung: 'normal', oeffnung: 'unten' },
  ];
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(6);
  
  let currentY = startY + rowHeight;
  
  data.forEach((row) => {
    doc.text(row.func, 10, currentY);
    doc.text(row.null, 50, currentY);
    doc.text(row.scheitel, 80, currentY);
    doc.text(row.achse, 120, currentY);
    doc.text(row.streckung, 150, currentY);
    doc.text(row.oeffnung, 175, currentY);
    currentY += rowHeight;
  });
  
  doc.addImage(logoDataUrl, 'PNG', 175, 275, 15, 15);
  doc.save(path.join(pdfsDir, 'Loesungsblatt1.pdf'));
  console.log('✓ Loesungsblatt1.pdf erstellt');
}

// Aufgabenblatt 2 - Nullstellenform gegeben
function createAufgabenblatt2() {
  const doc = new jsPDF();
  
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Aufgabenblatt 2 - Nullstellenform', 105, 12, { align: 'center' });
  
  const startY = 20;
  const rowHeight = 12;
  
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.text('Nullstellenform', 10, startY);
  doc.text('Normalform', 50, startY);
  doc.text('Scheitelpunkt', 90, startY);
  doc.text('Achsensym.', 120, startY);
  doc.text('Streckung', 150, startY);
  doc.text('Öffnung', 175, startY);
  doc.line(10, startY + 2, 200, startY + 2);
  
  const data = [
    'f(x) = (x - 2)(x - 4)',
    'f(x) = 2(x + 3)(x - 1)',
    'f(x) = -(x + 1)(x - 5)',
    'f(x) = (x + 3)(x + 5)',
    'f(x) = 3(x - 1)(x - 3)',
    'f(x) = -2(x - 1)(x - 3)',
    'f(x) = (x - 2)(x + 2)',
    'f(x) = 0.5x(x - 4)',
    'f(x) = 4(x - 2)(x + 2)',
    'f(x) = -(x + 1)(x - 3)',
  ];
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(7);
  
  let currentY = startY + rowHeight;
  
  data.forEach((func) => {
    doc.text(func, 10, currentY);
    currentY += rowHeight;
  });
  
  doc.addImage(logoDataUrl, 'PNG', 175, 275, 15, 15);
  doc.save(path.join(pdfsDir, 'Aufgabenblatt2.pdf'));
  console.log('✓ Aufgabenblatt2.pdf erstellt');
}

// Lösungsblatt 2
function createLoesungsblatt2() {
  const doc = new jsPDF();
  
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Lösungsblatt 2 - Nullstellenform', 105, 12, { align: 'center' });
  
  const startY = 20;
  const rowHeight = 12;
  
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.text('Nullstellenform', 10, startY);
  doc.text('Normalform', 50, startY);
  doc.text('Scheitelpunkt', 90, startY);
  doc.text('Achsensym.', 120, startY);
  doc.text('Streckung', 150, startY);
  doc.text('Öffnung', 175, startY);
  doc.line(10, startY + 2, 200, startY + 2);
  
  const data = [
    { func: 'f(x) = (x - 2)(x - 4)', normal: 'f(x) = x² - 6x + 8', scheitel: 'S(3|-1)', achse: 'x = 3', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 2(x + 3)(x - 1)', normal: 'f(x) = 2x² + 4x - 6', scheitel: 'S(-1|-8)', achse: 'x = -1', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -(x + 1)(x - 5)', normal: 'f(x) = -x² + 4x + 5', scheitel: 'S(2|9)', achse: 'x = 2', streckung: 'normal', oeffnung: 'unten' },
    { func: 'f(x) = (x + 3)(x + 5)', normal: 'f(x) = x² + 8x + 15', scheitel: 'S(-4|-1)', achse: 'x = -4', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 3(x - 1)(x - 3)', normal: 'f(x) = 3x² - 12x + 9', scheitel: 'S(2|-3)', achse: 'x = 2', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -2(x - 1)(x - 3)', normal: 'f(x) = -2x² + 8x - 6', scheitel: 'S(2|2)', achse: 'x = 2', streckung: 'gestreckt', oeffnung: 'unten' },
    { func: 'f(x) = (x - 2)(x + 2)', normal: 'f(x) = x² - 4', scheitel: 'S(0|-4)', achse: 'x = 0', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 0.5x(x - 4)', normal: 'f(x) = 0.5x² - 2x', scheitel: 'S(2|-2)', achse: 'x = 2', streckung: 'gestaucht', oeffnung: 'oben' },
    { func: 'f(x) = 4(x - 2)(x + 2)', normal: 'f(x) = 4x² - 16', scheitel: 'S(0|-16)', achse: 'x = 0', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -(x + 1)(x - 3)', normal: 'f(x) = -x² + 2x + 3', scheitel: 'S(1|4)', achse: 'x = 1', streckung: 'normal', oeffnung: 'unten' },
  ];
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(6);
  
  let currentY = startY + rowHeight;
  
  data.forEach((row) => {
    doc.text(row.func, 10, currentY);
    doc.text(row.normal, 50, currentY);
    doc.text(row.scheitel, 90, currentY);
    doc.text(row.achse, 120, currentY);
    doc.text(row.streckung, 150, currentY);
    doc.text(row.oeffnung, 175, currentY);
    currentY += rowHeight;
  });
  
  doc.addImage(logoDataUrl, 'PNG', 175, 275, 15, 15);
  doc.save(path.join(pdfsDir, 'Loesungsblatt2.pdf'));
  console.log('✓ Loesungsblatt2.pdf erstellt');
}

// Aufgabenblatt 3 - Scheitelpunktform gegeben
function createAufgabenblatt3() {
  const doc = new jsPDF();
  
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Aufgabenblatt 3 - Scheitelpunktform', 105, 12, { align: 'center' });
  
  const startY = 20;
  const rowHeight = 12;
  
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.text('Scheitelpunktform', 10, startY);
  doc.text('Normalform', 55, startY);
  doc.text('Nullstellen', 90, startY);
  doc.text('Achsensym.', 120, startY);
  doc.text('Streckung', 150, startY);
  doc.text('Öffnung', 175, startY);
  doc.line(10, startY + 2, 200, startY + 2);
  
  const data = [
    'f(x) = (x - 3)² - 1',
    'f(x) = 2(x + 1)² - 8',
    'f(x) = -(x - 2)² + 9',
    'f(x) = (x + 4)² - 1',
    'f(x) = 3(x - 2)² - 3',
    'f(x) = -2(x - 2)² + 2',
    'f(x) = x² - 4',
    'f(x) = 0.5(x - 2)² - 2',
    'f(x) = 4x² - 16',
    'f(x) = -(x - 1)² + 4',
  ];
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(7);
  
  let currentY = startY + rowHeight;
  
  data.forEach((func) => {
    doc.text(func, 10, currentY);
    currentY += rowHeight;
  });
  
  doc.addImage(logoDataUrl, 'PNG', 175, 275, 15, 15);
  doc.save(path.join(pdfsDir, 'Aufgabenblatt3.pdf'));
  console.log('✓ Aufgabenblatt3.pdf erstellt');
}

// Lösungsblatt 3
function createLoesungsblatt3() {
  const doc = new jsPDF();
  
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Lösungsblatt 3 - Scheitelpunktform', 105, 12, { align: 'center' });
  
  const startY = 20;
  const rowHeight = 12;
  
  doc.setFontSize(7);
  doc.setFont(undefined, 'bold');
  doc.text('Scheitelpunktform', 10, startY);
  doc.text('Normalform', 55, startY);
  doc.text('Nullstellen', 90, startY);
  doc.text('Achsensym.', 120, startY);
  doc.text('Streckung', 150, startY);
  doc.text('Öffnung', 175, startY);
  doc.line(10, startY + 2, 200, startY + 2);
  
  const data = [
    { func: 'f(x) = (x - 3)² - 1', normal: 'f(x) = x² - 6x + 8', null: 'x₁=2, x₂=4', achse: 'x = 3', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 2(x + 1)² - 8', normal: 'f(x) = 2x² + 4x - 6', null: 'x₁=-3, x₂=1', achse: 'x = -1', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -(x - 2)² + 9', normal: 'f(x) = -x² + 4x + 5', null: 'x₁=-1, x₂=5', achse: 'x = 2', streckung: 'normal', oeffnung: 'unten' },
    { func: 'f(x) = (x + 4)² - 1', normal: 'f(x) = x² + 8x + 15', null: 'x₁=-3, x₂=-5', achse: 'x = -4', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 3(x - 2)² - 3', normal: 'f(x) = 3x² - 12x + 9', null: 'x₁=1, x₂=3', achse: 'x = 2', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -2(x - 2)² + 2', normal: 'f(x) = -2x² + 8x - 6', null: 'x₁=1, x₂=3', achse: 'x = 2', streckung: 'gestreckt', oeffnung: 'unten' },
    { func: 'f(x) = x² - 4', normal: 'f(x) = x² - 4', null: 'x₁=-2, x₂=2', achse: 'x = 0', streckung: 'normal', oeffnung: 'oben' },
    { func: 'f(x) = 0.5(x - 2)² - 2', normal: 'f(x) = 0.5x² - 2x', null: 'x₁=0, x₂=4', achse: 'x = 2', streckung: 'gestaucht', oeffnung: 'oben' },
    { func: 'f(x) = 4x² - 16', normal: 'f(x) = 4x² - 16', null: 'x₁=-2, x₂=2', achse: 'x = 0', streckung: 'gestreckt', oeffnung: 'oben' },
    { func: 'f(x) = -(x - 1)² + 4', normal: 'f(x) = -x² + 2x + 3', null: 'x₁=-1, x₂=3', achse: 'x = 1', streckung: 'normal', oeffnung: 'unten' },
  ];
  
  doc.setFont(undefined, 'normal');
  doc.setFontSize(6);
  
  let currentY = startY + rowHeight;
  
  data.forEach((row) => {
    doc.text(row.func, 10, currentY);
    doc.text(row.normal, 55, currentY);
    doc.text(row.null, 90, currentY);
    doc.text(row.achse, 120, currentY);
    doc.text(row.streckung, 150, currentY);
    doc.text(row.oeffnung, 175, currentY);
    currentY += rowHeight;
  });
  
  doc.addImage(logoDataUrl, 'PNG', 175, 275, 15, 15);
  doc.save(path.join(pdfsDir, 'Loesungsblatt3.pdf'));
  console.log('✓ Loesungsblatt3.pdf erstellt');
}

// Alle PDFs generieren
console.log('📄 Generiere PDFs...\n');
createAufgabenblatt1();
createLoesungsblatt1();
createAufgabenblatt2();
createLoesungsblatt2();
createAufgabenblatt3();
createLoesungsblatt3();
console.log('\n✅ Alle 6 PDFs wurden erfolgreich erstellt!');
console.log('📁 Speicherort: public/pdfs/');
