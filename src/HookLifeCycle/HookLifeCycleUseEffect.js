import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorCatchHookLife from "../ErrorBoundary"

function HookLifeCycleUseEffect() {
     const [count, setCount] = useState(0);
     const [EventError, setEventError] = useState(null);

    useEffect(() => {
      console.log('useEffect 1 '+ count);
  
      return () => {console.log('useEffect 2 '+ count)}
    }, [])
  
    useEffect(() => {
      console.log('useEffect 3 '+ count);
  
      return () => {console.log('useEffect 4 '+ count)} 
    }, [count])
    
    console.log('render')
    const handle = (e) => { 
      try {
      switch (e){
        case "+":
          setCount(count+1)
          break;
          case "-":
            setCount(count-1)
            break;
            default:
              setCount(0)
             break;
      }
    } catch (error) {
      setEventError({ error });
    }
      };
  return (
    <>
         <Link to="/">Home</Link>
    <br/>
    <p>Component Lifecycle using UseEffect</p>
    <br/>
     <ErrorCatchHookLife> 
         {count}
        <br/>
         <button onClick={()=>handle("+")}>increment</button> 
        <br/>
         <button onClick={()=>handle("-")}>Decrement</button> 
        <br/>
        <button onClick={()=>setCount(0)}>Reset</button> 
        <br/>
        <p>
      {  EventError==null?
        EventError :
        ""
        }
        </p>
         </ErrorCatchHookLife>  
        </>
  );
}
export default HookLifeCycleUseEffect;
