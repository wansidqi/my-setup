import React, { createContext, useContext, useReducer, useState } from "react";
import { ActionType, initialState, reducer, StateType } from ".";

/// Create a context with the provided type
const AppContext = createContext<ContextType | null>(null);

/// Create a custom hook to access the context value
export function useCustomContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useCustomContext must be used within a ContextProvider");
  }
  return context;
}

/// Define the type for the context value
type ContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const contextValue: ContextType = {
    count,
    increment,
    decrement,
    state,
    dispatch,
  };
  return <AppContext.Provider value={contextValue} {...props} />;
}

export default ContextProvider