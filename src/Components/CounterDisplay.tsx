import { useComponentContext, useCustomContext } from "../Context";

export default function CounterDisplay() {
  const { increment, decrement, count, dispatch } = useCustomContext();
  const { num } = useCustomContext().state;
  const { theme, switchTheme } = useComponentContext();
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

      <div>theme stats: {theme ? "light" : "dark"}</div>
      <button onClick={switchTheme}>change theme</button>
    </>
  );
}
