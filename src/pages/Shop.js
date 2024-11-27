import React from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const products = [
  { id: 1, title: 'Product 1', price: 29.99, image: 'product1.jpg' },
  { id: 2, title: 'Product 2', price: 19.99, image: 'product2.jpg' },
  { id: 3, title: 'Product 3', price: 39.99, image: 'product3.jpg' },
];

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
