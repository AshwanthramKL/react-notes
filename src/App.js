import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
        <button onClick={() =>{
          setCount(count++)
        }}>Increase</button>
        <button onClick={() =>{
          setCount(count--)
        }}>Decrease</button>
        <button onClick={() =>{
          setCount(0)
        }}>Set to Zero</button>
        
        <h1>{count}</h1>
    </div>
  );
}

export default App;
