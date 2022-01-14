import { useState, useRef } from "react";
function RefReRender() {
    const [modifiedValue, setModifiedValue] = useState(0);

  const countRef = useRef(0);
  const handle = () => { 
  setModifiedValue(countRef.current++);
    console.log(countRef.current);
  };
  console.log("Component Rendered");
  
  return <> 
  <p>we can modify the value of the UseRef without Component reRender. For Example in this case CounterRef will be increment but Component will not reRender so view result open consolr log</p>
  <button onClick={handle}>Click Me</button>
  <br/>
   <p>Modfied Value of UseRef is {modifiedValue} </p>
  </>;
}
export default RefReRender;