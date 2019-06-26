// react libraries
import React from "react";

// third-party libraries
import {Menu, Button, Modal, Header, Image, Input, Table} from 'semantic-ui-react';

// styles
import './NotebooksPage.scss';

// components
import NotebookTable from "../../components/NotebookTable";

class NotebooksPage extends React.Component {

  render() {
    return (
      <div className="notebook-container">
        <Menu secondary>
          <Menu.Item classname="notelist-header"> My Notebook List (4)</Menu.Item>
          <Menu.Menu position='right'>
            <Modal
              trigger={<Menu.Item icon='add' name='New Notebook'/>}
            >
              <Modal.Header>Create A New Notebook</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='small'
                       src='https://res.cloudinary.com/do8ik6qe5/image/upload/v1561590488/note-app/jpm009-tapestry-1_1.jpg'/>
                <Modal.Description>
                  <Header>Notebooks are useful for grouping notes around a common topic.</Header>
                  <p>They can be anything you want.</p>
                  <Input placeholder='Notebook Name...'/>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button>
                  Cancel
                </Button>
                <Button color='green'>
                  Continue
                </Button>
              </Modal.Actions>
            </Modal>
          </Menu.Menu>
        </Menu>

        <Table selectable striped padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell >Owned By</Table.HeaderCell>
              <Table.HeaderCell>Updated</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        <NotebookTable/>
          <NotebookTable/>
          <NotebookTable/>
          <NotebookTable/>

        </Table>
      </div>
    )
  }
}

export default NotebooksPage;
