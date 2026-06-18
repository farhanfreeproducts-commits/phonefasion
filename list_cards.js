const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8');

const blocks = html.split('<div class="glass-card flex flex-col group relative"');
console.log("Total cards:", blocks.length - 1);
blocks.forEach((b, i) => {
  if (i === 0) return;
  const titleMatch = b.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const imgMatch = b.match(/<img[^>]*src="([^"]+)"/);
  console.log(`Card ${i}: ${titleMatch ? titleMatch[1] : 'No Title'} | img: ${imgMatch ? imgMatch[1] : 'No img'}`);
});
