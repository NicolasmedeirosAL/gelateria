import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

import './style.css'
export default function Sabores() {
  return (
    <>
      <Header />
      <main>
        <section className="secao-banner-sabores">
          <div className="titulo-banner-sabores">
            <h1>Nossos Sabores</h1>
          </div>
        </section>

        <section className="secao-sabores limite-secao">
          <h2>Nossos sabores</h2>
          <div className="sabores-sorvetes-container">
            <div className="card-sorvete">
              <img src="./assets/sabor-oreo.png" alt="sorvete de oreo" />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor de Oreo. Uma explosao de Sabor.</p>
            </div>
            <div className="card-sorvete">
              <img
                src="./assets/sabor-pistache.png"
                alt="sorvete de pistache"
              />
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div className="card-sorvete">
              <img
                src="./assets/sabor-cookies-avela.png"
                alt="sorvete de cookies com avelã"
              />
              <h3>Sorvete Cookies & avelã</h3>
              <p>O nosso melhor sorvete. Você vai adoras o sabor.</p>
            </div>
            <div className="card-sorvete">
              <img src="./assets/sorbet-kiwi.png" alt="sorvete de kiwi" />
              <h3>Sorvete de Kiwi</h3>
              <p>
                Delicioso e resfrecante sorvete sabor kiwi. Rico em vitamina C.
              </p>
            </div>
            <div className="card-sorvete">
              <img src="./assets/sorbet-morango.png" alt="sorvete de morango" />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div className="card-sorvete">
              <img src="./assets/sorbet-limao.png" alt="sorvete de limão" />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>o incrivel sorvete de limão siciliano vai te encantar.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
