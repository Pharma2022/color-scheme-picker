import React from 'react'

const Title = ({isDark}) => {
    const darkClass=isDark? 'dark':""
  return (
    <h1 className={`title ${darkClass}`}>Shah's Color Scheme Picker </h1>
  )
}

export default Title