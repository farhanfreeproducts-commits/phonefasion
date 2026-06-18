const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(outPath, 'utf8');

// Replace /_next/image with direct paths
html = html.replace(/src="\/_next\/image\?url=%2F([^&]+)[^"]*"/g, 'src="./$1"');

// Replace srcSet pointing to /_next/image
html = html.replace(/srcset="[^"]*"/g, ''); // Just remove srcset to keep it simple, it's vanilla HTML

// Replace other absolute paths (like /favicon.ico)
html = html.replace(/href="\/favicon.ico"/g, 'href="./favicon.ico"');

// Ensure script/css links are relative
html = html.replace(/href="css\/style.css"/g, 'href="./css/style.css"');
html = html.replace(/src="js\/script.js"/g, 'src="./js/script.js"');

fs.writeFileSync(outPath, html);
console.log('Fixed image and asset paths.');
