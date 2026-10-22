import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiStatus, setApiStatus] = useState<string | null>(null)

  async function checkApi() {
    setApiStatus('Comprobando...')
    try {
      const res = await fetch('/api/health')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: { status: string; message: string } = await res.json()
      setApiStatus(`${data.status}: ${data.message}`)
    } catch (err) {
      setApiStatus(`Error: ${err instanceof Error ? err.message : String(err)}`)
    }
  }


  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
        type='button'
        onClick={() => checkApi()}>
          test de api
        </button>
        {apiStatus && <p>{apiStatus}</p>}
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
