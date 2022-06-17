import { createContext, useContext } from "react";
import Store, { StorePortfolio } from "./StorePortfolio";

export const stores = {
  storePortfolio: Store,
};

export const StoreContext = createContext<typeof stores>(stores);

export const useStore = () => useContext<typeof stores>(StoreContext);
