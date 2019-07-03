// react libraries
import React from 'react';

// third-party libraries
import {Menu, Button, Modal, Header, Image, Input, Table, Icon, Message} from 'semantic-ui-react';
import * as moment from 'moment';
import cuid from 'cuid';

// scss
import './NotebooksPage.scss';

// components
import NotebookTable from '../../components/NotebookTable';

//data
import data from '../../data/database';

class NotebooksPage extends React.Component {

  state = {
    title: '',
    disable: true,
    loading: false,
    open: false,
    visible: false
  };

  /**
   * This method handles what happens when the name value changes in the input field.
   *
   * @param {Event} event
   *
   * @returns {void}
   */
  onInputChange = (event) => {
    let value = event.target.value;

    this.setState({
        title: value
      },
    );
    this.handleDisableButton()
  };

  /**
   * handles submit button when disabled
   *
   * @returns {void}
   *
   */
  handleDisableButton = () => {
    if (this.state.title.length > 1) {
      this.setState({disable: false});
    } else {
      this.setState({disable: true});
    }
  };

  /**
   * handles opening of the modal
   *
   * @returns {void}
   *
   */
  enableModal = () => {
    this.setState({open: true, title: '', disable: true});
  };

  /**
   * handles closing of the modal
   *
   * @returns {void}
   *
   */
  close = () => {
    this.setState({open: false, title: ''})
  };

  /**
   * handles dismissing the toast message
   *
   * @returns {void}
   *
   */
  handleDismiss = () => {
    this.setState({visible: false})
  };

  /**
   * Make the API call to add the note.
   *
   * @returns {void}
   */
  onSubmit = () => {
    const newTitle = this.state.title;

    const newNote = {
      id: cuid(),
      title: newTitle,
      author: "user",
      createdAt: moment().format(),
      updatedAt: moment().format(),
    };

    data.notebooks.push(newNote);
    this.close();
    this.setState({visible: true})

  };

  /**
   * Renders the notebook data
   *
   * @returns {JSX}
   */
  renderAllNotebooks = () => {
    data.notebooks.sort((a, b) =>
      new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1
    );

    return data.notebooks.map((notebookValue) => {
      // eslint-disable-next-line
      const notesCount = data.notes.filter(note => {
        if (note.notebookId === notebookValue.id) {
          return note
        }
      });

      return (
        <NotebookTable
          key={notebookValue.id}
          id={notebookValue.id}
          title={notebookValue.title}
          notesCount={notesCount.length}
          author={notebookValue.author}
          updatedAt={moment(notebookValue.updatedAt).format('MMM DD, YYYY')}
        />
      )
    });
  };

  render() {
    const notebookCount = data.notebooks.length;
    const {open, closeOnEscape, closeOnDimmerClick} = this.state;
    return (
      <div className="notebook-container">
        <Menu secondary>
          <Menu.Item classname="notelist-header"> My Notebook List ({notebookCount})</Menu.Item>
          <Menu.Menu position='right'>
            <Modal
              trigger={
                <Button onClick={this.enableModal}>
                  <Icon name='add'/>
                  New Notebook
                </Button>
              }
              open={open}
              closeOnEscape={closeOnEscape}
              closeOnDimmerClick={closeOnDimmerClick}
              onClose={this.close}
            >
              <Modal.Header>Create A New Notebook</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='small'
                       src='https://res.cloudinary.com/do8ik6qe5/image/upload/v1561590488/note-app/jpm009-tapestry-1_1.jpg'/>
                <Modal.Description>
                  <Header>Notebooks are useful for grouping notes around a common topic.</Header>
                  <p>They can be anything you want.</p>
                  <Input onChange={this.onInputChange} placeholder='Notebook Name...'/>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  onClick={this.close}
                >
                  Cancel
                </Button>
                <Button color='green' onClick={this.onSubmit} disabled={this.state.disable}>
                  Add
                </Button>

              </Modal.Actions>
            </Modal>
          </Menu.Menu>
        </Menu>

        {
          this.state.visible ?
            this.state.visible &&
            < Message
              onDismiss={this.handleDismiss}
              color='olive'
              header='Notebook was added successfully'
            /> : null
        }

        <Table selectable striped padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Owned By</Table.HeaderCell>
              <Table.HeaderCell>Updated</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {this.renderAllNotebooks()}
        </Table>
      </div>
    )
  }
}

export default NotebooksPage;
