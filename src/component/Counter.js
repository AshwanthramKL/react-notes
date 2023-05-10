import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const {counter, increase, decrease, restart} = useCounter();

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={restart}>Set to 0</button>
    </>
  );
};
