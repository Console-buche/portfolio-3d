import * as React from 'react';
import { CtaButton } from '../Buttons/CtaButton';
import Chat from '../Chat/Chat';
import ScreenTitle from '../ScreenTitle/ScreenTitle';
import { styled } from '../style/Style.config';
import { ContainerFlex } from '../utils/ContainerFlex';
import ContainerPadding from '../utils/ContainerPadding';

interface IJumbotronProps {
  //   children: React.ReactNode;
}

const StyledBgTitre = styled('span', {
  background: 'orange',
  color: 'white',
  letterSpacing: '2px',
  padding: '0 10px'
});

export function Jumbotron(props: IJumbotronProps) {
  return (
    <ContainerFlex direction={'column'}>
      <ScreenTitle subtitle="Banane un mot prepuce community omnivore honeybadger chapiteau grange">
        <span>Salut</span>
        <span>
          Je m'appelle <StyledBgTitre>Console_Buche</StyledBgTitre>
        </span>
        {/* START: Not sure you will use it in here  */}
        <Chat />
        {/* END: Not sure you will use it in here  */}
      </ScreenTitle>
      <CtaButton />
    </ContainerFlex>
  );
}
