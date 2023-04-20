import "./App.css";

function App() {
  const age = 19;
  const isGreen = false;

  return (
    <div className="App">
      {age > 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{ color: isGreen ? "green" : "brown" }}> THIS IS A COLOR</h1>

      {isGreen && <button>This is a button</button>}
    </div>
  );
}

export default App;
