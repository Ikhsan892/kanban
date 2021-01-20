import React from "react";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return <Router history="true">{renderRoutes(routes)}</Router>;
}

export default App;
