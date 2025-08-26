import { useState } from 'react'
import './App.css'
import Carmy from './assets/cap-army.jpg'
import Cjoa from './assets/cap-joaninha.jpg'
import Curs from './assets/cap-ursinho.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Capacete Joaninha</h2>
              <p className="desc">Proteção ao nível kevlar acoplada ao Estilo Joaninha (Rodolia cardinalis)</p>
              <p className="preco">R$ 299,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Capacete PUBG</h2>
              <p className="desc">Seu galinaceo protegido sem perder o estilo militar dos games online de battle royale.</p>
              <p className="preco">R$ 399,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Capacete Urso Ted</h2>
              <p className="desc">Une proteção, segurança e clarto um dos personagens mais carismáticos do cinema.</p>
              <p className="preco">R$ 299,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
