const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'vanilla_build', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace the Gold Crystal Clear Case block with Aura Gold Crystal Case
const auraGoldBlock = `
            <div class="relative h-64 overflow-hidden"
              style="background:linear-gradient(135deg, var(--dark-card) 0%, var(--dark-bg) 100%)"><img
                alt="Aura Gold Crystal Case" loading="lazy" decoding="async" data-nimg="fill"
                class="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                src="./aura_gold_case.png" />
              <div class="absolute top-4 left-4"><span class="badge-gold">Next Gen Luxury</span></div>
              <button class="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:text-[#C9A84C] hover:bg-white/20 transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
              <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-[#C9A84C] shadow-lg">$110</div>
              <div class="absolute bottom-4 left-4 flex gap-1.5">
                <div class="w-4 h-4 rounded-full border border-gray-300 shadow-sm" style="background-color:#E3C565"></div>
                <div class="w-4 h-4 rounded-full border border-gray-300 shadow-sm" style="background-color:#FFFFFF"></div>
                <div class="w-4 h-4 rounded-full border border-gray-300 shadow-sm" style="background-color:#C9A84C"></div>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="text-xs font-bold tracking-wider mb-2" style="color:#C9A84C">TRANSPARENT</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Aura Gold Crystal Case</h3>
              <p class="text-xs leading-relaxed mb-4 flex-1" style="color:#4B5563">Premium clear backplate outlined with 24K gold electroplated edges and custom diamond camera bezel.</p>
              <div class="text-xs mb-3 flex items-center gap-1" style="color:#4B5563">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="2.5"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                iPhone 17 Pro / Pro Max
              </div>
              <div class="flex items-center gap-1.5 mb-4">
                <div class="flex"><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                <span class="text-xs font-medium" style="color:#374151">4.9 (32)</span>
              </div>
              <div class="flex items-center justify-between mt-auto pt-4" style="border-top:1px solid rgba(0,0,0,0.05)">
                <span class="text-2xl font-bold" style="color:#C9A84C">$110</span>
                <button class="btn-gold shadow-md text-black px-4 py-2 text-xs">View Details</button>
              </div>
            </div>`;

// Replace the Royal Blue Leather Case block with Titanium Cyber Carbon Case
const titaniumBlock = `
            <div class="relative h-64 overflow-hidden"
              style="background:linear-gradient(135deg, var(--dark-card) 0%, var(--dark-bg) 100%)"><img
                alt="Titanium Cyber Carbon Case" loading="lazy" decoding="async" data-nimg="fill"
                class="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                src="./titanium_cyber_case.png" />
              <div class="absolute top-4 left-4"><span class="badge-gold" style="background:rgba(49, 59, 114, 0.15);color:#4A5CA8;border-color:rgba(74, 92, 168, 0.3)">Next Gen Preview</span></div>
              <button class="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:text-[#C9A84C] hover:bg-white/20 transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
              <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-[#E3C565] shadow-lg">$135</div>
              <div class="absolute bottom-4 left-4 flex gap-1.5">
                <div class="w-4 h-4 rounded-full border border-gray-300 shadow-sm" style="background-color:#2A2A2A"></div>
                <div class="w-4 h-4 rounded-full border border-gray-300 shadow-sm" style="background-color:#D1D1D1"></div>
                <div class="w-4 h-4 rounded-full border border-gray-300 shadow-sm" style="background-color:#1E3A5F"></div>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="text-xs font-bold tracking-wider mb-2" style="color:#2A3A5A">LUXURY</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Titanium Cyber Carbon Case</h3>
              <p class="text-xs leading-relaxed mb-4 flex-1" style="color:#4B5563">Aerospace carbon fiber fused with a grade-5 titanium frame. The future of device protection.</p>
              <div class="text-xs mb-3 flex items-center gap-1" style="color:#4B5563">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="2.5"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                iPhone 17 Pro / Pro Max
              </div>
              <div class="flex items-center gap-1.5 mb-4">
                <div class="flex"><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                <span class="text-xs font-medium" style="color:#374151">5 (48)</span>
              </div>
              <div class="flex items-center justify-between mt-auto pt-4" style="border-top:1px solid rgba(0,0,0,0.05)">
                <span class="text-2xl font-bold" style="color:#E3C565">$135</span>
                <button class="btn-gold shadow-md text-black px-4 py-2 text-xs">View Details</button>
              </div>
            </div>`;

// We need to replace the inner HTML of the cards that contain "iPhone 17 Pro / Pro Max"
const blocks = html.split('<div class="glass-card flex flex-col group relative"');
for (let i = 1; i < blocks.length; i++) {
  if (blocks[i].includes('Gold Crystal Clear Case')) {
    blocks[i] = '>' + auraGoldBlock + '</div>'; // Reconstruct the split boundary
  } else if (blocks[i].includes('Royal Blue Leather Case')) {
    blocks[i] = '>' + titaniumBlock + '</div>';
  } else {
    // Keep as is, just add back the split boundary character we consumed
    blocks[i] = blocks[i]; 
  }
}

// Rejoin
html = blocks.join('<div class="glass-card flex flex-col group relative"');

fs.writeFileSync(filePath, html);
console.log("Updated 17 Pro Max product cards!");
