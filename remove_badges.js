const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

html = html.replace(/<div class="trust-badge"[^>]*>.*?Free shipping.*?<\/div>/gs, '');
html = html.replace(/<div class="trust-badge"[^>]*>.*?30-day hassle-free returns.*?<\/div>/gs, '');

fs.writeFileSync(filePath, html);
console.log("Removed the two trust badges!");
