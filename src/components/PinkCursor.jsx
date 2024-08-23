import React, { useState, useEffect } from 'react';

const PinkCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Adicionar evento mousemove para a janela inteira
    window.addEventListener('mousemove', handleMouseMove);

    // Remover o evento ao desmontar o componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',  // Usando 'fixed' para que o cursor siga a rolagem
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '20px',
        height: '20px',
        backgroundColor: 'pink',
        borderRadius: '50%',
        pointerEvents: 'none',  // Impede que interfira na interação do mouse
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,  // Garante que fique acima de todos os elementos
      }}
    />
  );
};

export default PinkCursor;
