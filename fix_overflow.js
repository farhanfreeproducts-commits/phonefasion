const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// The hero section content wrapper: <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
// Let's add a top padding to it to prevent overflow
html = html.replace(
  /<div class="relative z-10 max-w-7xl mx-auto px-6 text-center">/g, 
  '<div class="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32 pb-16">'
);

// We also need to fix the logo click
html = html.replace(/id="nav-logo"/g, 'id="nav-home"');

fs.writeFileSync(filePath, html);
console.log("Fixed overflow padding and logo link");
