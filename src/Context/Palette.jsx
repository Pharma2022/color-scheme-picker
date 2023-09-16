import React, { createContext, useContext } from 'react'

import usePalette from '../hooks/usePalette'
const PaletteContext=createContext()



export const PaletteContextProvider = ({children}) => {
   
  return (
    <PaletteContext.Provider value={usePalette()}>
        {children}
    </PaletteContext.Provider>
  )
}

export const usePaletteContext=()=>useContext(PaletteContext) 