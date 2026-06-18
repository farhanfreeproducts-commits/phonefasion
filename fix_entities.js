const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace the HTML entity for single quotes inside style attributes (and elsewhere)
html = html.replace(/&#x27;/g, "'");
html = html.replace(/&quot;/g, '"');

fs.writeFileSync(filePath, html);
console.log("Fixed HTML entities for quotes!");
