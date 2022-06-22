import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useStore } from '../../stores';
import { styled, theme } from '../style/Style.config';
import Card from './Card';
import { SlideshowButton } from './SlideshowButtons';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { getOffsetXByIndex } from './handlers';

interface ISlideSHowProps {}

const StyledSlideShowContainer = styled('div', {
  zIndex: -1,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.defaultGap.value
});

const StyledSlideShow = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  gap: 50,
  transition: '0.25s transform ease'
});

function SlideShow(props: ISlideSHowProps) {
  const { storePortfolio } = useStore();
  const [slideShowWidth, setSlideShowWidth] = React.useState(0);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref && ref.current) {
      const widthAsNumber = +window.getComputedStyle(ref.current).width.replace('px', '');

      setSlideShowWidth(widthAsNumber);
    }
  }, [ref.current]);

  return (
    <StyledSlideShowContainer>
      <StyledSlideShow
        ref={ref}
        css={{
          transform: `translateX(${
            getOffsetXByIndex({
              cardCount: storePortfolio.cards.length,
              cardIndex: storePortfolio.getActiveCardPosition ?? 2,
              slideShowWidth
            }).offsetX
          }px)`
        }}
      >
        {storePortfolio.cards.map((card, cardPosition) => (
          <Card
            // updateLastPosition={handleSetLastCard}
            key={card.title}
            title={card.title}
            technos={card.tech}
            description={card.description}
            isActive={card.title === storePortfolio.getActiveCard}
            imageUrl={card.image}
            cardPosition={cardPosition}
          />
        ))}
      </StyledSlideShow>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          gap: 15
        }}
      >
        <SlideshowButton>{<AiOutlineArrowLeft color="white" size={24} />}</SlideshowButton>
        <SlideshowButton>{<AiOutlineArrowRight color="white" size={24} />}</SlideshowButton>
      </div>
    </StyledSlideShowContainer>
  );
}

export default observer(SlideShow);
