const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8');
const blocks = html.split('<div class="glass-card flex flex-col');
blocks.forEach((b, i) => {
  const title = b.match(/<h3[^>]*>([^<]+)<\/h3>/);
  if(title) console.log(i, title[1]);
});
