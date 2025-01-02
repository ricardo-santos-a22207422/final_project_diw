'use client';

import React from 'react';
import useSWR from 'swr';
import { Product } from '@/models/interfaces';

// Fetcher function for useSWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Default Page Component
export default function Page() {
  // Using useSWR to fetch products
  const { data: products, error } = useSWR<Product[]>('/api/products', fetcher);

  // Handle loading and error states
  if (error) return <div>Erro ao carregar os produtos.</div>;
  if (!products) return <div>A carregar...</div>;

  return (
    <>
      <h1>React e Next.js</h1>
      <p>Bem-vindo à minha app em React e Next.js, das tecnologias Web mais usadas nos dias de hoje.</p>

      {/* Products Section */}
      <div style={{ marginTop: '20px' }}>
        <h2>Produtos Disponíveis</h2>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px',
            }}
          >
            <h3>{product.title}</h3>
            <p><strong>Categoria:</strong> {product.category}</p>
            <p><strong>Descrição:</strong> {product.description}</p>
            <p><strong>Preço:</strong> ${product.price.toFixed(2)}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '200px', height: 'auto', margin: '10px 0' }}
            />
            <p><strong>Avaliação:</strong> {product.rating.rate} ({product.rating.count} avaliações)</p>
          </div>
        ))}
      </div>
    </>
  );
}
