import { action, computed, makeObservable, observable } from 'mobx';
import cardsData, { ICard } from '../data/cards';
import { TransitionDirection, ViewMode } from './types';

interface IStorePortfolioOptions {
  slideshowData: ICard[];
}

export class StorePortfolio {
  private slideShowData = observable.array<ICard>([]);
  private activeCard = observable.box<string | null>(null);
  private activeCardPosition = observable.box<number | null>(null);
  private $viewMode = observable.box<ViewMode>(ViewMode.normal);
  private $transitionDirection = observable.box<TransitionDirection>(TransitionDirection.stopped);

  constructor(options: IStorePortfolioOptions) {
    makeObservable(this);

    this.updateSlideshowData(options.slideshowData);
  }

  /**
   * Actions
   */
  @action
  updateSlideshowData(cards: IStorePortfolioOptions['slideshowData']) {
    this.slideShowData.replace(cards);
  }

  @action
  updateActiveCard(cardTitle: string, cardPosition: number) {
    this.activeCard.set(cardTitle);
    this.activeCardPosition.set(cardPosition);
  }

  @action
  updateTransition(dir: TransitionDirection) {
    this.$transitionDirection.set(dir);
  }

  @action
  toggleViewMode() {
    switch (this.viewMode) {
      case ViewMode.normal:
        return this.$viewMode.set(ViewMode.twitchCam);

      default:
        return this.$viewMode.set(ViewMode.normal);
    }
  }

  /**
   * Computed
   */
  @computed
  get cards(): ICard[] {
    return Array.from(this.slideShowData);
  }

  @computed
  get getActiveCard(): string | null {
    return this.activeCard.get();
  }

  @computed
  get getActiveCardPosition(): number | null {
    return this.activeCardPosition.get();
  }

  @computed
  get transitionDirection(): TransitionDirection {
    return this.$transitionDirection.get();
  }

  @computed
  get viewMode(): ViewMode {
    return this.$viewMode.get();
  }
}

const Store = new StorePortfolio({ slideshowData: cardsData });

export default Store;
