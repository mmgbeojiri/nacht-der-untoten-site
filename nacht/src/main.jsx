import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Home from "./Home.jsx"
import Footer from "./Footer.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import WorldAtWar from "./WorldAtWar.jsx"
import BlackOps1 from './BlackOps1.jsx'
import BlackOps2 from './BlackOps2.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter >
  <StrictMode>
    <Header />
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/WorldAtWar" element={<WorldAtWar />} />
    <Route path="/BlackOps1" element={<BlackOps1 />} />
    <Route path="/BlackOps2" element={<BlackOps2 />} />
    <Route path="*" element={<h1>Place Not Implemented Yet</h1>} />
    </Routes>
    <Footer />
  </StrictMode>
  </BrowserRouter >
)
