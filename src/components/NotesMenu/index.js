// react library
import React from 'react';
import PropTypes from 'prop-types';

// third-party libraries
import {Menu, Icon} from 'semantic-ui-react';

// scss
import './NotesMenu.scss';

//components
import DropdownMenu from '../DropdownMenu';

const NotesMenu = (props) => (
  <div className="note-container">
    <Menu secondary className="note-menu">
      <Icon className="note-menu-folder" name='folder'/>
      <Menu.Item icon='folder' className="note-item">
        {props.notebook}
      </Menu.Item>
    </Menu>
    <Menu pointing secondary className="note-menu">
      <Menu.Item className="note-item">
        <b className="last-updated">
          Last edited on {props.date}
        </b>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <DropdownMenu icon='ellipsis vertical' deleteTitle='Delete Note'/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
);

NotesMenu.propTypes = {
  date: PropTypes.string,
  notebook: PropTypes.string,
};

export default NotesMenu;
