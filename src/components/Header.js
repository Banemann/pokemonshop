import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import '../styles/Header.css';

const Header = () => {
  const { totalQuantity } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  useEffect(() => {
    if (totalQuantity > 0) {
      triggerShake();
    }
  }, [totalQuantity]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={isHomePage ? 'header-home' : 'header'}>
        <div className="header-container">
          <Link to="/" className="logo">
            <img src="pokelogo2.png" alt="Logo" />
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/omos">About</Link>
          </nav>
          <div className="header-icons">
            <div className="login-icon">
              <img src="login.png" alt="Login" />
            </div>
            <div className={`cart-icon ${isShaking ? 'shake' : ''}`} onClick={toggleSidebar}>
              <img src="kurv.png" alt="Cart" />
              <span className="cart-badge">{totalQuantity}</span>
            </div>
          </div>
          <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
      </header>
      {isHomePage && (
        <div className="hero-image">
          <img src="/heroimg.webp" alt="hero-header-image" className="hero-header-image" />
        </div>
      )}
    </>
  );
};

export default Header;