import React from 'react'
import { useToggleContext } from '../Context/Toggle'

const Grid = ({children}) => {

 const {darkClass}=useToggleContext()
  
  return (
    <section className={`container color-grid-section-container ${darkClass}`}>
        <div className="container grid">
            {children}
        </div>
    </section>
  )
}

export default Grid