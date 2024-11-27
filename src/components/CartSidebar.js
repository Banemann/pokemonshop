import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalQuantity } = useCart();

  const handleIncrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      updateQuantity(id, product.quantity + 1); // Increase quantity by 1
    }
  };

  const handleDecrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product && product.quantity > 1) {
      updateQuantity(id, product.quantity - 1); // Decrease quantity by 1, but not below 1
    }
  };

  // Calculate total price
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <h2>Din Kurv ({totalQuantity})</h2>
        <button onClick={onClose}>X</button>
      </div>
      {cart.length > 0 ? (
        <>
          <ul className="cart-items">
            {cart.map((product) => (
              <li key={product.id} className="cart-item-card">
                <img src={product.image} alt={product.cardname} className="cart-item-image" />
                <div className="cart-item-info">
  <h3>{product.cardname}</h3>
  <p>{product.collection}</p>
  <p>{`${product.price.toFixed(2)} kr.`}</p>
  <div className="quantity-controls">
    <button onClick={() => handleDecrease(product.id)}>-</button>
    <span>{product.quantity}</span>
    <button onClick={() => handleIncrease(product.id)}>+</button>
    <button onClick={() => removeFromCart(product.id)} className="remove-btn">Fjern</button> 
  </div>
</div>

              </li>
            ))}
          </ul>
          <div className="cart-total">
            <div className="total-info">
              <span>Total:</span>
              <span>{total.toFixed(2)} kr.</span>
            </div>
          </div>
        </>
      ) : (
        <p>Din kurv er tom</p>
      )}
    </div>
  );
};

export default CartSidebar;
