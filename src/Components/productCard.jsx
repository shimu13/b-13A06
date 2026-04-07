export default function ProductCard({ product, addToCart }) {

  const colors = {
    popular: "red",
    new: "green",
    best: "blue"
  };

  return (
    <div className="card">
      <span className="tag" style={{ background: colors[product.tagType] }}>
        {product.tag}
      </span>

      <h2>{product.icon} {product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price} / {product.period}</p>

      <button onClick={() => addToCart(product)}>
        Buy Now
      </button>
    </div>
  );
}