import "./App.css";

function App() {
  const name = <h1>MARTIALEAGLE</h1>;
  const age = <h2>21</h2>;
  const email = <h2>k.l.ashwanthram@gmail.com</h2>;

  const user = (
    <div>
      <div>
        {name}
        {age}
        {email}
      </div>
    </div>
  );

  return (
    <div className="App">
      {user}
      {user}
    </div>
  );
}

export default App;
