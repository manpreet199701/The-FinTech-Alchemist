// Portfolio Interactive Enhancements
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for project CTAs
    const projectCTAs = document.querySelectorAll('.project-cta');
    projectCTAs.forEach(cta => {
        cta.addEventListener('click', function(e) {
            // Add a subtle animation when clicking
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Project card intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards for scroll animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add loading state for images
    const projectImages = document.querySelectorAll('.project-screenshot img');
    projectImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial state
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Tech badge click to copy text (useful for recruiters)
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Visual feedback
                const originalBg = this.style.backgroundColor;
                this.style.backgroundColor = 'var(--color-accent-highlight)';
                this.style.color = 'var(--color-neutral-white)';
                
                setTimeout(() => {
                    this.style.backgroundColor = originalBg;
                    this.style.color = '';
                }, 500);
            });
        });
        
        // Add cursor pointer to indicate clickability
        badge.style.cursor = 'pointer';
        badge.title = 'Click to copy';
    });
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Ensure focus is visible
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--color-accent-highlight) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);