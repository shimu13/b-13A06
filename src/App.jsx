import { useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import { productsData } from "./Data/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {

  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    toast.info("Checkout complete");
  };

  return (
    <div>

      <Navbar cartCount={cart.length} />
      <Banner />

      <div style={{ textAlign: "center", margin: "30px" }}>
        <button onClick={() => setView("products")}>Products</button>
        <button onClick={() => setView("cart")}>Cart</button>
      </div>

      {view === "products" && (
        <div className="products-grid">
          {productsData.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

      {view === "cart" && (
        <Cart
          cart={cart}
          removeItem={removeItem}
          checkout={checkout}
        />
      )}

      <ToastContainer />

    </div>
  );
}