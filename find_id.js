const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8');

const regex = /<div[^>]*id="[^"]*iphone17[^"]*"[^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Found:', match[0], 'at index', match.index);
}
