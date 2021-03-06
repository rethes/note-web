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
import NotebookNotesPage from "../pages/NotebookNotesPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={DashboardPage}/>
    <Route exact path="/notebooks/:notebookId/notes/new" component={NewNotePage}/>
    <Route exact path="/notes/:id" component={NotesPage}/>
    <Route exact path="/notebooks/:notebookId/notes/:id/edit" component={NewNotePage}/>
    <Route exact path="/notes" component={NotesListPage}/>
    <Route exact path="/notebooks" component={NotebooksPage}/>
    <Route exact path="/notebooks/:id" component={NotebookNotesPage}/>
    <Route component={PageNotFound}/>
  </Switch>
);

export default Routes;
