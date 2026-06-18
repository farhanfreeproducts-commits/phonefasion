const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace text-white
  content = content.replace(/text-white/g, 'text-[var(--text-primary)]');

  // Replace colors
  content = content.replace(/#050810/gi, 'var(--dark-bg)');
  content = content.replace(/#080C18/gi, 'var(--dark-bg)');
  content = content.replace(/#0D1120/gi, 'var(--dark-card)');
  content = content.replace(/#151B2E/gi, 'var(--dark-bg)');
  content = content.replace(/#1A2040/gi, 'var(--dark-border)');
  
  // Replace dark RGBAs with light ones (approximate)
  content = content.replace(/rgba\(5,8,16,/g, 'rgba(255,255,255,');
  content = content.replace(/rgba\(5, 8, 16,/g, 'rgba(255, 255, 255,');
  content = content.replace(/rgba\(13,17,32,/g, 'rgba(255,255,255,');
  content = content.replace(/rgba\(13, 17, 32,/g, 'rgba(255, 255, 255,');
  
  fs.writeFileSync(filePath, content);
}
console.log('Replaced colors successfully.');
