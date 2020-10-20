import { createContext, useContext } from 'react'

import countStore from './mcount'

const stores = { countStore }
export const StoresContext = createContext(stores);
const useStores = () => useContext(StoresContext);



function useCountStore() {
  const { countStore } = useStores();
  
  return countStore;
}

export {
  stores,
  useCountStore
};