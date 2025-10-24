// Shared functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle (will be implemented in navbar component)
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project carousel navigation
    const projectPrev = document.querySelector('.project-prev');
    const projectNext = document.querySelector('.project-next');
    
    if (projectPrev && projectNext) {
        // Implementation would go here
    }
});