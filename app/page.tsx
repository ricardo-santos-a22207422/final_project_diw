'use client';

import React from 'react';
import useSWR from 'swr';
import { Product } from '@/models/interfaces';
import Card from '@/Components/Card';

// Função de fetch para useSWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Componente da página
export default function Page() {
  // Buscando produtos com useSWR
  const { data: products, error } = useSWR<Product[]>('/api/products', fetcher);

  // Lidar com estados de carregamento e erro
  if (error) return <div className="text-red-500">Erro ao carregar os produtos.</div>;
  if (!products) return <div className="text-gray-500">A carregar...</div>;

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center text-gray-800">React e Next.js</h1>
      <p className="text-center text-gray-600 mt-2">
        Bem-vindo à minha app em React e Next.js, das tecnologias Web mais usadas nos dias de hoje.
      </p>

      {/* Secção de Produtos */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Produtos Disponíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
