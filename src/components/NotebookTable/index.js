// react library
import React from 'react';

// third-party libraries
import {Table} from 'semantic-ui-react'
import {Link} from "react-router-dom";
// styles
import './NotebookTable.scss';

//components
import DropdownMenu from "../DropdownMenu";

const NotebookTable = () => {
  return (
    <Table.Body>
      <Table.Row>

        <Table.Cell
          title={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            'et dolore magna aliqua.',
          ].join(' ')}
        >
          <Link to="/notes" replace>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          </Link>
        </Table.Cell>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>john@gmail.com</Table.Cell>
        <Table.Cell>June 23, 2018</Table.Cell>
        <Table.Cell>
          <DropdownMenu icon='ellipsis horizontal' deleteTitle='Delete Notebook'/>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
};

export default NotebookTable;
