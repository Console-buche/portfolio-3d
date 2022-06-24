import { styled } from '@stitches/react';
import * as React from 'react';
import ContainerPadding from '../utils/ContainerPadding';

export interface IScreenContainerProps {
  children: React.ReactNode;
  isMenuOpen?: boolean;
  id: string;
  position?: 'over';
}

const StyledContainer = styled('section', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.5s transform ease-in-out',
  position: 'relative',

  variants: {
    tuDegage: {
      true: {
        position: 'absolute',
        transitionDelay: '300ms',
        transform: 'translate3d(-75%,0,0)'
      }
    },
    position: {
      over: {
        position: 'absolute',
        top: 0
      }
    }
  }
});

function ScreenContainer(props: IScreenContainerProps) {
  return (
    <StyledContainer tuDegage={props.isMenuOpen} position={props.position}>
      <ContainerPadding>
        <section id={props.id}>{props.children}</section>
      </ContainerPadding>
    </StyledContainer>
  );
}

export default ScreenContainer;
