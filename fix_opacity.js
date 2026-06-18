const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace opacity: 0 and transform: translateY/translateZ and similar Framer Motion styles
html = html.replace(/opacity:\s*0[;]?/g, 'opacity: 1;');
html = html.replace(/transform:\s*translate[^;"]+[;]?/g, 'transform: none;');
html = html.replace(/translateY\([^)]+\)/g, '');
html = html.replace(/translateZ\([^)]+\)/g, '');

fs.writeFileSync(filePath, html);
console.log("Fixed opacity and transforms!");
