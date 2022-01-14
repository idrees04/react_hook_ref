import { useReducer } from "react";
import { Link } from "react-router-dom";
//const initialCount =  10 ;
function lazyInitialization(initialCount) {
return {count: initialCount};
}

function reducerFunction(state, action) {
    // {type:"ADD"}
switch (action.type) {
    case "ADD":
     return { count: state.count + 1 };
    case "SUB":
     return { count: state.count - 1 };
     case "RESET":
         return lazyInitialization(action.payload);
    default:
     throw new Error("No match");
   }
}
function ReducerHooks({initialCount}) {
  const [state, dispatch] = useReducer(reducerFunction, initialCount, lazyInitialization);
  return (<div className="App">
    <Link to="/">Home</Link>
    <br/>
    <br/>
    Count: {state.count}
    <br/>
    <button onClick={()=>dispatch({type: "ADD"})}>ADD</button>
    <button onClick={()=>dispatch({type: "SUB"})}>SUB</button>
    <button onClick={()=>dispatch({type: "RESET", payload: initialCount })}>RESET</button>

  </div>);
}
export default ReducerHooks;