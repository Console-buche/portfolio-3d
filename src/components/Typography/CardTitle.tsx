import * as React from 'react';

interface ICardTitleProps {
  children: React.ReactNode;
}

export function CardTitle(props: ICardTitleProps) {
  return <h3>{props.children}</h3>;
}
