const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Remove all srcset attributes
html = html.replace(/\s*srcset="[^"]*"/g, '');

// Replace Next.js image src with local paths
html = html.replace(/src="\/_next\/image\?url=([^&"]+)[^"]*"/g, (match, urlParam) => {
  // Decode the URL (e.g. %2Fcase.png -> /case.png)
  let decoded = decodeURIComponent(urlParam);
  // Ensure it starts with ./
  if (decoded.startsWith('/')) {
    decoded = '.' + decoded;
  }
  return `src="${decoded}"`;
});

fs.writeFileSync(filePath, html);
console.log("Fixed image paths!");
