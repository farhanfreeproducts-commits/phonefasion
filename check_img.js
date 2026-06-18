const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8');

const blocks = html.split('<div class="glass-card flex flex-col');
blocks.forEach((b, i) => {
  const titleMatch = b.match(/<h3[^>]*>([^<]+)<\/h3>/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title === 'Aura Gold Crystal Case' || title === 'Titanium Cyber Carbon Case') {
      const imgMatch = b.match(/<img[^>]*src="([^"]+)"/);
      console.log(title, 'img:', imgMatch ? imgMatch[1] : 'No img found');
    }
  }
});
