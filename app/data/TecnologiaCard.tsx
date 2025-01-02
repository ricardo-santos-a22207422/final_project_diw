import React from 'react';

interface TecnologiaCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaCard({ title, image, description, rating }: TecnologiaCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
        textAlign: 'center',
        maxWidth: '300px',
      }}
    >
      <img src={image} alt={title} style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating} / 5</p>
    </div>
  );
}
