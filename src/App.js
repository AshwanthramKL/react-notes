import "./App.css";
// import { useToggle } from "./hooks/useToggle";
// import { Cat } from "./component/Cat";
import {Counter} from "./component/Counter"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const client = new QueryClient({
  //   defaultOptions: { queries: { refetchOnWindowFocus: true } },
  // });
  return (
    <div className="App">
      {/* <QueryClientProvider client={client}> */}
        <Counter />
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
