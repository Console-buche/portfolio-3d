import { styled } from "@stitches/react";
import "antd/dist/antd.css";
import { observer } from "mobx-react-lite";
import React from "react";

import Header from "@components/Header/Header";
import MenuDrawer from "@components/MenuDrawer/MenuDrawer";
import Scene from "@components/Scene/Scene";
import SceneTransition from "@components/SceneTransition/SceneTransition";
import ScreenContainer from "@components/ScreenContainer/ScreenContainer";
import ScreenTitle from "@components/ScreenTitle/ScreenTitle";
import Slideshow from "@components/Slideshow/Slideshow";

import "./index.css";

const StyledAppContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
});

const StyledNawak = styled("main", {
  height: "100%",
  width: "100%",
  fontSize: "13rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  flexDirection: "column",
  fontFamily: "Fascinate",
});

const StyledBgTitre = styled("span", {
  background: "orange",
  color: "white",
  letterSpacing: "2px",
  padding: "0 10px",
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
      <MenuDrawer onClose={handleMenuClick} visible={isMenuOpen} />
      <StyledAppContainer>
        <ScreenContainer id="bureau" position="over">
          <ScreenTitle subtitle="Banane un mot prepuce community omnivore honeybadger chapiteau grange">
            <span>Hi my</span>
            <span>
              I name is <StyledBgTitre>Console_Buche</StyledBgTitre>
            </span>
          </ScreenTitle>
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
    </>
  );
}

export default observer(App);
