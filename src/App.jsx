import { useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import Pricing from "./Components/Pricing";
import Stats from "./Components/Stats";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import { FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";
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

      {/* NAVBAR */}
      <Navbar cartCount={cart.length} />

      {/* BANNER */}
      <Banner />

      {/* 🔥 STATS (Correct place) */}
      <Stats />

      {/* TITLE */}
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Premium Digital Tools
      </h2>

      {/* TOGGLE BUTTON */}
      <div style={{ textAlign: "center", margin: "30px" }}>
        <button className="btn-primary" onClick={() => setView("products")}>
          Products
        </button>

        <button className="btn-outline" onClick={() => setView("cart")}>
          Cart
        </button>
      </div>

      {/* PRODUCTS */}
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

      {/* CART */}
      {view === "cart" && (
        <Cart
          cart={cart}
          removeItem={removeItem}
          checkout={checkout}
        />
      )}

      {/* TOAST */}
      <ToastContainer position="top-right" autoClose={1500} />
      <Pricing />
      <CTA />

      {/* FOOTER */}
      <Footer 
      
      />

    </div>
  );
}