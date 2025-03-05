import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SpotlightCursor from './components/ui/SpotlightCursor.jsx'
import ColorPaletteVisualizer from './lib/ColorPaletteVisualizer.jsx'
import LenisWrapper from './components/ui/LenisWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <LenisWrapper>
    <SpotlightCursor />
    <App />

    </LenisWrapper>
  </StrictMode>
  </BrowserRouter>
)
