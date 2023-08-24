import { Link } from 'react-router-dom'
import './style.css'
export default function Header() {
  return (
    <header>
      <div className="menu-bar limite-secao">
        <Link to='/'>
          <img className="logo" src="./assets/logo.png" alt="Logo" />
        </Link>
      
        <nav className="menu-links">
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
      </div>
    </header>
  )
}
