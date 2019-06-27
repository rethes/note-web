// react library
import React from 'react';

// third-party libraries
import {Dropdown, Menu} from 'semantic-ui-react';

// styles
import './NotesMenu.scss';

const NotesMenu = () => (
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
          <Dropdown name='More' icon='ellipsis vertical'>
            <Dropdown.Menu icon={null}>
              <Dropdown.Item text='New' as='a' href="/notes/new"/>
              <Dropdown.Item text='Save as...'/>
              <Dropdown.Divider/>
              <Dropdown.Item text='My Notes'/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
);

export default NotesMenu;
