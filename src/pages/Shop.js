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
  }, []);  // Empty dependency array means this effect runs only on component mount

  if (loading) {
    return <p>Loading...</p>;  // While loading
  }

  if (error) {
    return <p>Error: {error}</p>;  // If there's an error
  }

  return (
    <div>
      <h1 className="shoph1">Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}  // Use `id` as the key to identify each product card uniquely
            product={{
              id: product.id,
              cardname: product.cardname,  // Ensure this matches your column name in Supabase
              price: product.price,
              image: product.image_url,    // Ensure this matches the column for image URL
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
