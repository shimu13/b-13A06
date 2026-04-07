export default function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <h1>DigiTools</h1>
      <div>🛒 {cartCount}</div>
    </div>
  );
}