import { Fragment, useState } from 'react'
import hexPlaceholderArray from './data'
import './App.css'
import GridItem from './components/GridItem'
import Grid from './components/Grid'
import { nanoid } from 'nanoid'
import Switch from 'react-switch'


function App() {

      const [{color,colorScheme},setForm]= useState(   {color:"#F55A5A",colorScheme:"monochrome"   } )
      const [palette,setPalette]=useState(hexPlaceholderArray)
      const [isDark,setIsDark]=useState(false)

      const toggleDark=()=>setIsDark(prev=>!prev)

      const handleChange= ({target:{name,value}})=>setForm(prev=>({...prev,[name]:value}))
      
      
      const getScheme= async (e)=>  {
        e.preventDefault()
      const res= await fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1,7)}&mode=${colorScheme}&count=5`)
      const {colors}= await res.json() 
      setPalette(colors.slice(0,6))      
    } 
    const copy = async e=>   await navigator.clipboard.writeText(e.target.getAttribute('value'))
    
    const setHtml= data=>  data.map(({hex:{value}}) =>  ( <GridItem key={nanoid()} value={value} onClick={copy} isDark={isDark}/>))



    
    const darkClass=isDark?'dark':""


    const myPalette= setHtml(palette)


          return (
            <div className={`App ${darkClass}`}>
              <section className='color-input-section flex-col justify-center'>
                <div className="container flex-row justify-center align-center">
                <h1 className={`title ${darkClass}`}>Shah's Color Scheme Picker </h1>
                  

                <label className={`switch-label flex-row space-between align-center ${isDark&&'dark'}`}>{isDark?'Dark':'Light' }
                <Switch  
                className='switch'
                  // offColor='#2B283A'
                  onColor='#D1D5DB'
                  onHandleColor='#2B283A'
                  // offHandleColor='#D1D5DB'
                  onChange={toggleDark} 
                  handleDiameter={10}
                  height={14}
                  width={28}
                  checked={isDark} 
                  checkedIcon={false}
                  uncheckedIcon={false} />
              </label>

                </div>


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

              </section>
             
                <Grid>
                  {myPalette}
                </Grid>
               
            </div>
          )
}

export default App
