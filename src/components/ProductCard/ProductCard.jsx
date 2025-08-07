"use client";
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from "./ProductCard.module.css";
import Image from "next/image";
import ProductModal from '../ProductModal/ProductModal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    toast.success(`📱 Visualizando: ${product.title}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className={styles.productcard} 
        data-category={product.category}
        onClick={handleCardClick}
      >
      <div className={styles.productimage}>
        <Image
          src={product.image}
          alt="Responsive"
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className={styles.producttitle}>{product.title}</div>
      <div className={styles.productprice}>R$ {product.price}</div>
      <div className={styles.productdescription}>{product.description}</div>
        <div className={styles.productrating}>
          <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
          <span>(3.8) - 4.456 avaliações</span>
        </div>
      </div>
      
      <ProductModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        product={product}
      />
    </>
  );
};export default ProductCard;