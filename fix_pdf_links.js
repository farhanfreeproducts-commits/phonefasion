const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace view company doc button with anchor tag
html = html.replace(
  /<button class="btn-gold ([^"]*)" id="view-company-doc">([\s\S]*?View Document)<\/button>/g,
  '<a href="./Phone%20Fasion%20Company%20Doc.pdf" target="_blank" class="btn-gold $1" id="view-company-doc">$2</a>'
);

// Replace download company doc link href
html = html.replace(
  /href="\/Phone Fasion Company Doc.pdf"/g,
  'href="./Phone%20Fasion%20Company%20Doc.pdf"'
);

// Replace view annual report button with anchor tag
html = html.replace(
  /<button class="btn-gold ([^"]*)" id="view-annual-report">([\s\S]*?View Document)<\/button>/g,
  '<a href="./phone%20fasion%20annual%20report%202026.pdf" target="_blank" class="btn-gold $1" id="view-annual-report">$2</a>'
);

// Replace download annual report link href
html = html.replace(
  /href="\/phone fasion annual report 2026.pdf"/g,
  'href="./phone%20fasion%20annual%20report%202026.pdf"'
);

fs.writeFileSync(filePath, html);
console.log("Fixed PDF links!");
