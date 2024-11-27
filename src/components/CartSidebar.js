import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncrease = (id) => {
    const product = cart.find((item) => item.id === id);
    updateQuantity(id, product.quantity + 1);
  };

  const handleDecrease = (id) => {
    const product = cart.find((item) => item.id === id);
    updateQuantity(id, product.quantity - 1);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
      {cart.length > 0 ? (
        <ul className="cart-items">
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className="quantity-controls">
              <button onClick={() => handleIncrease(product.id)}>+</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleDecrease(product.id)}>-</button>
              </div>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartSidebar;
