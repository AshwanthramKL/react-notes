import "./App.css";
import { useToggle } from "./hooks/useToggle";
import { Cat } from "./component/Cat";

function App() {
  const [isVisible, toggle] = useToggle();

  const [isVisible2, toggle2] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"} </button>
      
      <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"} </button>

      {isVisible && <h1> Hidden Text </h1>}{isVisible2 && <h1> Hidden Text 2</h1>}
    </div>
  );
}

export default App;
