'use client';

import React from 'react';
import useSWR from 'swr';
import Card from '@/Components/Card';
import { Product } from '@/models/interfaces';

// Função de fetch para useSWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Componente da página
export default function Produtos() {
  // Buscando produtos da API usando SWR
  const { data: products, error } = useSWR<Product[]>('/api/products', fetcher);

  // Mensagens para estados de carregamento e erro
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
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
