import Image from 'next/image';
import { Product } from '@/models/interfaces';

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-sm text-gray-500 mt-1">Categoria: {product.category}</p>
        <p className="text-gray-900 font-bold mt-2">€{product.price.toFixed(2)}</p>

        {product.rating && (
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500 text-sm font-medium">
              {product.rating.rate.toFixed(1)} ★
            </span>
            <span className="ml-2 text-gray-500 text-sm">
              ({product.rating.count} avaliações)
            </span>
          </div>
        )}

        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={() => alert(`Produto ${product.title} adicionado ao cesto!`)}
        >
          Adicionar ao Cesto
        </button>
      </div>
    </div>
  );
}
