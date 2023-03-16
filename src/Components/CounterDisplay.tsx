import React from "react";
import { useCustomContext } from "../Context";

export default function CounterDisplay() {
  const { increment, decrement, count, dispatch } = useCustomContext();
  const { num } = useCustomContext().state;
  return (
    <>
      <div className="mt-20"> use state count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div className="mb-10" />

      <div>use reducer count: {num}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <div className="mb-10" />
    </>
  );
}
