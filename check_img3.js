const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8');

const blocks = html.split('class="glass-card');
blocks.forEach((b, i) => {
  const titleMatch = b.match(/<h3[^>]*>([^<]+)<\/h3>/);
  const imgMatch = b.match(/<img[^>]*src="([^"]+)"/);
  if(titleMatch && (titleMatch[1].includes('Aura') || titleMatch[1].includes('Titanium'))) {
    console.log('Card ' + i + ': ' + titleMatch[1] + ' -> src=' + (imgMatch ? imgMatch[1] : 'none'));
  }
});
