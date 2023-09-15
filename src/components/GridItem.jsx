import React,{Fragment} from 'react'

const GridItem = ({value,onClick,isDark}) => {


    const darkClass = isDark? "dark":""


  return (
    <Fragment>     
                <div  className="grid-item cursor" 
                    value={value}
                    style={{backgroundColor: value} }
                    onClick= {onClick}>      
                </div>   
                <div className={`cursor grid-color-name ${darkClass}`} value={value} >
                  {value}
                </div> 
    </Fragment>
  )
}

export default GridItem