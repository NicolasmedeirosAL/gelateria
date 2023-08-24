import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from '../Pages/Home'
import Sabores from '../Pages/Sabores'
import Sobre from '../Pages/Sobre'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const Rotas = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Sabores" element={<Sabores />} />
      <Route path="/Sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
)
export default Rotas
