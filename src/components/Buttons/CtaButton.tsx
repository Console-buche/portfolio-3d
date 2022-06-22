import * as React from 'react';
import { styled, theme } from '../style/Style.config';

interface ICtaButtonProps {}

const StyledCtaButton = styled('button', {
  backgroundColor: '#FF923E',
  backgroundSize: '0 0',
  backgroundPosition: '50% 50%',
  color: theme.colors.light.value,
  padding: '15px 30px',
  fontSize: 20,
  borderRadius: 35,
  width: 'fit-content',
  cursor: 'pointer'
});
export function CtaButton(props: ICtaButtonProps) {
  return <StyledCtaButton>Get in touch</StyledCtaButton>;
}
