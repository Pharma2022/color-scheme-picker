import React from 'react'
import { useToggleContext } from '../Context/Toggle'

const Title = () => {
        const {darkClass}=useToggleContext()
  return (
    <h1 className={`title ${darkClass}`}>Shah's Color Scheme Picker </h1>
  )
}

export default Title