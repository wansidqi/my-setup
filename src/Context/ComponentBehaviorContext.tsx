import React, { createContext, useContext, useState } from "react";

/// Create a context with the provided type
const AppContext = createContext<ContextType | null>(null);

/// Create a custom hook to access the context value
export function useComponentContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useComponentContext must be used within a ContextProvider"
    );
  }
  return context;
}

/// Define the type for the context value
type ContextType = {
  theme: boolean;
  switchTheme: () => void;
};

function ComponentBehaviorContext(props: React.PropsWithChildren<{}>) {
  const [theme, setTheme] = useState(true);

  const switchTheme = () => setTheme(!theme);

  const contextValue: ContextType = {
    theme,
    switchTheme
  };

  return <AppContext.Provider value={contextValue} {...props} />;
}

export default ComponentBehaviorContext;
