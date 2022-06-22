import { theme } from '@/components/style/Style.config';
import React from 'react';
import { lerp } from 'three/src/math/MathUtils';

const step = 0.2;

// Export type to separate types.ts in hooks folder
export type MousePosition = {
  x: number;
  y: number;
};

export const useMousePosition = () => {
  const [position, setPosition] = React.useState<MousePosition>({ x: 0, y: 0 });
  const [lerpedPosition, setLerpedPosition] = React.useState<MousePosition>({
    x: 0,
    y: 0
  });

  React.useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setLerpedPosition({
          x: lerp(position.x, position.x - Number(theme.size.cursorSize.value) / 2, step),
          y: lerp(position.y, position.y - Number(theme.size.cursorSize.value) / 2, step)
        });
      }, 10);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, [position]);

  return { position, lerpedPosition };
};
