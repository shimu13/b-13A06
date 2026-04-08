export default function Cart({ cart, removeItem, checkout }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart-section">

      <div className="cart-box">

        {/* TITLE */}
        <h2>Premium Digital Tools</h2>
        <p className="subtitle">Manage your selected tools easily</p>

        {/* CART LIST */}
        <div className="cart-list">

          {cart.length === 0 ? (
            <p className="empty">Your cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="cart-item">

                  <div className="left">
                    <span className="icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>

                  <div className="right">
                    <span>${item.price}</span>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>

                </div>
              ))}

              {/* TOTAL */}
              <div className="total">
                <span>Total</span>
                <span>${total}</span>
              </div>

              {/* BUTTON */}
              <button className="checkout-btn" onClick={checkout}>
                Proceed to Checkout
              </button>
            </>
          )}

        </div>

      </div>

    </section>
  );
}