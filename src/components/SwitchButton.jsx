import React from 'react'
import Switch from 'react-switch'
const SwitchButton = ({isDark,toggleDark}) => {
  return (
    
    <label className={`switch-label flex-row space-between align-center ${isDark&&'dark'}`}>{isDark?'Dark':'Light' }
    <Switch  
      className='switch'
      onColor='#D1D5DB'
      onHandleColor='#2B283A'
      onChange={toggleDark} 
      handleDiameter={10}
      height={14}
      width={28}
      checked={isDark} 
      checkedIcon={false}
      uncheckedIcon={false} />
  </label>
  )
}

export default SwitchButton