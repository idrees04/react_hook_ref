import { useRef } from "react";

function UseRefExample() {
  const inputElement = useRef(); 

  const handleInput = () => {
    inputElement.current.focus();
  };
      return (
        <>
          <h3>UseRef Hook Example:</h3>
          <p>useRef returining the <b>same ref for each Render </b> as on the initial rendering</p>
          <input ref={inputElement} type="text" />
          <button onClick={handleInput}>click to Focus</button>
        </>
      );
}
export default (UseRefExample);