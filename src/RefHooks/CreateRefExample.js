import { createRef } from "react";

function CreateRefExample() {
  const inputElement = createRef(); 

  const handleInput = () => {
    inputElement.current.focus();
  };
      return (
        <>
          <h3>createRef Hook Example:</h3>
          <p>whenever Component will <b>ReRender</b> CreateRef will Create <b>new Reference</b> of each Render</p>
          <input ref={inputElement} type="text" />
          <button onClick={handleInput}>click to Focus</button>

        </>
      );
}
export default (CreateRefExample);