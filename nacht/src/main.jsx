import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Home from "./Home.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Navbar />
    <Home />

  </StrictMode>,
)
