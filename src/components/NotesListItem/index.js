// react library
import React from 'react';

// third-party libraries
import {List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// scss
import './NotesListItem.scss';

const NotesListItem = (props) => (
  <List.Item>
    <div className="list-item-header">
      <List.Icon name='folder'/>
      <List.Content verticalAlign='top'>{props.notebookTitle}</List.Content>
    </div>
    <List.Content>
      <Link to={`/notes/${props.id}`} replace>
        <List.Header as='h4'>{props.notesTitle}</List.Header>
        <List.Description>{props.notesDescription}</List.Description>
        <List.Description>{props.notesUpdated}</List.Description>
      </Link>
    </List.Content>
  </List.Item>
);

NotesListItem.propTypes = {
  id: PropTypes.string,
  notebookTitle: PropTypes.string,
  notesTitle: PropTypes.string,
  notesDescription: PropTypes.string,
  notesUpdated: PropTypes.string
};

export default NotesListItem;
