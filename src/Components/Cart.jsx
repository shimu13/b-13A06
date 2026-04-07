export default function Cart({ cart, removeItem, checkout }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart-item">
              <span>{item.icon} {item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeItem(item.id)}>❌</button>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <button onClick={checkout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}