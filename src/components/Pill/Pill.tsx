import { styled } from '../style/Style.config';

interface IPillProps {
  name: string;
}

const StyledPill = styled('div', {
  borderRadius: '20px',
  color: 'SlateGrey',
  border: '1px solid SlateGrey',
  padding: '0 10px',

  background: '#FFF',
  variants: {
    techImportance: {
      primary: {
        border: 'none',
        background: '#FFB800',
        color: '#FFF'
      },
      secondary: { border: 'none', background: '#8433cc', color: '#FFF' }
    }
  }
});

export function Pill(props: IPillProps) {
  return <StyledPill>{props.name}</StyledPill>;
}
