import { styled } from "@stitches/react";
import Header from "./components/Header/Header";
import MenuDrawer from "./components/MenuDrawer/MenuDrawer";
import Scene from "./components/Scene/Scene";
import ScreenContainer from "./components/ScreenContainer/ScreenContainer";
import ScreenTitle from "./components/ScreenTitle/ScreenTitle";
import "antd/dist/antd.css";
import "./index.css";
import React from "react";
import { useStore } from "./stores";
import { observer } from "mobx-react-lite";
import Slideshow from "./components/Slideshow/Slideshow";
import SceneTransition from "./components/SceneTransition/SceneTransition";

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
          <ScreenTitle>
            <span>Hi my</span>
            <span>name is Console_Buche</span>
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
