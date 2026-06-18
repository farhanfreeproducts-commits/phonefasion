const fs = require('fs');
let html = fs.readFileSync('vanilla_build/index.html', 'utf8');

function removeCardById(htmlStr, id) {
  const target = `id="${id}"`;
  const index = htmlStr.indexOf(target);
  if (index === -1) {
    console.log(`ID ${id} not found.`);
    return htmlStr;
  }

  // Find the start of the <div that contains this ID
  let startIdx = htmlStr.lastIndexOf('<div', index);
  if (startIdx === -1) {
    console.log(`Could not find start of div for ${id}`);
    return htmlStr;
  }

  // Find the matching closing </div>
  let stack = 0;
  let pos = startIdx;
  let endIdx = -1;

  while (pos < htmlStr.length) {
    if (htmlStr.substring(pos, pos + 4) === '<div') {
      stack++;
      pos += 4;
    } else if (htmlStr.substring(pos, pos + 6) === '</div') {
      stack--;
      if (stack === 0) {
        endIdx = pos + 6; // Include the closing </div>
        break;
      }
      pos += 6;
    } else {
      pos++;
    }
  }

  if (endIdx !== -1) {
    console.log(`Removing ${id} from index ${startIdx} to ${endIdx}`);
    return htmlStr.substring(0, startIdx) + htmlStr.substring(endIdx);
  } else {
    console.log(`Could not find matching closing div for ${id}`);
    return htmlStr;
  }
}

html = removeCardById(html, 'product-iphone17-titanium-carbon');
html = removeCardById(html, 'product-iphone17-gold-crystal');

fs.writeFileSync('vanilla_build/index.html', html);
console.log("Cards removed successfully!");
