import './style.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
      <div className="contatos limite-secao">
        <Link to="/">
          <img
            className="footer-logo"
            src="./assets/logo.png"
            alt="logomarca"
          />
        </Link>

        <div>
          <h3>Endereço</h3>
          <p>Av. Bernardinho de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h3>Contato</h3>
          <p>info@meusite.com</p>
          <p>tel:(11)23456-7890 </p>
        </div>
        <div>
          <h3>Horários</h3>
          <p>Aberto todos os dias</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>

      <div className="home-nocopy">
        <p>&copy; Gelateria - 2023 Todos Direitos Reservados.</p>
      </div>
    </footer>
  )
}
