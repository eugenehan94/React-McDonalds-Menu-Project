import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Promotions from "./components/Promotions";
import Family from "./components/Family";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={["/", "/menu"]}>
          <App />
        </Route>
        <Route path="/promotion">
          <Promotions />
        </Route>
        <Route path="/family">
          <Family />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
