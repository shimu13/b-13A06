export default function ProductCard({ product, addToCart }) {

  const colors = {
    popular: "#ef4444",
    new: "#22c55e",
    best: "#3b82f6"
  };

  return (
    <div className="card">

      {/* TAG */}
      <span
        className="tag"
        style={{ backgroundColor: colors[product.tagType] }}
      >
        {product.tag}
      </span>

      {/* ICON */}
      <div className="card-icon">
        {product.icon}
      </div>

      {/* TITLE */}
      <h2 className="card-title">{product.name}</h2>

      {/* DESCRIPTION */}
      <p className="card-desc">{product.description}</p>

      {/* PRICE */}
      <p className="card-price">
        ${product.price} <span>/{product.period}</span>
      </p>

      {/* FEATURES */}
      <ul className="card-features">
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        className="buy-btn"
        onClick={() => addToCart(product)}
      >
        Buy Now
      </button>

    </div>
  );
}