import * as React from 'react';
import { styled, theme } from '../style/Style.config';

interface ISlideshowButtonProps {
  children: React.ReactNode;
}

const StyledSlideShowButton = styled('button', {
  background: '#FF923E',
  height: theme.size.buttonCircle.value,
  width: theme.size.buttonCircle.value,
  borderRadius: theme.size.buttonCircle.value,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export function SlideshowButton(props: ISlideshowButtonProps) {
  return <StyledSlideShowButton {...props} />;
}
