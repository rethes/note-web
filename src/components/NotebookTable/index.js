// react library
import React from 'react';

// third-party libraries
import {Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// scss
import './NotebookTable.scss';

//components
import DropdownMenu from '../DropdownMenu';
import NotesListItem from '../NotesListItem';

const NotebookTable = (props) => (
  <Table.Body>
    <Table.Row>
      <Table.Cell>
        <Link to={`/notes/${props.id}`} replace>
          {props.title}
        </Link>
      </Table.Cell>
      <Table.Cell>{props.notesCount}</Table.Cell>
      <Table.Cell> {props.author}</Table.Cell>
      <Table.Cell>{props.updatedAt}</Table.Cell>
      <Table.Cell>
        <DropdownMenu icon='ellipsis horizontal' deleteTitle='Delete Notebook'/>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
);

NotesListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  notesCount: PropTypes.string,
  author: PropTypes.string,
  ownedBy: PropTypes.string,
  updatedAt: PropTypes.string
};

export default NotebookTable;
