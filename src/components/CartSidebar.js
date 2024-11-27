import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const Cart = ({ isOpen, onClose }) => {
  const { cart } = useCart();

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
      {cart.length > 0 ? (
        <ul className="cart-items">
          {cart.map((product, index) => (
            <li key={index}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
