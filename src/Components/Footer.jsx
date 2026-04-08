import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>⚡ DigiTools</h2>
          <p>
            All-in-one platform for digital tools to boost your workflow
          </p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="social-icons">
            <FaGlobe />
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
          </div>

          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Help</p>
            <p>Contact</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 DigiTools</p>
      </div>

    </footer>
  );
}