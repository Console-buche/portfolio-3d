import { StorePortfolio } from '@/stores/StorePortfolio';
import { TransitionDirection } from '@/stores/types';

export const handleAnchorClick =
  (storePorfolio: StorePortfolio) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    storePorfolio.updateTransition(TransitionDirection.up);

    const { href } = e.currentTarget;
    setTimeout(() => {
      window.location.href = href;
      storePorfolio.updateTransition(TransitionDirection.down);
    }, 1500);
  };
