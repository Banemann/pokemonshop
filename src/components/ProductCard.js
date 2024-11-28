import React from 'react';
import { Link } from 'react-router-dom';  
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const buttonClass = product.lager > 0 ? 'add-to-bag-btn' : 'add-to-bag-btn out-of-stock';
  
  return (
    <div className="product-card">
      <Link to={`/shop/${product.id}`} className="product-card-link">
        <img src={product.image} alt={product.cardname} className="product-image" />
        <div className="product-info">
          <p>{product.collection}</p>
          <h3>{product.cardname}</h3>
          <p>{`${product.price.toFixed()} kr.`}</p>

          <div className="stock-indicator">
            <span
              className={`stock-light ${product.lager > 0 ? 'green' : 'red'}`}
            ></span>
            <span>{product.lager > 0 ? 'På lager' : 'Udsolgt'}</span>
          </div>
        </div>
      </Link>

      {/* Button to add to cart */}
      <button 
        className={buttonClass}
        onClick={handleAddToCart}
        disabled={product.lager <= 0}  
      >
        {product.lager > 0 ? 'Tilføj til kurv' : 'Udsolgt'}
      </button>
    </div>
  );
};

export default ProductCard;
