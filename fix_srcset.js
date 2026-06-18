const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Remove all srcset attributes (case insensitive for React's srcSet)
html = html.replace(/\s*srcSet="[^"]*"/ig, '');

fs.writeFileSync(filePath, html);
console.log("Removed all srcSet attributes!");
