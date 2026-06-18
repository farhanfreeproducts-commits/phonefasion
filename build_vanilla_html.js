const fs = require('fs');
const path = require('path');

const scrapedPath = path.join(__dirname, 'vanilla_build', 'scraped.html');
const outPath = path.join(__dirname, 'vanilla_build', 'index.html');

let html = fs.readFileSync(scrapedPath, 'utf8');

// 1. Remove Next.js script tags
html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
// Also remove next/head or other next-specific things if they exist, mostly script tags are enough.
html = html.replace(/<next-route-announcer[^>]*>.*?<\/next-route-announcer>/gi, '');

// 2. Add Tailwind CDN and local style/script in the <head> or before </body>
const headInject = `
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="css/style.css">
`;
html = html.replace('</head>', `${headInject}\n</head>`);

const bodyInject = `
  <script src="js/script.js"></script>
`;
html = html.replace('</body>', `${bodyInject}\n</body>`);

// Fix any Next.js inline styles that might conflict or be weird
html = html.replace(/style="[^"]*"/g, (match) => {
    // If it's the next-route-announcer, remove it
    if(match.includes('position: absolute') && match.includes('width: 1px')) return '';
    return match;
});

// Since we replaced #050810 with var(--dark-bg) etc in the tsx files, they will be in the HTML too.
// Wait, the scraped HTML was fetched from the running server, did the server pick up our tsx changes?
// The server might have picked them up if it hot-reloaded! We should check if the HTML has var(--dark-bg).

fs.writeFileSync(outPath, html);
console.log('Successfully created vanilla index.html');
