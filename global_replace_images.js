const fs = require('fs');
let html = fs.readFileSync('vanilla_build/index.html', 'utf8');

// Globally replace the old image filenames with the new AI generated ones
html = html.replace(/case_iphone_17_gold_crystal\.png/g, 'aura_gold_case.png');
html = html.replace(/case_iphone_17_promax\.png/g, 'titanium_cyber_case.png');
html = html.replace(/case_carbon_fiber\.png/g, 'titanium_cyber_case.png'); // Just in case it was using this one

fs.writeFileSync('vanilla_build/index.html', html);
console.log("Global replace completed!");
