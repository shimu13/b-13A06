export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <span className="logo-icon">⚡</span>
        <h1>DigiTools</h1>
      </div>

      {/* MENU */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Tools</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <div className="cart">
          🛒 <span>{cartCount}</span>
        </div>
        <button className="login-btn">Login</button>
      </div>

    </nav>
  );
}