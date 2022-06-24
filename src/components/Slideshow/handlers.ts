import { Project } from '../../assets/types';
import { StorePortfolio } from '../../stores/StorePortfolio';

export const handleClickOnCard = (store: StorePortfolio) => (cardTitle: string, cardPosition: number) => () => {
  store.updateActiveCard(cardTitle, cardPosition);
};

interface IGetOffsetXByIndexParams {
  cardCount: number;
  cardIndex: number;
  slideShowWidth: number;
}

export const getOffsetXByIndex = (params: IGetOffsetXByIndexParams) => {
  const { cardCount, cardIndex, slideShowWidth } = params;

  const centralCardIndex = Math.round(cardCount * 0.5) - 1;
  const cardWidth = slideShowWidth / cardCount;
  const evenCardIndex = cardCount % 2 === 0;
  let distance = centralCardIndex - cardIndex;
  const direction = distance > 0 ? 1 : -1;
  distance = Math.abs(distance);
  const cardOffsetX = evenCardIndex ? cardWidth * 0.5 : 0;
  const offsetX = (slideShowWidth / cardCount) * distance * direction + cardOffsetX;

  return {
    offsetX,
    distance,
    direction
  };
};
