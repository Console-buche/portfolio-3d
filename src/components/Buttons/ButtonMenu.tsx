import * as React from 'react';
import { styled, theme } from '../style/Style.config';

interface IButtonMenuProps {
  onClick: () => void;
}

const StyledButtonMenu = styled('button', {
  height: 48,
  width: 48,
  borderRadius: 15,
  background: theme.colors.button.value,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
  cursor: 'pointer'
});

const StyledBar = styled('span', {
  height: 4,
  width: 26,
  borderRadius: 4,
  background: 'white',
  transition: '0.2s transform ease',
  variants: {
    isDiagTop: {
      true: {
        transform: 'rotate(45deg)',
        position: 'absolute'
      }
    },
    isHidden: {
      true: {
        opacity: 0
      }
    },
    isDiagBot: {
      true: {
        transform: 'rotate(-45deg)',
        position: 'absolute'
      }
    }
  }
});

export function ButtonMenu(props: IButtonMenuProps) {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    props.onClick();
    setIsClicked(!isClicked);
  };

  return (
    <StyledButtonMenu onClick={handleClick}>
      <StyledBar isDiagTop={isClicked} />
      <StyledBar isHidden={isClicked} />
      <StyledBar isDiagBot={isClicked} />
    </StyledButtonMenu>
  );
}
