import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import supabase from '../supabase';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('pokemonshop')  // Ensure the table name is correct
          .select('*');         // Select all columns

        if (error) {
          throw error; // Throw an error if the query fails
        }

        setProducts(data);  // Set products if data is successfully fetched
        setLoading(false);   // Stop loading
      } catch (error) {
        setError(error.message);  // Capture and set error message
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);  

  if (loading) {
    return <p>Loading...</p>;  
  }

  if (error) {
    return <p>Error: {error}</p>;  
  }

  return (
    <div>
      <h1 className="shoph1">Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}  
            product={{
              id: product.id,
              cardname: product.cardname, 
              price: product.price,
              image: product.image_url,   
              collection: product.collection,    
              kortbeskrivelse: product.kortbeskrivelse,    
              beskrivelse: product.beskrivelse,    
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
