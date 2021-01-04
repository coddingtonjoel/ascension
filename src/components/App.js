import React from "react";
import "../app.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Startup from "../pages/Startup";
import Stats from "../pages/Stats";

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Startup} />
      <Route exact path="/stats" component={Stats} />
    </HashRouter>
  );
};

export default App;
