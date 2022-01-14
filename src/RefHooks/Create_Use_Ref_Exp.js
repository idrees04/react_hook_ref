import { useState, createRef, useRef } from "react";
const Create_Use_Ref_Exp = () => {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();
 if (!refFromUseRef.current) {
    refFromUseRef.current= renderIndex; 
  }
 if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
 }
  return (
    <>
      <p>Current render index: {renderIndex}</p>
<p>
  <b>refFromUseRef</b> value: {refFromUseRef.current}
</p>
<p>
  <b>refFromCreateRef</b> value:{refFromCreateRef.current}
</p>
<button onClick={() => setRenderIndex( (prev) => prev + 1)}>
 Cause re-render
</button>
</>
  );
 }
 export default Create_Use_Ref_Exp;