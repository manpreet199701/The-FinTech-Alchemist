class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            background: rgba(17, 24, 39, 0.8);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: auto;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
          }
          .copyright {
            opacity: 0.8;
            font-size: 0.9rem;
          }
          .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .social-links a {
            color: white;
            transition: color 0.3s ease;
          }
          .social-links a:hover {
            color: #9333ea;
          }
        </style>
        <footer>
          <div class="footer-content">
            <div class="social-links">
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            </div>
            <p class="copyright">&copy; 2025 The FinTech Alchemist. All rights reserved.</p>
          </div>
        </footer>
      `;
    }
  }
  customElements.define('custom-footer', CustomFooter);