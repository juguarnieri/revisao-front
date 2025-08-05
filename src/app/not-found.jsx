import React from 'react';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Página não encontrada</p>
      <a href="/" className={styles.link}>Voltar para a página inicial</a>
    </div>
  );
}