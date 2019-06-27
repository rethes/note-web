// react library
import React from 'react';

// third-party libraries
import {Menu} from 'semantic-ui-react';

// styles
import './NotesMenu.scss';

//components
import DropdownMenu from "../DropdownMenu";

const NotesMenu = () => {
  return (
    <div className="note-container">
      <Menu secondary className="note-menu">
        <Menu.Item name='Notes' icon='folder' className="note-item"/>
      </Menu>

      <Menu pointing secondary className="note-menu">
        <Menu.Item className="note-item">
          <b className="last-updated"> Last edited on Jun 24, 2019 </b>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <DropdownMenu icon='ellipsis vertical' deleteTitle='Delete Note'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
)};

export default NotesMenu;
