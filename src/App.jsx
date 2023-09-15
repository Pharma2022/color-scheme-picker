import { Fragment, useEffect, useState } from 'react'
import hexPlaceholderArray from './data'
import './App.css'
import GridItem from './components/GridItem'
import Grid from './components/Grid'
import { nanoid } from 'nanoid'
import Switch from 'react-switch'
import Form from './components/Form'
import SwitchButton from './components/SwitchButton'
import Title from './components/Title'


function App() {

  const [{color,colorScheme},setForm]= useState(   {color:"#F55A5A",colorScheme:"monochrome"   } )
  const [palette,setPalette]=useState(hexPlaceholderArray)
      const [isDark,setIsDark]=useState(false)
      const [myPalette,setMyPalette]=useState(setHtml(palette))
      const toggleDark=()=>setIsDark(prev=>!prev)
      const darkClass=isDark?'dark':""
      
      const handleChange= ({target:{name,value}})=>setForm(prev=>({...prev,[name]:value}))
      
      
      const getScheme= async (e)=>  {
        e.preventDefault()
        
        const res= await fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1,7)}&mode=${colorScheme}&count=5`)
        const {colors}= await res.json() 
        setPalette(colors.slice(0,6))      
        
      } 
      
      const copy = async e=>   await navigator.clipboard.writeText(e.target.getAttribute('value'))
    
      useEffect(()=>setMyPalette(
        palette.map(({hex:{value}}) =>  
          ( <GridItem 
              key={nanoid()} 
              value={value} 
              onClick={copy} 
              isDark={isDark}
              />))

    ),[])
     




          return (
            <div className={`App ${darkClass}`}>
              <section className='color-input-section flex-col justify-center'>
                <div className="container flex-row justify-center align-center">
                  <Title isDark={isDark}/>
                  <SwitchButton toggleDark={toggleDark} isDark={isDark}/>
                </div>
              <Form
                getScheme={getScheme}
                handleChange={handleChange}
                color={color}
                colorScheme={colorScheme}
                isDark={isDark}
              />
              </section>
              <Grid>
                {myPalette}
              </Grid>
            </div>
          )
}

export default App
