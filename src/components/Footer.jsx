import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <div className="footer-top">

        {/* BRAND / ABOUT */}
        <div className="footer-col">
          <h2 className="footer-logo">Balou</h2>
          <p className="footer-text">
            Balou is your one-stop destination for premium products with quality, style,
            and trust. We bring you carefully curated collections designed for comfort,
            elegance, and everyday living.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/new-arrivals">New Arrivals</Link></li>
            <li><Link to="/best-sellers">Best Sellers</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/collections">Collections</Link></li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping & Delivery</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> Kozhikode, Kerala, India</li>
            <li><FaPhoneAlt /> +91 98765 43210</li>
            <li><FaEnvelope /> support@balou.com</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Get updates about new products, offers, and exclusive deals.</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Balou. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>

    </footer>
  );
}
