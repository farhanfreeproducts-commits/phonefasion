const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace the image src for Aura Gold Crystal Case in the Categories section
html = html.replace(/(<img[^>]*src=")([^"]+)("[^>]*>[\s\S]*?<h3[^>]*>Aura Gold Crystal Case<\/h3>)/g, '$1./aura_gold_case.png$3');

// Replace the image src for Titanium Cyber Carbon Case in the Categories section
html = html.replace(/(<img[^>]*src=")([^"]+)("[^>]*>[\s\S]*?<h3[^>]*>Titanium Cyber Carbon Case<\/h3>)/g, '$1./titanium_cyber_case.png$3');

fs.writeFileSync(filePath, html);
console.log("Fixed image paths for the specific cards!");
