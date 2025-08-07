"use client";
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = ({ titulo, descricao, products, onSearch }) => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (products) {
            setTotalProducts(products.length); 
        }
    }, [products]);

    const tituloExibido = titulo ? titulo : "🛒 Loja de Eletrônicos";
    const descricaoExibida = descricao ? descricao : "Encontre os melhores produtos eletrônicos aqui!";

    const handleSearchChange = (e) => {
      const { value } = e.target;
      setSearchTerm(value);
    };

    const handleSearchClick = () => {
      if (onSearch) {
        onSearch(searchTerm);
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(searchTerm);
      }
    };

    return (
        <div className={styles.header}>
            <h1>{tituloExibido}</h1>
            <p>{descricaoExibida}</p>
            <p>📊 Total de produtos: <span id="totalProducts">{totalProducts}</span></p>
            
            <div className={styles.searchContainer}>
                <input 
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  className={styles.searchInput}
                />
                <button 
                  onClick={handleSearchClick}
                  className={styles.searchButton}
                  title="Pesquisar"
                >
                  🔍
                </button>
            </div>
        </div>
    );
};

export default Header;