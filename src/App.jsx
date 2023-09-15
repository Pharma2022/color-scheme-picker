import { Fragment, useEffect, useState } from 'react'
import hexPlaceholderArray from './data'
import './App.css'
import GridItem from './components/GridItem'
import Grid from './components/Grid'
import { nanoid } from 'nanoid'

import Form from './components/Form'
import SwitchButton from './components/SwitchButton'
import Title from './components/Title'
import { useToggleContext } from './Context/Toggle'
import usePalette from './hooks/usePalette'


function App() {

      const {darkClass}=useToggleContext()
      const {myPalette,getScheme}=usePalette()

     
          return (
            <div className={`App ${darkClass}`}>
              <section className='color-input-section flex-col justify-center'>
                <div className="container flex-row justify-center align-center">
                  <Title />
                  <SwitchButton />
                </div>
                <Form getScheme={getScheme}/>
              </section>
              <Grid>
                {myPalette}
              </Grid>
            </div>
          )
}

export default App
