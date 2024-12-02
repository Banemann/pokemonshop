import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, totalQuantity } = useCart(); // Include removeFromCart here

  const handleIncrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      updateQuantity(id, product.quantity + 1);
    }
  };

  const handleDecrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      if (product.quantity > 1) {
        updateQuantity(id, product.quantity - 1); // Decrease quantity by 1
      } else {
        removeFromCart(id); // Remove the item from the cart
      }
    }
  };
  

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const freeShippingThreshold = 499; // Free shipping threshold
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - total);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <h2>Din Kurv</h2>
        <button onClick={onClose} className="close-btn">X</button>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="cart-items-container">
  <ul className="cart-items">
    {cart.map((product) => (
      <li key={product.id} className="cart-item-card">
        <img src={product.image} alt={product.cardname} className="cart-item-image" />
        <div className="cart-item-info">
          <h3 className='cartname'>{product.cardname}</h3>
          <p className='cartprice'>{`Pris ${product.price.toFixed()},00 kr.`}</p>
          <div className="quantity-controls">
            <button onClick={() => handleDecrease(product.id)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => handleIncrease(product.id)}>+</button>
          </div>
        </div>
      </li>
    ))}
  </ul>
  <div className="free-shipping-bar">
    <p>
      Køb for <strong>{amountToFreeShipping.toFixed(2)} kr.</strong> og få <strong>gratis fragt</strong>
    </p>
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${(total / freeShippingThreshold) * 100}%` }}
      ></div>
    </div>
  </div>
</div>

         
          <div className="cart-total">
            <p className="checkout-note">Inkl. moms, fragten udregnes ved checkout</p> 
            <button className="checkout-btn">
              Gå til betaling - {total.toFixed()},00 kr.
            </button>
           
          </div>
        </>
      ) : (
        <p className='tomkurv'>Din kurv er tom</p>
      )}
    </div>
  );
};

export default CartSidebar;
