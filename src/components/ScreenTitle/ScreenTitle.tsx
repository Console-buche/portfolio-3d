import { styled } from "@stitches/react";
import * as React from "react";

interface IScreenTitleProps {
  screenName?: string;
  children: React.ReactNode;
}

const StyledTitle = styled("dd", {
  transformOrigin: "left",
  fontSize: "64px",
  fontWeight: "600",
  fill: "#091434",
  letterSpacing: "-0.5px",
  display: "flex",
  flexDirection: "column",
});

function ScreenTitle(props: IScreenTitleProps) {
  return (
    <dl>
      <dt>{props.screenName}</dt>
      <StyledTitle>
        {React.Children.toArray(props.children).map((boutDphrase) => (
          <span>{boutDphrase}</span>
        ))}
      </StyledTitle>
    </dl>
  );
}

export default ScreenTitle;
