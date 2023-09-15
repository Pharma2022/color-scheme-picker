import React, { createContext, useContext, useState } from 'react'

 const ToggleContext=createContext()

const useToggle=()=>{

      const [isDark,setIsDark]=useState(false)
      const toggleDark=()=>setIsDark(prev=>!prev)
      const darkClass=isDark?'dark':""

    return {isDark,toggleDark,darkClass}
}

export const ToggleContextProvider = ({children}) => {
   
  return (
    <ToggleContext.Provider value={useToggle()}>
        {children}
    </ToggleContext.Provider>
  )
}

export const useToggleContext=()=>useContext(ToggleContext) 