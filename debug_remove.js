const fs = require('fs');
let html = fs.readFileSync('vanilla_build/index.html', 'utf8');

function debugRemove(htmlStr, id) {
  const target = `id="${id}"`;
  const index = htmlStr.indexOf(target);
  let startIdx = htmlStr.lastIndexOf('<div', index);
  console.log('startIdx:', startIdx);
  let stack = 0;
  let pos = startIdx;
  while (pos < htmlStr.length) {
    const next4 = htmlStr.substring(pos, pos + 4);
    const next5 = htmlStr.substring(pos, pos + 5);
    const next6 = htmlStr.substring(pos, pos + 6);
    
    // We should check for boundaries. E.g., <div followed by space or >
    if (next4 === '<div' && (htmlStr[pos+4] === ' ' || htmlStr[pos+4] === '>')) {
      stack++;
      pos += 4;
    } else if (next6 === '</div' && (htmlStr[pos+5] === '>' || htmlStr[pos+5] === ' ')) {
      stack--;
      if (stack === 0) {
        console.log('Found end at:', pos + 6);
        return;
      }
      pos += 6;
    } else {
      pos++;
    }
  }
  console.log('End not found. Final stack:', stack);
}

debugRemove(html, 'product-iphone17-titanium-carbon');
