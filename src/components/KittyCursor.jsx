import React, { useState, useEffect } from 'react';
import cursorImage from '../assets/cursor.png';

const AmongUsCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTargetPosition({
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + (targetPosition.x - prevPosition.x) * 0.2, // Fator de suavização maior para mais responsividade
        y: prevPosition.y + (targetPosition.y - prevPosition.y) * 0.2, // Fator de suavização maior para mais responsividade
      }));
      requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targetPosition]);

  return (
    <img
      src={cursorImage} // Substitua pelo caminho da sua imagem
      alt="Among Us Character"
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '50px', // Ajuste o tamanho da imagem conforme necessário
        pointerEvents: 'none', // Impede que a imagem interfira na interação do mouse
        zIndex: 9999, // Garante que a imagem fique acima de outros elementos
        transform: 'translate(-50%, -50%)', // Centraliza a imagem no cursor
      }}
    />
  );
};

export default AmongUsCursor;
