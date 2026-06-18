const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8');

const regex = /<img[^>]*src="([^"]+)"[^>]*>[\s\S]{0,500}Aura Gold Crystal Case/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Aura src:', match[1]);
}

const regex2 = /<img[^>]*src="([^"]+)"[^>]*>[\s\S]{0,500}Titanium Cyber Carbon Case/g;
while ((match = regex2.exec(html)) !== null) {
  console.log('Titanium src:', match[1]);
}
