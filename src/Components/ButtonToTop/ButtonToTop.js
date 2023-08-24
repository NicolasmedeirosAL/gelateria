import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { useLocation } from 'react-router-dom'
import './style.css'

const ScrollToTopButton = () => {
  const { pathname } = useLocation
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-button ${showButton ? 'visible' : ''}`}
    >
      <img src="./assets/ice-cream-button.png" alt="botão volta inicio" />
    </button>
  )
}

export default ScrollToTopButton
