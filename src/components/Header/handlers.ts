import { StorePortfolio } from '@/stores/StorePortfolio';

export const handleViewModeToggle = (storePortfolio: StorePortfolio) => () => {
  storePortfolio.toggleViewMode();
  console.log(storePortfolio.viewMode);
};
