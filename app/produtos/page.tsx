'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Card from '@/Components/Card';
import { Product } from '@/models/interfaces';

// Função de fetch para useSWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Produtos() {
  const { data: products, error } = useSWR<Product[]>('/api/products', fetcher);

  const [cart, setCart] = useState<Product[]>([]);

  // Carregar produtos do local storage ao carregar a página
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Atualizar local storage sempre que o carrinho for modificado
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (error) return <div className="text-red-500 text-center mt-4">Erro ao carregar os produtos.</div>;
  if (!products) return <div className="text-gray-500 text-center mt-4">A carregar...</div>;

  return (
    <div className="p-6 bg-gray-100">
      {/* Cabeçalho */}
      <h1 className="text-2xl font-bold text-center text-gray-800">Produtos Disponíveis</h1>
      <p className="text-center text-gray-600 mt-2">
        Explore nossa seleção incrível de produtos disponíveis na loja.
      </p>

      {/* Grid de Produtos */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} addItemToCart={addItemToCart} />
        ))}
      </div>

      {/* Carrinho de compras */}
      <div className="mt-12 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold text-gray-800">Carrinho de Compras</h2>
        {cart.length > 0 ? (
          <ul className="mt-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.title}</span>
                <span>€{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-4">Seu carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
}
