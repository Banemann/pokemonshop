import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import supabase from '../supabase';
import '../styles/Shop.css';
 
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterByType, setFilterByType] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]); 
  const [inStock, setInStock] = useState(false);
 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('pokemonshop') 
          .select('*'); 
 
        if (error) {
          throw error; 
        }
 
        setProducts(data); 
        setLoading(false); 
      } catch (error) {
        setError(error.message); 
        setLoading(false);
      }
    };
 
    fetchProducts();
  }, []);
 
  
  const filteredProducts = products.filter((product) => {
    
    if (filterByType.length > 0 && !filterByType.includes(product.type)) {
      return false;
    }
    
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    if (inStock && !product.lager) {
      return false;
    }
    return true;
  });
 
  if (loading) {
    return <p>Loading...</p>;
  }
 
  if (error) {
    return <p>Error: {error}</p>;
  }
 
  return (
<div className='shoppage'>
      
<div className="filter-panel">
<h3>Tilgængelighed</h3>
<div>
<label>
<input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
            På lager
</label>
</div>
<hr />
<h3>Type</h3>
        {['Booster pakker', 'Booster bokse', 'Blister pakker', 'Build & battle', 'ETB', 'Tins'].map((type) => (
<div key={type}>
<label>
<input
                type="checkbox"
                checked={filterByType.includes(type)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilterByType([...filterByType, type]);
                  } else {
                    setFilterByType(filterByType.filter((t) => t !== type));
                  }
                }}
              />
              {type}
</label>
</div>
        ))}
<hr />

<h3>Pris</h3>
<div className="price-slider">
<div className="price-inputs">
<input
      type="number"
      min="0"
      max="5000"
      value={priceRange[0]}
      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
      className="price-box"
    />
<span>–</span>
<input
      type="number"
      min="0"
      max="5000"
      value={priceRange[1]}
      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
      className="price-box"
    />
</div>
<div className="slider-wrapper">
<input
      type="range"
      min="0"
      max="5000"
      value={priceRange[0]}
      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
      className="slider"
    />
<input
      type="range"
      min="0"
      max="5000"
      value={priceRange[1]}
      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
      className="slider"
    />
</div>
</div>
</div>
 
<div className="product-list">
        {filteredProducts.map((product) => (
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