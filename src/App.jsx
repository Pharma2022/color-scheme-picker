
import './App.css'
import Grid from './components/Grid'
import Form from './components/Form'
import SwitchButton from './components/SwitchButton'
import Title from './components/Title'
import { useToggleContext } from './Context/Toggle'
import { usePaletteContext } from './Context/Palette'


function App() {

      const {darkClass}=useToggleContext()
      const {myPalette}=usePaletteContext()

     
          return (
            <div className={`App ${darkClass}`}>
              <section className='color-input-section flex-col justify-center'>
                <div className="container flex-row justify-center align-center">
                  <Title />
                  <SwitchButton />
                </div>
                <Form/>
              </section>
              <Grid>
                {myPalette}
              </Grid>
            </div>
          )
}

export default App
