import { useStore } from '@/stores';
import { ViewMode } from '@/stores/types';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { CtaButton } from '../Buttons/CtaButton';
import Chat from '../Chat';
import ScreenTitle from '../ScreenTitle/ScreenTitle';
import { styled } from '../style/Style.config';
import { ContainerFlex } from '../utils/ContainerFlex';

interface IJumbotronProps {
  //   children: React.ReactNode;
}
const StyledWrapper = styled('div', {
  transition: '0.25s opacity, 0.5s transform',
  variants: {
    hidden: {
      true: {
        opacity: 0,
        transform: 'translateX(-50px)'
      }
    }
  }
});

const StyledBgTitre = styled('span', {
  background: 'orange',
  color: 'white',
  letterSpacing: '2px',
  padding: '0 10px'
});

function Jumbotron(props: IJumbotronProps) {
  const { storePortfolio } = useStore();

  return (
    <StyledWrapper hidden={storePortfolio.viewMode === ViewMode.twitchCam}>
      <ContainerFlex direction={'column'}>
        <ScreenTitle subtitle="Banane un mot prepuce community omnivore honeybadger chapiteau grange">
          <span>Salut</span>
          <span>
            Je m'appelle <StyledBgTitre>Console_Buche</StyledBgTitre>
          </span>
        </ScreenTitle>
        <CtaButton />
      </ContainerFlex>
    </StyledWrapper>
  );
}

export default observer(Jumbotron);
