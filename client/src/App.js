import React from "react";
import { Login, Home } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component{} /> */}
        {/* </Suspense> */}
      </Switch>
    </Router>
  );
}

export default App;
