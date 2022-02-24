import React from 'react';
 import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
             <Link to="ReactHook">Home</Link> 
            <br/>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }
  export default ErrorBoundary;



//   Note
// Error boundaries are React components which catch JavaScript errors anywhere in our app, log those errors, and display a fallback UI. It does not break the whole app component tree and only renders the fallback UI whenever an error occurred in a component.

// Error boundaries do not catch errors for:
// Event handlers (Error boundaries do not catch errors inside event handlers.)If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement:
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)