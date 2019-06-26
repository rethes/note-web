// react libraries
import React from "react";

// third-party libraries
import { List, Divider, Menu } from 'semantic-ui-react';

// styles
import './NotesListPage.scss';

//components
import NoteslistItem from "../../components/NoteslistItem";

class NotesListPage extends React.Component {

  render() {
    return (
      <div className="notelist-container">
        <Menu secondary>
          <Menu.Item classname="notelist-header" name='All Notes'/>
          <Menu.Menu position='right'>
            <Menu.Item name='10 notes'/>
          </Menu.Menu>
        </Menu>
        <Divider/>
        <List divided verticalAlign='middle'>
          <NoteslistItem/>
          <NoteslistItem/>
          <NoteslistItem/>
          <NoteslistItem/>
          <NoteslistItem/>
          <NoteslistItem/>
          <NoteslistItem/>
          <NoteslistItem/>
        </List>
      </div>
    )
  }
}

export default NotesListPage;
