import React, { useCallback, useEffect, useState } from "react";
import "./css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [first, setFirst] = useState("This is Parent Component");
  const PROPS = { first };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home {...PROPS} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
