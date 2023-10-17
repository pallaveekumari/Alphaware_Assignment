import React, { createContext } from 'react'

export const AppContext = createContext();
const MyContextProvider = ({children}) => {
  return (
    <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
  )
}

export default MyContextProvider