'use client';

import React from 'react';
import tecnologias from '@/app/data/tecnologias.json'; // Importar o JSON
import TecnologiaCard from '@/app/data/TecnologiaCard';

export default function Tecnologias() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Tecnologias Aprendidas</h1>
      <p>Estas são as tecnologias que aprendi durante esta disciplina:</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {tecnologias.map((tecnologia) => (
          <TecnologiaCard
            key={tecnologia.title}
            title={tecnologia.title}
            image={tecnologia.image}
            description={tecnologia.description}
            rating={tecnologia.rating}
          />
        ))}
      </div>
    </div>
  );
}
