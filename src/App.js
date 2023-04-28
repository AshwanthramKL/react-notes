import "./App.css";
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "green" : "black");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{color: textColor}}>This is a secret text in a secret color</h1>
    </div>
  );
}

export default App;
