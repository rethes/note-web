// react libraries
import * as React from "react";

// third party packages
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// components
import App from "../App";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={App} />
    </Switch>
  </Router>
);

export default Routes;
