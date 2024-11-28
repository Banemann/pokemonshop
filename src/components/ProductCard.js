import React from 'react';
import { Link } from 'react-router-dom';  
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}> {/* Link to the product detail page */}
        <img src={product.image} alt={product.cardname} className="product-image" />
        <div className="product-info">
          <p>{product.collection}</p>
          <h3>{product.cardname}</h3>
          <p>{`${product.price.toFixed(2)} kr.`}</p>
        </div>
      </Link>
      <button className="add-to-bag-btn" onClick={handleAddToCart}>
        Tilføj til kurv
      </button>
    </div>
  );
};

export default ProductCard;
