import React from 'react'
import { useToggleContext } from '../Context/Toggle'
import { usePaletteContext } from '../Context/Palette'

const Form = () => {

    const {darkClass}=useToggleContext()
    
    const {getScheme,color,colorScheme,handleChange}=usePaletteContext()

  return (
    <form onSubmit={getScheme} className="form container flex-row space-between">
                  <input 
                    type="color" 
                    name='color'
                    onChange={handleChange}
                    value={color}
                    className={`color-input ${darkClass}`} />
                  <select 
                    className={`color-select ${darkClass}`}
                    id="select"
                    name= "colorScheme"
                    value={colorScheme}
                    onChange={handleChange}>  
                      <option value="monochrome">Monochrome</option>
                      <option value="monochrome-dark">Monochrome-dark</option>
                      <option value="monochrome-light">Monochrome-light</option>
                      <option value="analogic">Analogic</option>
                      <option value="analogic-complement">Analogic-complement</option>
                      <option value="triad">Triad</option>
                      <option value="quad">Quad</option>
                  </select>
                  <button className={`get-scheme-btn ${darkClass} cursor`}>Get Color Scheme </button>
                </form>
  )
}

export default Form