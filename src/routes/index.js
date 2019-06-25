// react libraries
import * as React from "react";

// third party packages
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// components
import App from "../App";
import PageNotFound from "../components/PageNotFound";
import NewNotePage from "../pages/NewNotePage";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/notes/new" component={NewNotePage} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;


