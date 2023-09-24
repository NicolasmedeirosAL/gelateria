
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Header() {
  const [toogleMenu, setToogleMenu] = useState(false)

  const menuShow = () => {
    setToogleMenu(!toogleMenu)
  }
  return (

    
    <header>
      <div className="menu-bar limite-secao">
        <Link to='/'>
          <img className="logo" src="./assets/logo.png" alt="Logo" />
        </Link>
      
        <nav id='menu-links' className={toogleMenu?'menu-open':'menu-closed'}>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/Sabores">
            Sabores
          </Link>
          <Link className="link" to="/Sobre">
            Sobre
          </Link>
        </nav>
          <button className='menu-btn' onClick={menuShow}>menu</button>
      </div>
    </header>
  )
}
