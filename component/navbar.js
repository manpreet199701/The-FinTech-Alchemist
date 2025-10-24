class CustomNavbar extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          nav {
            background: rgba(17, 24, 39, 0.8);
            backdrop-filter: blur(10px);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 50;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .logo {
            background: linear-gradient(90deg, #9333ea, #3b82f6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: bold;
            font-size: 1.5rem;
          }
          .nav-links {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            position: relative;
            padding: 0.5rem 0;
          }
          .nav-links a::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background: linear-gradient(90deg, #9333ea, #3b82f6);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }
          .nav-links a:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .mobile-menu-btn {
              display: block;
            }
          }
        </style>
        <nav>
          <a href="/" class="logo">The FinTech Alchemist</a>
          <ul class="nav-links">
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/phases.html">Phases</a></li>
            <li><a href="/learning.html">Learning</a></li>
            <li><a href="/notes.html">Notes</a></li>
            <li><a href="/Consultaion.html">Consultation</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
          <button class="mobile-menu-btn">
            <i data-feather="menu"></i>
          </button>
        </nav>
      `;
    }
  }
  customElements.define('custom-navbar', CustomNavbar);