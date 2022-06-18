import { styled } from '@stitches/react';
import * as React from 'react';

interface IScreenTitleProps {
  screenName?: string;
  children: React.ReactNode;
  subtitle?: string;
}

const StyledTitle = styled('dd', {
  fontFamily: 'Poppins',
  transformOrigin: 'left',
  fontWeight: '600',
  fill: '#091434',
  letterSpacing: '-0.5px',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '42px',

  h1: {
    margin: 0
  }
});

const StyledSubtitle = styled('h2', {
  color: '#7C8594',
  fontWeight: 'bold',
  fontSize: '16px'
});

function ScreenTitle(props: IScreenTitleProps) {
  return (
    <dl>
      <dt>{props.screenName}</dt>
      <StyledTitle>
        {React.Children.toArray(props.children).map((boutDphrase, id) => (
          <h2 key={id}>{boutDphrase}</h2>
        ))}
        <StyledSubtitle>{props.subtitle}</StyledSubtitle>
      </StyledTitle>
    </dl>
  );
}

export default ScreenTitle;
