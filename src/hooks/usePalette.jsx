import {useState,useEffect} from 'react'
import hexPlaceholderArray from '../data'
import GridItem from '../components/GridItem'
import { nanoid } from 'nanoid'
const usePalette = () => {
    const [palette,setPalette]=useState(hexPlaceholderArray)
    const [myPalette,setMyPalette]=useState(null)
    const getScheme= async (e)=>  {
      e.preventDefault()
      const res= await fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1,7)}&mode=${colorScheme}&count=5`)
      const {colors}= await res.json() 
      setPalette(colors.slice(0,6))      
    } 
    
    useEffect(()=>setMyPalette(
      palette.map(({hex:{value}}) =>  
        ( <GridItem 
            key={nanoid()} 
            value={value} 
            />))

      ),[palette])
  return {palette,myPalette,getScheme}
}

export default usePalette