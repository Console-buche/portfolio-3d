import * as React from 'react';
import { styled } from '../style/Style.config';

interface IContainerFlexProps {
  children: React.ReactNode;
  direction: 'column';
}

const StyledContainerFlex = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      column: {
        flexDirection: 'column'
      }
    }
  }
});

export function ContainerFlex(props: Parameters<typeof StyledContainerFlex>[0]) {
  const { direction, ...otherProps } = props;

  return <StyledContainerFlex direction={direction} {...otherProps} />;
}
