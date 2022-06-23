/* eslint-disable react/no-unescaped-entities */
import { styled } from '@stitches/react';
import 'antd/dist/antd.css';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Header from '@components/Header/Header';
import MenuDrawer from '@components/MenuDrawer/MenuDrawer';
import Scene from '@components/Scene/Scene';
import SceneTransition from '@components/SceneTransition/SceneTransition';
import ScreenContainer from '@components/ScreenContainer/ScreenContainer';
import ScreenTitle from '@components/ScreenTitle/ScreenTitle';
import Slideshow from '@components/Slideshow/Slideshow';

import './index.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import { CursorPoint } from './components/Cursor/CursorPoint';
import Chat from './components/Chat';

const StyledAppContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column'
});

const StyledChatContainer = styled('span', {
  position: 'fixed',
  right: 10,
  bottom: 10,
  zIndex: 66666666
  // background: 'lightsalmon'
});

// REMINDER MERCI MOONCHAK LE LIEN VERS LE PORTFOLIO : https://david-hckh.com/

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <SceneTransition />
      <Scene isMenuOpen={isMenuOpen} />
      <Header onMenuButtonClicked={handleMenuClick} />
      <StyledChatContainer>
        <Chat />
      </StyledChatContainer>

      <MenuDrawer onClose={handleMenuClick} visible={isMenuOpen} />
      <StyledAppContainer>
        <ScreenContainer id="bureau" position="over">
          <Jumbotron />
        </ScreenContainer>
        <ScreenContainer id="labo">Le labo avec les bulles</ScreenContainer>
        <ScreenContainer id="projets">
          <ScreenTitle>
            <span>Some things</span>
            <span>I've worked on</span>
          </ScreenTitle>
          <Slideshow />
        </ScreenContainer>
        <ScreenContainer id="contact">
          <ScreenTitle>
            <span>Contact me</span>
          </ScreenTitle>
        </ScreenContainer>
      </StyledAppContainer>
      <CursorPoint />
    </>
  );
}

export default observer(App);
