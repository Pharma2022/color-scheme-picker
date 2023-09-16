import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToggleContextProvider } from './Context/Toggle'
import { PaletteContextProvider } from './Context/Palette'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ToggleContextProvider>
        <PaletteContextProvider>
            <App />
        </PaletteContextProvider>
    </ToggleContextProvider>
 ,
)
