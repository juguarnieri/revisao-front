"use client";
import { useEffect } from 'react';
import styles from './ProductModal.module.css';

export default function ProductModal({ isOpen, onClose, product }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Detalhes do Produto</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={product.image} alt={product.title} className={styles.image} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.rating}>
              <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
              <span>({product.rating?.count}) - {product.rating?.reviews} avaliações</span>
            </div>
            <div className={styles.category}>
              Categoria: <strong>{product.category}</strong>
            </div>
            <div className={styles.actions}>
              <button className={styles.buyBtn}>Comprar Agora</button>
              <button className={styles.cartBtn}>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
