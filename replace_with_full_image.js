const fs = require('fs');
let html = fs.readFileSync('vanilla_build/index.html', 'utf8');

// The user wants the FULL MOCKUPS to be displayed instead of the HTML cards.
// We will replace the entire product-card HTML for those two specific products with just the image.

const replaceWithImage = (htmlStr, title, imgSrc) => {
  // Find the start of the product card that contains the title
  const blocks = htmlStr.split('class="product-card');
  for (let i = 1; i < blocks.length; i++) {
    if (blocks[i].includes(title)) {
      // Find where this card ends (before the next class="product-card" or end of container)
      // Since we split by product-card, blocks[i] contains the rest of the file until the next product-card!
      // Wait, no, it contains everything until the next 'class="product-card'.
      // So if we replace the inside of the card with just the image, we must KEEP the closing tags that were at the end of blocks[i] if it's the last block!
      // It's safer to use regex to find the exact HTML block.
    }
  }
};

// Let's use regex to match the card container.
// A card starts with `<div class="product-card` and ends with the matching `</div>`.
// Since we can't easily parse nested divs with regex, let's just do a simpler replacement.
// Let's just hide everything inside the card EXCEPT the image container!

html = html.replace(/(<div[^>]*class="[^"]*product-card[^>]*>[\s\S]*?)<div class="p-4 flex flex-col flex-1">([\s\S]*?)<\/h3>([\s\S]*?)<\/div>([\s\S]*?)<\/div>/g, (match, p1, p2, p3, p4) => {
  if (match.includes('Aura Gold Crystal Case') || match.includes('Titanium Cyber Carbon Case')) {
    // For these cards, we want to REMOVE the entire text block!
    // But we need to keep the closing </div> of the card.
    // Actually, if we just remove the "p-4 flex flex-col flex-1" div, the card will just be the image!
  }
  return match;
});

// Better yet, just use DOM parser!
const { JSDOM } = require('jsdom');
const dom = new JSDOM(html);
const document = dom.window.document;

const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
  if (card.innerHTML.includes('Aura Gold Crystal Case')) {
    card.innerHTML = `<img src="./aura_gold_case.png?v=${Date.now()}" style="width:100%; height:auto; border-radius: 1rem;" />`;
    card.style.background = 'transparent';
    card.style.border = 'none';
    card.style.boxShadow = 'none';
  }
  if (card.innerHTML.includes('Titanium Cyber Carbon Case')) {
    card.innerHTML = `<img src="./titanium_cyber_case.png?v=${Date.now()}" style="width:100%; height:auto; border-radius: 1rem;" />`;
    card.style.background = 'transparent';
    card.style.border = 'none';
    card.style.boxShadow = 'none';
  }
});

fs.writeFileSync('vanilla_build/index.html', dom.serialize());
console.log("Cards replaced with full images!");
