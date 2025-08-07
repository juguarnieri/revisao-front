"use client";
import { useState, useEffect } from 'react';
import { productsData } from '../data/products.js';
import ProductCard from '@/components/ProductCard/ProductCard.jsx';
import Header from '@/components/Header/Header.jsx';
import styles from './page.module.css';

export default function HomePage() {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filterProducts = (products, searchTerm) => {
    if (!searchTerm) {
      return products;
    }

    return products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  useEffect(() => {
    const filtered = filterProducts(products, searchTerm);
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className={styles.container}>
      <Header products={products} onSearch={handleSearch} /> 
      <div className={styles.products}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}