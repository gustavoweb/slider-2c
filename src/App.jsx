import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos"></section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
