import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addPlus = (()=> {
    setCount(count + 1)
  })

  const addmines = (()=> {
    setCount(count - 1)
  })

  const reset = (()=> {
    setCount(0)
  })

  return (
    <>
     <h1>Counter App</h1>
     <h3>{count}</h3>
    <button onClick={addPlus} style={btn_1}>+</button>
    <button onClick={addmines} style={btn_2}>-</button>
    <button onClick={reset} style={btn_3}>Reset</button>
    </>
  )
}

export default App

const btn_1 = {
  marginRight: '20px',
  backgroundColor: 'green',
  textAlign: 'center'
}

const btn_2 = {
  marginRight: '60px',
  backgroundColor: 'red',
  textAlign: 'center'
}

const btn_3 = {
  textAlign: 'center'
}
