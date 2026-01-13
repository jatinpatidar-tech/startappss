import { useState } from "react";
import "./App.css";

function App() {
  let  [count, setCounter] = useState(0);

  function increment() {

    // setCounter(count +1);
    // setCounter(count +1);
    setCounter(count =>count+1);
    setCounter(count =>count+1);
    console.log("After Increment", count);
    
  }

  function decrement() {
    if (count === 0) {
      alert("Counter cannot be negative");
      return;
    }
    setCounter(count - 1);
  }

  return (
    <div className="container">
        <h1 className="count">{count}</h1>
        <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() =>{return setCounter(0)}}>Reset</button>
        </div>

    </div>
  );
}

export default App;
