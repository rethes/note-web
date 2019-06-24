// react libraries
import * as React from "react";

// third party packages
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// components
import App from "../App";
import PageNotFound from "../components/PageNotFound";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/404" component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;


