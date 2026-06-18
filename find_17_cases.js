const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const blocks = html.split('<div class="glass-card');
blocks.forEach(b => {
  if(b.includes('17 Pro / Pro Max')) {
    const img = b.match(/src="([^"]+)"/);
    const title = b.match(/<h3[^>]*>([^<]+)<\/h3>/);
    console.log((img ? img[1] : 'No image'), '->', (title ? title[1] : 'No title'));
  }
});
