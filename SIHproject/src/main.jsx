import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HeaderBanner from './components/HeaderBanner/headerBanner.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderBanner/>
  </StrictMode>,
)
