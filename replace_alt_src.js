const fs = require('fs');
let html = fs.readFileSync('vanilla_build/index.html', 'utf8');

let count = 0;
html = html.replace(/(alt="Aura Gold Crystal Case"[\s\S]*?src=")([^"]+)(")/g, (match, p1, p2, p3) => {
  count++;
  return p1 + "./aura_gold_case.png" + p3;
});

html = html.replace(/(alt="Titanium Cyber Carbon Case"[\s\S]*?src=")([^"]+)(")/g, (match, p1, p2, p3) => {
  count++;
  return p1 + "./titanium_cyber_case.png" + p3;
});

fs.writeFileSync('vanilla_build/index.html', html);
console.log("Replaced images! Count:", count);
