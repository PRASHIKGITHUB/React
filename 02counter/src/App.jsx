import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //hooks in play
  const [counter, setCounter]  = useState(15)  //default value goes inside useState
  
  const addValue = () => {
    if(counter<=19){
      setCounter(prevCounter => prevCounter + 1)
    }
  } 
  
  const removeValue = () => {
    if(counter>=1){
      setCounter(prevCounter => prevCounter -1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
