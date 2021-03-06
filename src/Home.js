import { Link } from "react-router-dom";
import ErrorCatchHome from "../src/ErrorBoundary"


function Home() {
    return (
      <div>
        <h1>Welcome to the Home app!</h1>
  
        <p>
          This example demonstrates how you can stitch two React Router apps
          together using the <code>`basename`</code> prop on{" "}
          <code>`BrowserRouter`</code> and <code>`StaticRouter`</code>.
        </p>
  
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <ErrorCatchHome>
              <Link to="/UseRefHookLink"> UseRef Hook </Link>
              </ErrorCatchHome>
            </li>
            <li>
            <ErrorCatchHome>
              {/* Use a normal <a> when linking to the "Inbox" app so the browser
                  does a full document reload, which is what we want when exiting
                  this app and entering another so we execute its entry point in
                  inbox/main.jsx. */}
            <Link to="/ReducerHookLink"> UesRef Hook </Link>
            </ErrorCatchHome>
              {/* <a href="/ReducerHookLink">Inbox</a> */}
            </li>
            <li>
            <ErrorCatchHome>
            <Link to="/HookLifeCycleUseEffectLink"> component LifeCycle using UseEffect</Link>
            </ErrorCatchHome>
            </li>
            <li>
            <ErrorCatchHome>
            <Link to="/HookExampleLifeCycleUseEffectLink"> useeffect hook LifeCycle example</Link>
            </ErrorCatchHome>
            </li>
            {/* <li>
            <ErrorCatchHome>
            <Link to="/ErrorBoundaryPageLink">Open ErrorBoundary Page</Link>
            </ErrorCatchHome>
            </li> */}
          </ul>
        </nav>
  
        <hr />

      </div>
    );
  }
  export default Home;