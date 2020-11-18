import React, { createContext, useContext } from 'react'
import { observable } from 'mobx'
import AppleStore from './apple'

class Store {
  @observable appleStore: AppleStore = new AppleStore()
}

const StoreContext = createContext<Store>(null)

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={new Store()}>{children}</StoreContext.Provider>
)

export const useStore = () => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store
}
