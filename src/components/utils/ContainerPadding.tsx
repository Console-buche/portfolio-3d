import { styled } from '@stitches/react';
import * as React from 'react';

interface IContainerPaddingProps {
  children: React.ReactNode;
}

const StyledContainerPadding = styled('div', {
  maxWidth: '92rem',
  height: '50%',
  flex: 1
});

function ContainerPadding(props: IContainerPaddingProps) {
  return <StyledContainerPadding>{props.children}</StyledContainerPadding>;
}

export default ContainerPadding;
