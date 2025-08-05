"use client";
import React from 'react';
import {useState} from 'react';
import CardPessoas from './CardPessoas.jsx';

export default function Page() {
  const [pessoas, setPessoas] = useState([
    {nome: 'João', email: 'joao@gmail.com', idade: 30},
    {nome: 'Maria', email: 'mari@gmail.com', idade: 25},
    {nome: 'Pedro', email: 'joao@gmail.com'},
    {nome: 'Ana', email: 'aninha@gmail.com', idade: 22},
    {nome: 'Lucas'},
  ])
  return (
    <div>
      <h1>Lista de Pessoas</h1>
      {pessoas.map((pessoa, index) => (
        <CardPessoas
          key={index}
          nome={pessoa.nome} 
          email={pessoa.email}
          idade={pessoa.idade}
        />
      ))}

      </div>
  ) ;
}