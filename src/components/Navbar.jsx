import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="baby-navbar">

            {/* LEFT MENU */}
            <ul className="baby-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/deals">Deals</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>

            {/* CENTER LOGO (TEXT) */}
            <div className="baby-logo">
                <Link to="/" className="baby-logo-text">
                    BALOU
                </Link>
            </div>

            {/* RIGHT ICONS */}
            <div className="baby-icons">
                <Link to="/profile" className="icon-btn"><FaUser /></Link>
                <Link to="/wishlist" className="icon-btn"><FaHeart /></Link>
                <Link to="/cart" className="icon-btn"><FaShoppingCart /></Link>
            </div>

        </nav>
    );
}
