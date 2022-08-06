import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const increment =() => {
    setCounter(counter+1) ;
  }

  const decrement =() => {
    setCounter(counter-1) ;
  }



  return (
    <div className="App">
      <h3>{counter}</h3>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
