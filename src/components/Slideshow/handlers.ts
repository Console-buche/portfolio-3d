import { Project } from "../../assets/types";
import { StorePortfolio } from "../../stores/StorePortfolio";

export const handleClickOnCard =
  (store: StorePortfolio) =>
  (cardTitle: string, cardPosition: number) =>
  () => {
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
  let distance = centralCardIndex - cardIndex;
  const direction = distance > 0 ? 1 : -1; // inverted
  distance = Math.abs(distance);
  const offsetX = (slideShowWidth / cardCount) * distance * direction;

  console.log(offsetX);
  return {
    offsetX,
    distance,
    direction,
  };
};
