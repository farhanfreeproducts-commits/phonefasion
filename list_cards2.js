const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8');

const blocks = html.split('glass-card');
console.log("Total blocks:", blocks.length - 1);
blocks.forEach((b, i) => {
  if (i === 0) return;
  const titleMatch = b.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const imgMatch = b.match(/<img[^>]*src="([^"]+)"/);
  if(titleMatch) {
    console.log(`Card ${i}: ${titleMatch[1]} | img: ${imgMatch ? imgMatch[1] : 'No img'}`);
  }
});
