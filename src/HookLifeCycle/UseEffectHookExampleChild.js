import React from "react";

function UseEffectHookExampleChild() {
  console.log("    Child: render start");

  const [count, setCount] = React.useState(() => {
    console.log("    Child: useState(() => 0)");
    return 0;
  });

  console.log(`    Child: count = ${count}`);

  React.useEffect(() => {
    console.log("    Child: useEffect(() => {})");
    return () => {
      console.log("    Child: useEffect(() => {}) cleanup");
    };
  });

  React.useEffect(() => {
    console.log("    Child: useEffect(() => {}, [])");
    return () => {
      console.log("    Child: useEffect(() => {}, []) cleanup");
    };
  }, []);

  React.useEffect(() => {
    console.log("    Child: useEffect(() => {}, [count])");
    return () => {
      console.log("    Child: useEffect(() => {}, [count]) cleanup");
    };
  }, [count]);

  const element = (
    <button onClick={() => setCount((previousCount) => previousCount + 1)}>
      {count}
    </button>
  );

  console.log("    Child: render end");

  return element;
}
export default UseEffectHookExampleChild;