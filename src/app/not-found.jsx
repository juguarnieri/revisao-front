import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>🚀</div>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Ops! Parece que você se perdeu no espaço digital.<br/>
        Esta página não foi encontrada.
      </p>
      <Link href="/" className={styles.link}>
        🏠 Voltar para casa
      </Link>
    </div>
  );
}