const fs = require('fs');
let html = fs.readFileSync('vanilla_build/index.html', 'utf8');

function removeCardById(htmlStr, id) {
  const target = `id="${id}"`;
  const index = htmlStr.indexOf(target);
  if (index === -1) {
    console.log(`ID ${id} not found.`);
    return htmlStr;
  }

  let startIdx = htmlStr.lastIndexOf('<div', index);
  if (startIdx === -1) return htmlStr;

  let stack = 0;
  let pos = startIdx;
  let endIdx = -1;

  while (pos < htmlStr.length) {
    if (htmlStr.substring(pos, pos + 4) === '<div') {
      stack++;
      pos += 4;
    } else if (htmlStr.substring(pos, pos + 6) === '</div>') {
      stack--;
      if (stack === 0) {
        endIdx = pos + 6;
        break;
      }
      pos += 6;
    } else {
      pos++;
    }
  }

  if (endIdx !== -1) {
    console.log(`Removed ${id}`);
    return htmlStr.substring(0, startIdx) + htmlStr.substring(endIdx);
  }
  console.log(`Failed to find end for ${id}`);
  return htmlStr;
}

// Remove ALL iPhone 17 cards
html = removeCardById(html, 'product-iphone17-aura-gold');
html = removeCardById(html, 'product-iphone17-titanium-cyber');
html = removeCardById(html, 'product-iphone17-royal-leather');
html = removeCardById(html, 'product-iphone17-orange-silicone');
html = removeCardById(html, 'product-iphone17-black-magnetic');

// Also remove any remaining references to old broken images
html = html.replace(/\.\/aura_gold_case\.png[^"]*/g, './case_17pro_aura_gold.png');
html = html.replace(/\.\/titanium_cyber_case\.png[^"]*/g, './case_17pro_titanium_cyber.png');

fs.writeFileSync('vanilla_build/index.html', html);
console.log("All iPhone 17 cards removed!");
