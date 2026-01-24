import { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";
import productsData from "../assets/data/products";

export default function ProductGrid() {
  const [wishlist, setWishlist] = useState([]);
  const [priceRange, setPriceRange] = useState(1500);

  const filteredProducts = productsData.filter(
    p => p.price <= priceRange
  );

  const toggleWishlist = (product) => {
    setWishlist(prev =>
      prev.some(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <div className="shop-layout">

      {/* LEFT FILTER */}
      <aside className="filter-sidebar">
        <h4>Filter by Price</h4>
        <label>₹0 – ₹{priceRange}</label>
      <input
  type="range"
  min="500"
  max="2000"
  step="100"
  value={priceRange}
  onChange={(e) => setPriceRange(Number(e.target.value))}
/>

      </aside>

      {/* RIGHT PRODUCTS */}
      <section className="product-section">
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.some(w => w.id === product.id)}
              onWishlist={() => toggleWishlist(product)}
              onAddToCart={() => alert("Added to Bag 👜")}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
