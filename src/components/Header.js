import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import './Header.css';

const Header = () => {
  const { totalQuantity } = useCart(); // Extract totalQuantity
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false); // State to control shake animation

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the sidebar visibility
  };

  // Trigger the shake animation
  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Remove the shake class after the animation
  };

  // Example: Trigger shake whenever totalQuantity changes
  useEffect(() => {
    if (totalQuantity > 0) {
      triggerShake();
    }
  }, [totalQuantity]); // Depend on totalQuantity to watch for changes

  return (
    <header>
      <Link to="/" className="logo">
        <img src="https://picsum.photos/100" alt="Logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/omos">About</Link>
      </nav>
      <div className={`cart-icon ${isShaking ? 'shake' : ''}`} onClick={toggleSidebar}>
        <span>🛒</span>
        <span className="cart-badge">{totalQuantity}</span> 
      </div>
      <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </header>
  );
};

export default Header;
