// Navigation Component - Auto-loads on all pages
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <header style="background-color: var(--color-neutral-white); border-bottom: 2px solid var(--color-secondary-accent); position: sticky; top: 0; z-index: 50; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <nav class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
                <a href="index.html" style="font-size: 1.5rem; font-weight: bold; color: var(--color-accent-highlight);">The FinTech Alchemist</a>
                
                <!-- Desktop Menu -->
                <div id="desktop-nav" style="display: none; gap: 1.5rem;">
                    <a href="blog.html" style="color: var(--color-text-main);">Blog</a>
                    <a href="about.html" style="color: var(--color-text-main);">About</a>
                    <a href="projects.html" style="color: var(--color-text-main);">Projects</a>
                    <a href="phases.html" style="color: var(--color-text-main);">Phases</a>
                    <a href="learning.html" style="color: var(--color-text-main);">Learning</a>
                    <a href="notes.html" style="color: var(--color-text-main);">Notes</a>
                    <a href="Consultaion.html" style="color: var(--color-text-main);">Consultation</a>
                    <a href="contact.html" style="color: var(--color-text-main);">Contact</a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="nav-toggle" style="background: none; border: none; cursor: pointer; color: var(--color-text-main);">
                    <svg style="width: 1.5rem; height: 1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>
            
            <!-- Mobile Dropdown -->
            <div id="nav-menu" style="display: none; background-color: var(--color-neutral-white); border-top: 1px solid var(--color-secondary-accent);">
                <div class="container" style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                    <a href="blog.html" style="padding: 0.5rem 0; color: var(--color-text-main);">Blog</a>
                    <a href="about.html" style="padding: 0.5rem 0; color: var(--color-text-main);">About</a>
                    <a href="projects.html" style="padding: 0.5rem 0; color: var(--color-text-main);">Projects</a>
                    <a href="phases.html" style="padding: 0.5rem 0; color: var(--color-text-main);">Phases</a>
                    <a href="learning.html" style="padding: 0.5rem 0; color: var(--color-text-main);">Learning</a>
                    <a href="notes.html" style="padding: 0.5rem 0; color: var(--color-text-main);">Notes</a>
                    <a href="Consultaion.html" style="padding: 0.5rem 0; color: var(--color-text-main);">Consultation</a>
                    <a href="contact.html" style="padding: 0.5rem 0; color: var(--color-text-main);">Contact</a>
                </div>
            </div>
        </header>
    `;
    
    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Add toggle functionality and responsive behavior
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const desktopNav = document.getElementById('desktop-nav');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    // Show desktop nav on larger screens
    function updateNav() {
        if (window.innerWidth >= 768) {
            if (desktopNav) desktopNav.style.display = 'flex';
            if (toggle) toggle.style.display = 'none';
            if (menu) menu.style.display = 'none';
        } else {
            if (desktopNav) desktopNav.style.display = 'none';
            if (toggle) toggle.style.display = 'block';
        }
    }
    updateNav();
    window.addEventListener('resize', updateNav);
});
