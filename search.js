const fs = require('fs');
const html = fs.readFileSync('vanilla_build/index.html', 'utf8').split('\n');
html.forEach((line, i) => {
  if(line.includes('17 Pro')) {
    console.log(`--- Line ${i} ---`);
    for(let j = Math.max(0, i-20); j <= Math.min(html.length-1, i+5); j++) {
      console.log(html[j]);
    }
  }
});
