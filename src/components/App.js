import React from "react";
import "../app.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Startup from "../pages/Startup";
import Stats from "../pages/Stats";
import { NameProvider } from "../context/NameContext";
import { RegionProvider } from "../context/RegionContext";

const App = () => {
  return (
    <NameProvider>
      <RegionProvider>
        <HashRouter>
          <Route exact path="/" component={Startup} />
          <Route exact path="/stats" component={Stats} />
        </HashRouter>
      </RegionProvider>
    </NameProvider>
  );
};

export default App;
