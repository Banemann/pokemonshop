import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import './Header.css';

const Header = () => {
  const { cart } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState); // Toggle the sidebar visibility
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src="logo.png" alt="Logo" />
        My Store
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/omos">About</Link>
      </nav>
      <div className="cart-icon" onClick={toggleSidebar}>
        <span>🛒</span>
        <span className="cart-badge">{cart.length}</span>
      </div>
      {/* Only pass the 'open' class if the sidebar is open */}
      <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </header>
  );
};

export default Header;
