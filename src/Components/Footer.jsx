export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>⚡ DigiTools</h2>
          <p>
            All-in-one platform for digital tools to boost your workflow
            and productivity.
          </p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="social-icons">
            <span>🌐</span>
            <span>🐦</span>
            <span>📘</span>
            <span>💼</span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>Tools</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 DigiTools. All rights reserved.</p>
      </div>

    </footer>
  );
}