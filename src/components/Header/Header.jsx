"use client";
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = ({ titulo, descricao, products }) => {
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        if (products) {
            setTotalProducts(products.length); 
        }
    }, [products]);

    const tituloExibido = titulo ? titulo : "🛒 Loja de Eletrônicos";
    const descricaoExibida = descricao ? descricao : "Encontre os melhores produtos eletrônicos aqui!";

    return (
        <div className={styles.header}>
            <h1>{tituloExibido}</h1>
            <p>{descricaoExibida}</p>
            <p>📊 Total de produtos: <span id="totalProducts">{totalProducts}</span></p>
        </div>
    );
};

export default Header;