import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import { useCart } from '../context/CartContext';
import '../styles/ShopSingle.css';

const ShopSingle = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from('pokemonshop')
          .select('*')
          .eq('id', productId)
          .single();

        if (error) throw error;

        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-detail">
      
      <div className="product-grid">
        <div className="image-wrapper">
          <img src={product.image_url} alt={product.cardname} />
        </div>
        <div className="product-info">
          <h1>{product.cardname}</h1>
          <h3>{product.collection}</h3>
          <p>{product.kortbeskrivelse}</p>
          <p>{`${product.price.toFixed(2)} kr.`}</p>
          <div className="stock-indicator">
            <span className={`stock-light ${product.lager > 0 ? 'green' : 'red'}`}></span>
            <span>{product.lager > 0 ? 'På lager' : 'Udsolgt'}</span>
          </div>
          <button
            className="add-to-bag-btn"
            onClick={handleAddToCart}
            disabled={product.lager <= 0}
          >
            Tilføj til kurv
          </button>
        </div>
      </div>

      
      <div className="details-grid">
        <div className="product-description">
          <h2>Beskrivelse</h2>
          <p>{product.beskrivelse}</p>
        </div>
        <div className="product-contents">
          <h2>Indhold</h2>
          <p>{product.indhold}</p>
        </div>
      </div>

     
      <button className="back-btn" onClick={() => navigate(-1)}>Tilbage</button>
    </div>
  );
};

export default ShopSingle;
