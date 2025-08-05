"use client";
import { useState, useEffect } from 'react';
import { productsData } from '../data/products.js';
import ProductCard from '@/components/ProductCard/ProductCard.jsx';
import Header from '@/components/Header/Header.jsx';
import styles from './page.module.css';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className={styles.container}>
      <Header products={products} /> 
      <div className={styles.products}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}