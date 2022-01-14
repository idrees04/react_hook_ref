import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import UesRefHook from "../src/RefHooks/RefHooks"
import ReducerHook from "../src/ReducerHooks/ReducerHooks"

// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="UesRefHookLink" element={<UesRefHook />} />
              <Route path="ReducerHookLink" element={<ReducerHook initialCount= {5} />} /> 
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
