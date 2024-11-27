import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.cardname} className="product-image" />
      <div className="product-info">
        <h3>{product.cardname}</h3>
        <p>{`$${product.price.toFixed(2)}`}</p>
        <button className="add-to-bag-btn" onClick={handleAddToCart}>
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
