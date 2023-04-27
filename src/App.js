import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setinputValue] = useState("");

  const handleInputchange = (event) => {
    setinputValue(event.target.value);
  };
  
  return (
    <div className="App">
      <input type="text" onChange={handleInputchange} />
      <h1>{inputValue}</h1>
    </div>
  );
}

export default App;
