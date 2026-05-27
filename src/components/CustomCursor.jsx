import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [pokemonId, setPokemonId] = useState(25); // Default Pikachu

  useEffect(() => {
    // Pick a random Gen 1 Pokemon (1 to 151) on mount (refresh)
    const randomId = Math.floor(Math.random() * 151) + 1;
    setPokemonId(randomId);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <style>{`
        /* Hide the default cursor everywhere */
        * {
          cursor: none !important;
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: '48px',
          height: '48px',
          backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          imageRendering: 'pixelated'
        }}
      />
    </>
  );
};
