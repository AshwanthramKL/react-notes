import "./App.css";
import { Person } from "./component/Person";
function App() {
  return (
    <div className="App">
      <Person
        name="Ash"
        email="ash@gmail.com"
        age={12}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

export default App;
