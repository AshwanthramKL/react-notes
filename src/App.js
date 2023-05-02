import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("");

  const generateExcuse = (reason) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>

      <button
        id="party"
        onClick={() => {
          generateExcuse("party");
        }}
      >
        Party
      </button>
      <button
        id="family"
        onClick={() => {
          generateExcuse("family");
        }}
      >
        Family
      </button>
      <button
        id="office"
        onClick={() => {
          generateExcuse("office");
        }}
      >
        Office
      </button>

      <h1>{excuse}</h1>
    </div>
  );
}

export default App;
