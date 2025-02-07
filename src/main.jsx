import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SpotlightCursor from './components/ui/SpotlightCursor.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <SpotlightCursor />
    <App />
  </StrictMode>,
  </BrowserRouter>
)
