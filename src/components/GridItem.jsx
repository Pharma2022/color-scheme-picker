import React,{Fragment} from 'react'
import { useToggleContext } from '../Context/Toggle'

const GridItem = ({value}) => {


    const {darkClass}=useToggleContext()
    const copy = async e=>   await navigator.clipboard.writeText(e.target.getAttribute('value'))

  return (
    <Fragment>     
                <div  className="grid-item cursor" 
                    value={value}
                    style={{backgroundColor: value} }
                    onClick= {copy}>      
                </div>   
                <div className={`cursor grid-color-name ${darkClass}`}
                     value={value}
                     onClick={copy} >
                  {value}
                </div> 
    </Fragment>
  )
}

export default GridItem