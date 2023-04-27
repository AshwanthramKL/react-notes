import "./App.css";

function App() {
  const names = ["Pedro", "Jake", "Mike", "Jack", "Kyle"]

  return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 className="name" key={key}>{name}</h1>
      })}
    </div>
  );
}

export default App;
