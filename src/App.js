import "./App.css";
import { useState } from "react";

function App() {
  
  let [age, setAge] = useState(0); // Initializing a state

  const updateAge = () => {
    setAge(age++);
  };

  return (
    <div className="App">
      <h1>{age}</h1>
      <br />
      <button onClick={updateAge}>Increment</button>
    </div>
  );
}

export default App;
