import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate
import supabase from '../supabase'; // Your database client
import { useCart } from '../context/CartContext';  // Import your CartContext
import './ShopSingle.css';

const ShopSingle = () => {
  const { productId } = useParams();  // Get the product ID from the URL
  const navigate = useNavigate();  // Initialize useNavigate
  const { addToCart } = useCart();  // Access addToCart from the CartContext
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product);  // Add the product to the cart
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from('pokemonshop') // Make sure the table name is correct
          .select('*')
          .eq('id', productId)  // Fetch product based on the ID from the URL
          .single();  // Ensure only one product is returned

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
      <img src={product.image_url} alt={product.cardname} />
      <h1>{product.cardname}</h1>
      <p>{product.collection}</p>
      <p>{`${product.price.toFixed(2)} kr.`}</p>
      <p>{product.beskrivelse}</p> {/* Detailed description */}
      <p>{`${product.lager} Tilbage på lager.`}</p>
      <button className="add-to-bag-btn" onClick={handleAddToCart}>
        Tilføj til kurv
      </button>

      {/* Tilbage button to go back */}
      <button className="back-btn" onClick={() => navigate(-1)}>Tilbage</button> {/* Go back one page */}
    </div>
  );
};

export default ShopSingle;
