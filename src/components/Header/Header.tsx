import { useStore } from '@/stores';
import { ViewMode } from '@/stores/types';
import { styled } from '@stitches/react';
import { observer } from 'mobx-react-lite';
import Assets from '../../assets/assets';
import { ButtonMenu } from '../Buttons/ButtonMenu';
import { handleViewModeToggle } from './handlers';

interface IAppProps {
  onMenuButtonClicked: () => void;
}

const StyledHeader = styled('header', {
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  zIndex: 9999
});

const StyledContainerPadding = styled('div', {
  maxWidth: '92rem',
  height: '50%',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between'
});

function Header(props: IAppProps) {
  const {
    storePortfolio,
    storePortfolio: { viewMode }
  } = useStore();
  return (
    <StyledHeader id={'bureau'}>
      <StyledContainerPadding>
        <img src={Assets.pictures.logo} width={64} />
        <menu style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <li>
            <button onClick={handleViewModeToggle(storePortfolio)}>
              {viewMode === ViewMode.normal ? 'View Screen' : 'Back to default'}
            </button>
          </li>
          <li>
            <ButtonMenu onClick={props.onMenuButtonClicked} />
          </li>
        </menu>
      </StyledContainerPadding>
    </StyledHeader>
  );
}

export default observer(Header);
