// react libraries
import * as React from "react";

// third party packages
import { Route, Switch } from "react-router-dom";

// components
import PageNotFound from "../components/PageNotFound";
import NewNotePage from "../pages/NewNotePage";
import NotebooksPage from "../pages/NotebooksPage";
import NotesListPage from "../pages/NotesListPage";
import DashboardPage from "../pages/DashboardPage";
import NotesPage from "../pages/NotesPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={DashboardPage}/>
    <Route exact path="/notes/1" component={NotesPage}/>
    <Route exact path="/notes/new" component={NewNotePage}/>
    <Route exact path="/notes" component={NotesListPage}/>
    <Route exact path="/notebooks" component={NotebooksPage}/>
    <Route component={PageNotFound}/>
  </Switch>
);

export default Routes;
