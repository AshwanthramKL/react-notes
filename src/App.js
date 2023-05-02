import "./App.css";
import { useState } from "react";
import { Text } from "./Text";

function App() {
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <button>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default App;
