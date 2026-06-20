import { useEffect } from 'react';

export const useMouseGlow = () => {
  useEffect(() => {
    const root = document.documentElement;
    const handleMove = (event: MouseEvent) => {
      root.style.setProperty('--mouse-x', `${event.clientX}px`);
      root.style.setProperty('--mouse-y', `${event.clientY}px`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
};
