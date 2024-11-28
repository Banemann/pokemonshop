import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import supabase from '../supabase';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterBy, setFilterBy] = useState(''); // State for filtering by type
  const [sortBy, setSortBy] = useState(''); // State for sorting by type

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

  // Sort products based on selected criterion (optional)
  const sortProducts = (products, criterion) => {
    if (criterion === 'type') {
      return [...products].sort((a, b) => a.type.localeCompare(b.type)); // Sort by type
    }
    return products;
  };

  // Filter products based on selected type
  const filteredProducts = products.filter(product => {
    if (filterBy === '') return true; // Show all if no filter is applied
    return product.type === filterBy; // Filter by the selected type
  });

  // Apply sorting
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1 className="shoph1">Shop</h1>

      {/* Filter by type */}
      <div className="filter-controls">
        <label htmlFor="filterBy">Filter by type:</label>
        <select id="filterBy" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="">All</option>
          <option value="single">Singles</option>
          <option value="etb">ETB</option>
          <option value="booster">Booster</option>
        </select>
      </div>

      <div className="product-list">
        {sortedProducts.map((product) => (
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
              type: product.type,
              lager: product.lager,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
