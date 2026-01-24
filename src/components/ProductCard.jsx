import { FaHeart, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import "../styles/ProductCard.css";

export default function ProductCard({
  product,
  isWishlisted,
  onWishlist,
  onAddToCart
}) {
  return (
   <div className="product-card">

  <button className="wishlist-btn" onClick={onWishlist}>
    {isWishlisted ? <FaHeart /> : <FaRegHeart />}
  </button>

  <div className="product-image-wrapper">
    <img src={product.image} alt={product.title} />
  </div>

  <h3 className="product-title">
    {product.title}
  </h3>

  <p className="product-category">
    Kids Clothing
  </p>

  <div className="product-price">
    ₹{product.price}
  </div>

  <button className="add-to-bag" onClick={onAddToCart}>
    <FaShoppingBag /> Add to Bag
  </button>

</div>

  );
}
