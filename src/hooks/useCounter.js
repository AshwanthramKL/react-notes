import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [counter, setCounter] = useState(initialVal);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };

  const decrease = () => {
    setCounter((prev) => prev - 1);
  };

  const restart = () => {
    setCounter(0);
  };

  return { counter, increase, decrease, restart };
};
