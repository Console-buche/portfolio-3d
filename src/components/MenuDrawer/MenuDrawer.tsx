import { styled } from '@stitches/react';
import { Drawer } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';
import { handleAnchorClick } from './handlers';

interface IMenuDrawerProps {
  onClose: () => void;
  visible: boolean;
}

const StyledContainer = styled('menu', {
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  flexDirection: 'column',
  gap: '60px'
});

const StyledAnchor = styled('a', {
  fontSize: '3em',
  fontWeight: 'bold',
  color: 'black'
});

function MenuDrawer(props: IMenuDrawerProps) {
  const { storePortfolio } = useStore();

  return (
    <Drawer width={550} closable={false} placement="right" onClose={props.onClose} visible={props.visible}>
      <StyledContainer>
        <li>
          <StyledAnchor href={'#bureau'} onClick={handleAnchorClick(storePortfolio)}>
            Home
          </StyledAnchor>
        </li>
        <li>
          <StyledAnchor href={'#labo'} onClick={handleAnchorClick(storePortfolio)}>
            About
          </StyledAnchor>
        </li>
        <li>
          <StyledAnchor href={'#projets'} onClick={handleAnchorClick(storePortfolio)}>
            Projets
          </StyledAnchor>
        </li>
        <li>
          <StyledAnchor href={'#contact'} onClick={handleAnchorClick(storePortfolio)}>
            Contact
          </StyledAnchor>
        </li>
      </StyledContainer>
    </Drawer>
  );
}

export default observer(MenuDrawer);
