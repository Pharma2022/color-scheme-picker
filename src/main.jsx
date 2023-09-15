import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToggleContextProvider } from './Context/Toggle'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ToggleContextProvider>
        <App />
    </ToggleContextProvider>
 ,
)
