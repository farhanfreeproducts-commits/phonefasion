const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// The file was auto-formatted by the IDE, so the tags are split across multiple lines.
// Replace the start tag <button ... id="view-company-doc">
html = html.replace(
  /<button([^>]*id="view-company-doc"[^>]*)>/g,
  '<a href="./Phone%20Fasion%20Company%20Doc.pdf" target="_blank"$1>'
);

// Replace the end tag for view-company-doc
// We need to match the next </button> after id="view-company-doc"
html = html.replace(/(id="view-company-doc"[^>]*>[\s\S]*?)<\/button>/g, '$1</a>');

// Replace the start tag <button ... id="view-annual-report">
html = html.replace(
  /<button([^>]*id="view-annual-report"[^>]*)>/g,
  '<a href="./phone%20fasion%20annual%20report%202026.pdf" target="_blank"$1>'
);

// Replace the end tag for view-annual-report
html = html.replace(/(id="view-annual-report"[^>]*>[\s\S]*?)<\/button>/g, '$1</a>');


fs.writeFileSync(filePath, html);
console.log("Successfully updated button to a tags!");
