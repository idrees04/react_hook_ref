import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorCatchHookLife from "../ErrorBoundary"

function HookLifeCycleUseEffect() {
     const [count, setCount] = useState(0);
  
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
      switch (e){
        case "+":
          setCount(count+1)
          break;
          case "-":
            setCount(count-1)
            break;
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
         </ErrorCatchHookLife>  
        </>
  );
}
export default HookLifeCycleUseEffect;
