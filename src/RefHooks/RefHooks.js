import UseRefExample from "./UseRefExample"
import CreateRefExample from "./CreateRefExample"
import CreateUseRefExp from "./Create_Use_Ref_Exp"
import { Link } from "react-router-dom";
// import refreRender from "../src/RefHooks/RefRender"
import RefReRender from "./RefRender"

function RefHooks() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/">Home</Link>
      <h1>Ref Hooks</h1>
        <br/>
        <p>
         Component one to Use Ref Example.
        </p>
        <UseRefExample/>
        <br/>
        <p>
         Component two to Create Ref Example.
        </p>
        <CreateRefExample/>
        <br/>
        <p>
         Component three to Create and Use Ref Example.
        </p>
        <CreateUseRefExp/>
        <br/>
         <RefReRender/>
      </header>
    </div>
  );
}

export default RefHooks;
