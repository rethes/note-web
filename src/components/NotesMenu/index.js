// react library
import React from 'react';
import PropTypes from 'prop-types';

// third-party libraries
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from "react-router-dom";

// scss
import './NotesMenu.scss';

const NotesMenu = (props) => {
  const {notebook, date, noteAction, renderNoteModal} = props;

  return (
    <div className="note-container">
      <Menu secondary className="note-menu">
        <Icon className="note-menu-folder" name='folder'/>
        <Link to={`/notebooks/${notebook.id}`} replace>
          <Menu.Item className="note-item">
            {notebook.title}
          </Menu.Item>
        </Link>
      </Menu>
      <Menu pointing secondary className="note-menu">
        <Menu.Item className="note-item">
          <b className="last-updated">
            Last edited on {date}
          </b>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            {noteAction}
            {renderNoteModal}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
};

NotesMenu.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  notebook: PropTypes.object
};

export default NotesMenu;
