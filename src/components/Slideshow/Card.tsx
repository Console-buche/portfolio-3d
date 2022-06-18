import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { DiscreteInterpolant } from 'three';
import { Project } from '../../assets/types';
import { useStore } from '../../stores';
import { Pill } from '../Pill/Pill';
import { styled, theme } from '../style/Style.config';
import { CardTitle } from '../Typography/CardTitle';
import { handleClickOnCard } from './handlers';

interface ICardProps {
  title: string;
  imageUrl: string;
  technos: string[];
  isActive?: boolean;
  description?: string;
  cardPosition: number;
  // updateLastPosition: (position: number) => void;
}

const StyledCard = styled('div', {
  height: '500px',
  width: '350px',
  minWidth: '310px',
  borderRadius: '20px',
  background: theme.colors.light.value,
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  transition: '0.2s all ease-in-out',
  '&:hover': {
    cursor: 'pointer',
    outline: '2px solid #7C8594'
  },

  variants: {
    isActive: {
      true: {
        transform: 'scale(1.1)'
      },
      false: {
        opacity: 0.7
      }
    }
  }
});

const StyledCardTopSection = styled('figure', {
  flex: 1,
  img: {
    width: '100%',
    borderRadius: '20px'
  }
});

const StyledCardBottomSection = styled('div', {
  flex: 1
});

function Card(props: ICardProps) {
  const { storePortfolio } = useStore();

  const handleClick = () => {
    // props.updateLastPosition(props.cardPosition);
  };

  return (
    <StyledCard isActive={props.isActive} onClick={handleClickOnCard(storePortfolio)(props.title, props.cardPosition)}>
      <StyledCardTopSection>
        <img src={props.imageUrl} />
      </StyledCardTopSection>
      <StyledCardBottomSection>
        <CardTitle>{props.title}</CardTitle>
        <div style={{ display: 'flex', gap: 5 }}>
          {props.technos.map((tech, i) => (
            <Pill key={tech + i} name="tech" />
          ))}
        </div>
        <div>{props.description}</div>
      </StyledCardBottomSection>
    </StyledCard>
  );
}

export default observer(Card);
