import { useMousePosition } from '@/hooks/mousePosition';
import { styled, theme } from '../style/Style.config';
import React from 'react';

interface ICursorPointProps {}

const CursorPointElement = styled('span', {
  position: 'fixed',
  height: `${theme.size.cursorSize.value}px`,
  width: `${theme.size.cursorSize.value}px`,
  borderRadius: '15px',
  pointerEvents: 'none',
  backgroundColor: theme.colors.button.value,
  transform: 'scale(1)',
  transition: 'transform .2s',
  zIndex: 10000,
  variants: {
    hover: {
      true: {
        backgroundColor: 'transparent',
        border: '2.5px solid black',
        transform: 'scale(2)'
      }
    }
  }
});

export function CursorPoint(props: ICursorPointProps) {
  const { lerpedPosition } = useMousePosition();
  const [isHover, setHover] = React.useState(false);

  React.useEffect(() => {
    const mouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        setHover(window.getComputedStyle(e.target)['cursor'] == 'pointer');
      }
    };
    document.addEventListener('mouseover', mouseOver);
    return () => {
      document.removeEventListener('mouseover', mouseOver);
    };
  }, []);

  return <CursorPointElement style={{ left: lerpedPosition.x, top: lerpedPosition.y }} hover={isHover} />;
}
