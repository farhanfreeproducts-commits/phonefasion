const fs = require('fs');
let html = fs.readFileSync('vanilla_build/index.html', 'utf8');

// Add cache-busting query string
html = html.replace(/src="\.\/aura_gold_case\.png(\?v=\d+)?"/g, 'src="./aura_gold_case.png?v=' + Date.now() + '"');
html = html.replace(/src="\.\/titanium_cyber_case\.png(\?v=\d+)?"/g, 'src="./titanium_cyber_case.png?v=' + Date.now() + '"');

fs.writeFileSync('vanilla_build/index.html', html);
console.log("Cache-busting added!");
