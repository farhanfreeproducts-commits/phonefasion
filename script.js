// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('button[aria-label="Toggle menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navigation routing
    const navButtons = document.querySelectorAll('button[id^="nav-"]');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.id.replace('nav-', '').trim();
            if (targetId === 'mobile-menu' || targetId === 'cta' || targetId === 'phone') return;
            
            e.preventDefault();
            
            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            let targetSection = document.getElementById(targetId);
            if (!targetSection) {
                targetSection = document.getElementById(targetId.replace(/\s+/g, '-'));
            }
            if (!targetSection) {
                targetSection = document.getElementById(targetId.replace(/\s+/g, ''));
            }
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Hero CTA Buttons
    const browseBtn = document.getElementById('hero-cta-browse');
    if (browseBtn) {
        browseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const categoriesSection = document.getElementById('categories');
            if (categoriesSection) categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    const contactBtn = document.getElementById('hero-cta-contact');
    const navCtaBtn = document.getElementById('nav-cta');
    [contactBtn, navCtaBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    });

    // PDF Links
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
    pdfLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Wishlist buttons (simple visual feedback)
    const wishlistButtons = document.querySelectorAll('button[id^="wishlist-"]');
    wishlistButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.background = 'rgba(201, 168, 76, 0.4)';
            setTimeout(() => {
                this.style.background = 'rgba(255,255,255,0.65)';
            }, 300);
        });
    });
});
