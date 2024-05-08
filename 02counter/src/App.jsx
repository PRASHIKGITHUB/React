import { useState } from 'react'
import './App.css'

function App() {
  
  //hooks in play
  const [counter, setCounter]  = useState(15)  //default value goes inside useState
  
  const addValue = () => {
    if(counter<=19){
      setCounter(prevCounter => prevCounter + 1)
      setCounter((prevCounter)=>prevCounter+1) //it will callback
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
      onClick={addValue} //onclick requires a function 
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
