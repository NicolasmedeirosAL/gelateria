import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../Components/functions/ScrollToTop'
import ScrollToTopButton from '../Components/ButtonToTop/ButtonToTop'
import Home from '../Pages/Home'
import Sabores from '../Pages/Sabores'
import Sobre from '../Pages/Sobre'

const Rotas = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Sabores" element={<Sabores />} />
      <Route path="/Sobre" element={<Sobre />} />
    </Routes>
    <ScrollToTopButton />
  </BrowserRouter>
)
export default Rotas
