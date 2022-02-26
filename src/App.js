import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import UseRefHook from "../src/RefHooks/RefHooks"
import ReducerHook from "../src/ReducerHooks/ReducerHooks"
import HookLife from "../src/HookLifeCycle/HookLifeCycleUseEffect"
import HookExample from "../src/HookLifeCycle/UseEffectHookExample"
// import ErrorBoundaryPage from './ErrorBoundary';
import React_hook_ref from "./react_hook_ref"


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
              <Route path="react_hook_ref"  element={<UseRefHook />} />
'             <Route path="UseRefHookLink" element={<UseRefHook />} />
              <Route path="ReducerHookLink" element={<ReducerHook initialCount= {5} />} /> 
              <Route path="HookLifeCycleUseEffectLink" element={<HookLife />} /> 
              <Route path="HookExampleLifeCycleUseEffectLink" element={<HookExample />} /> 
              {/* <Route path="ErrorBoundaryPageLink" element={<ErrorBoundaryPage />} />  */}
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
