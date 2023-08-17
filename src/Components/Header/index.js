import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="limite-secao">
        <img src="./assets/logo.png" alt="Logo" />
        <nav className='menu-links'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/Sabores">Sabores</Link>
          <Link className='link' to="/Sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}
