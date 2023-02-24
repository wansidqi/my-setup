import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./css/index.css";
import Home from "./pages/Home";
import CounterComponent from "./Components/CounterComponent";
import { store } from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterComponent />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
