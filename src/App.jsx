import { useState } from 'react'
import './App.css'


function CounterApp() {
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
    <div className='container'>
      <div className='counterAppDiv'>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <div className='buttonGroup'>
    <button className='btn-1' onClick={addPlus} >+</button>
    <button className='btn-2' onClick={addmines} >-</button>
    <button className='btn-3' onClick={reset} >Reset</button>
    </div>
    </div>
    </div>
  )
}

export default CounterApp
