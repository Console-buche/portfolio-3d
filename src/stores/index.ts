import { createContext, useContext } from 'react';
import StoreCam from './StoreCamera';
import Store from './StorePortfolio';

export const stores = {
  storePortfolio: Store,
  storeCamera: StoreCam
};

export const StoreContext = createContext<typeof stores>(stores);

export const useStore = () => useContext<typeof stores>(StoreContext);
