import "./App.css";

function App() {
  
  let age = 0;

  const updateAge = () => {
    age += 1;
    console.log(age);
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
