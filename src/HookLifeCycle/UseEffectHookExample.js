import React from "react";
import Child from "./UseEffectHookExampleChild"
import { Link } from "react-router-dom";

function UseEffectHook() {
  console.log("App: render start");

  const [showChild, setShowChild] = React.useState(() => {
    console.log("App: useState(() => false)");
    return false;
  });

  console.log(`App: showChild = ${showChild}`);

  React.useEffect(() => {
    console.log("App: useEffect(() => {})");
    // This gets called after every render, by default
    // this hook will be get called on every render of the component which can be dangerous.
     // (the first one, and every one after that)
    return () => {
        //  to implement componentWillUnmount,
      console.log("App: useEffect(() => {}) cleanup");
    };
  });

  React.useEffect(() => {
    console.log("App: useEffect(() => {}, [])");
    //I Only run once (When the component gets mounted)
    return () => {
      console.log("App: useEffect(() => {}, []) cleanup");
    };
  }, []);

  React.useEffect(() => {
    console.log("App: useEffect(() => {}, [showChild])");
    // I run everytime my condition is changed
    //eg componentDidMount() 
    return () => {
      console.log("App: useEffect(() => {}, [showChild]) cleanup");
      //Use this return as a 'clean up tool' (this runs before the actual code)
      //eg componentWillUnmount()
    };
  }, [showChild]);

  const element = (
    <>
    <p>UseEffect Component LifeCycle Example</p>
    <br/>
    <Link to="/">Home</Link> 
    <br/>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{" "}
        show child
      </label>
      <div>
        {showChild ? <Child /> : null}
      </div>
    </>
  );

  console.log("App: render end");

  return element;
}
export default UseEffectHook;