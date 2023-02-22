import "./css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CounterDisplay from "./Components/CounterDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<CounterDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
