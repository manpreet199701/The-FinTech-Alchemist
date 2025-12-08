// Navigation Component - Auto-loads on all pages
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <header class="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
            <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/index.html" class="text-2xl font-bold text-purple-400">The FinTech Alchemist</a>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-6">
                    <a href="/blog.html" class="hover:text-purple-400 transition">Blog</a>
                    <a href="/about.html" class="hover:text-purple-400 transition">About</a>
                    <a href="/projects.html" class="hover:text-purple-400 transition">Projects</a>
                    <a href="/phases.html" class="hover:text-purple-400 transition">Phases</a>
                    <a href="/learning.html" class="hover:text-purple-400 transition">Learning</a>
                    <a href="/notes.html" class="hover:text-purple-400 transition">Notes</a>
                    <a href="/Consultaion.html" class="hover:text-purple-400 transition">Consultation</a>
                    <a href="/contact.html" class="hover:text-purple-400 transition">Contact</a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="nav-toggle" class="md:hidden text-gray-100 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>
            
            <!-- Mobile Dropdown -->
            <div id="nav-menu" class="hidden md:hidden bg-gray-800 border-t border-gray-700">
                <div class="container mx-auto px-4 py-2 flex flex-col space-y-2">
                    <a href="/blog.html" class="py-2 hover:text-purple-400 transition">Blog</a>
                    <a href="/about.html" class="py-2 hover:text-purple-400 transition">About</a>
                    <a href="/projects.html" class="py-2 hover:text-purple-400 transition">Projects</a>
                    <a href="/phases.html" class="py-2 hover:text-purple-400 transition">Phases</a>
                    <a href="/learning.html" class="py-2 hover:text-purple-400 transition">Learning</a>
                    <a href="/notes.html" class="py-2 hover:text-purple-400 transition">Notes</a>
                    <a href="/Consultaion.html" class="py-2 hover:text-purple-400 transition">Consultation</a>
                    <a href="/contact.html" class="py-2 hover:text-purple-400 transition">Contact</a>
                </div>
            </div>
        </header>
    `;
    
    // Insert navigation at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Add toggle functionality
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
});
