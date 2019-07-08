// react library
import React from 'react';

// third-party libraries
import {Table} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// scss
import './NotebookTable.scss';

//components
import NotesListItem from '../NotesListItem';

const NotebookTable = (props) => {

  const {id, title, notesCount, author, updatedAt, renderNotebookModal, notebookAction} = props;

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Link to={`/notebooks/${id}`} replace>
            {title}
          </Link>
        </Table.Cell>
        <Table.Cell>{notesCount}</Table.Cell>
        <Table.Cell> {author}</Table.Cell>
        <Table.Cell>{updatedAt}</Table.Cell>
        <Table.Cell>
          {notebookAction}
          {renderNotebookModal}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
};

NotesListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  notesCount: PropTypes.string,
  author: PropTypes.string,
  updatedAt: PropTypes.string
};

export default NotebookTable;
