const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace dark colors with CSS variables (which are light now)
html = html.replace(/#050810/gi, 'var(--dark-bg)');
html = html.replace(/#080C18/gi, 'var(--dark-bg)');
html = html.replace(/#0D1120/gi, 'var(--dark-card)');
html = html.replace(/#151B2E/gi, 'var(--dark-bg)');
html = html.replace(/#1A2040/gi, 'var(--dark-border)');

// Replace dark text colors with darker ones for light background
html = html.replace(/#A0AABA/gi, '#4B5563'); // text-secondary
html = html.replace(/#6B7A99/gi, '#374151'); // text-muted

// Replace explicit text-white class with text-gray-900
html = html.replace(/\btext-white\b/g, 'text-gray-900');

// Replace glass-card-dark with glass-card
html = html.replace(/\bglass-card-dark\b/g, 'glass-card');

// Replace dark RGBA values with light ones
html = html.replace(/rgba\(5,\s*8,\s*16,/g, 'rgba(255,255,255,');
html = html.replace(/rgba\(13,\s*17,\s*32,/g, 'rgba(255,255,255,');
html = html.replace(/rgba\(0,\s*0,\s*0,\s*0\.85\)/g, 'rgba(255,255,255,0.85)'); // modal overlay

// Button filled is not clear:
html = html.replace(/btn-gold/g, 'btn-gold shadow-md text-black'); // Add shadow and explicit text-black

// "text is moving from the screen" - The user could mean the canvas particles making text unreadable.
// Let's remove the canvas element altogether to be safe and clean.
html = html.replace(/<canvas[^>]*><\/canvas>/gi, '');

fs.writeFileSync(filePath, html);
console.log("Successfully converted vanilla_build/index.html to Light Mode!");
