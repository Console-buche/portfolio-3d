import { styled } from "@stitches/react";
import { ButtonMenu } from "../Buttons/ButtonMenu";

interface IAppProps {
  onMenuButtonClicked: () => void;
}

const StyledHeader = styled("header", {
  position: "absolute",
  top: 0,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  zIndex: 9999,
});

const StyledContainerPadding = styled("div", {
  maxWidth: "92rem",
  // background: "lime",
  height: "50%",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
});

function Header(props: IAppProps) {
  return (
    <StyledHeader id={"bureau"}>
      <StyledContainerPadding>
        <div>Logo</div>
        <menu style={{ display: "flex" }}>
          {/* <li>Bouton 1</li> */}
          <li>
            <ButtonMenu onClick={props.onMenuButtonClicked} />
          </li>
        </menu>
      </StyledContainerPadding>
    </StyledHeader>
  );
}

export default Header;
