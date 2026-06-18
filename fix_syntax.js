const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Fix double semicolons in styles
html = html.replace(/;;/g, ';');

// Fix empty transform statements or broken styles
html = html.replace(/transform:\s*none;\s*;/g, 'transform: none;');
html = html.replace(/style="([^"]*?);\s*"/g, 'style="$1"');

fs.writeFileSync(filePath, html);
console.log("Fixed HTML style syntax!");
