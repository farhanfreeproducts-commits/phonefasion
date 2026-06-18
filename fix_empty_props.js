const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Fix empty CSS properties like "transform: ;" or "transform:  ;"
html = html.replace(/transform:\s*;/g, '');
html = html.replace(/transform:\s*"/g, '"');

// Fix any double spaces or dangling colons
html = html.replace(/;\s*;/g, ';');
html = html.replace(/style="\s*;/g, 'style="');

fs.writeFileSync(filePath, html);
console.log("Fixed empty transform properties!");
