import React, { lazy, Suspense } from "react";
import { Login } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {/* <Route path="/" component{} /> */}
        <Route path="/login" component={Login} />
        {/* <Route path="/signup" component{} /> */}
        {/* </Suspense> */}
      </Switch>
    </Router>
  );
}

export default App;
