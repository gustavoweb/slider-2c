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
              <p className="desc">Notebook Gamer com RGB 1 nucleo e 512Mb de Ram</p>
              <p className="preco">R$ 5.999,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Notebook Xuxa</h2>
              <p className="desc">Notebook Gamer com RGB 1 nucleo e 512Mb de Ram</p>
              <p className="preco">R$ 5.999,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Notebook Xuxa</h2>
              <p className="desc">Notebook Gamer com RGB 1 nucleo e 512Mb de Ram</p>
              <p className="preco">R$ 5.999,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
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
