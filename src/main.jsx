import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {gsap} from "gsap"

gsap.config({trialWarn: false})

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <div className='App' >
    <App />
  // </div>
  // </StrictMode>,
)
