import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './navbar.css';
import { FaHome, FaInfoCircle, FaProductHunt, FaPhoneAlt, FaSearch, FaUserAlt } from 'react-icons/fa'; // Import React Icons

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    // This is just a placeholder action to show cart
    alert("Cart clicked!");
  };

  return (
    <nav className="navbar">
      <div className="nav-items">
        <Link to="/" className="nav-link">
          <FaHome /> Home
        </Link> {/* Link to Home */}

        <div 
          className="nav-item dropdown"
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <a href="#about" className="nav-link">
            <FaInfoCircle /> About
          </a> {/* Link to About */}
          {aboutDropdown && (
            <div className="dropdown-menu">
              <Link to="#team" className="dropdown-link">Team</Link>
              <Link to="#history" className="dropdown-link">History</Link>
              <Link to="#mission" className="dropdown-link">Mission</Link>
            </div>
          )}
        </div>

        <div 
          className="nav-item dropdown"
          onMouseEnter={() => setProductsDropdown(true)}
          onMouseLeave={() => setProductsDropdown(false)}
        >
          <Link to="/products" className="nav-link">
            <FaProductHunt /> Products
          </Link> {/* Link to Products */}
          {productsDropdown && (
            <div className="dropdown-menu">
              <Link to="#electronics" className="dropdown-link">Electronics</Link>
              <Link to="#fashion" className="dropdown-link">Fashion</Link>
              <Link to="#accessories" className="dropdown-link">Accessories</Link>
            </div>
          )}
        </div>

        <Link to="/contacts" className="nav-link">
          <FaPhoneAlt /> Contacts
        </Link> {/* Link to Contacts */}
      </div>

      <div className="side-items">
        <div className="search-container">
          <input 
            type="text" 
            className="inputbar" 
            placeholder="Search..." 
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

        <Link to="/login" className="nav-link">
          <FaUserAlt /> Login
        </Link> {/* Link to Login page */}
        <div className="cart" onClick={handleCartClick}>
          <i className="fas fa-shopping-cart"></i>
          {/* Display the cart count */}
          {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
