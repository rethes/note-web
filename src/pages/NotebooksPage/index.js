// react libraries
import React from 'react';

// third-party libraries
import {Menu, Table, Button, Icon, Message} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import * as moment from 'moment';
import cuid from 'cuid';

// scss
import './NotebooksPage.scss';

// components
import NotebookTable from '../../components/NotebookTable';
import Modals from "../../components/Modals";

//data
import data from '../../data/database';

class NotebooksPage extends React.Component {

  state = {
    notebook: {
      id: '',
      title: '',
      author: 'admin'
    },
    oldTitle: '',
    disable: true,
    visible: false,
    open: false,
    isEditMode: false
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
        ...this.state,
        notebook: {
          id: this.state.notebook.id,
          title: value,
        }
      }
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
    if (this.state.notebook.title.length > 1) {
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
    this.setState({open: true, notebook: {title: ''}, disable: true});
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
   * handles closing of the modal
   *
   * @returns {void}
   *
   */
  close = () => {
    this.setState({open: false, notebook: {title: ''}, isEditMode: false})
  };

  /**
   * Make the API call to add the note.
   *
   * @returns {void}
   */
  onSubmit = () => {
    const newTitle = this.state.notebook.title;
    const {isEditMode, notebook} = this.state;

    const newNotebook = {
      id: cuid(),
      title: newTitle,
      author: "user",
      createdAt: moment().format(),
      updatedAt: moment().format(),
    };
    if (isEditMode) {
      //look for the old notebook
      const oldNotebook = data.notebooks.find(x => x.id === notebook.id);

      //find the index of the existing notebook
      const ind = data.notebooks.findIndex(x => x.id === oldNotebook.id);

      //add the new notebook and remove the old
      data.notebooks.splice(ind, 1, newNotebook);

    } else {
      data.notebooks.push(newNotebook);
      this.setState({visible: true})
    }
    this.close();
  };

  /**
   * It deletes the selected note
   *
   * @returns {void}
   */
  deleteNotebook = (selectedNotebook) => {

    //remove the existing notebook
    const ind = data.notebooks.findIndex(notebook => notebook.id === selectedNotebook.id);

    data.notebooks.splice(ind, 1);

    this.setState({
      ...this.state,
      notebook: {
        id: selectedNotebook.id,
        title: selectedNotebook.title,
      }
    });
  };

  /**
   * Populates the Edit Modal
   *
   * @param{object} selectedNotebook
   */
  populateEditModal = (selectedNotebook) => {

    this.setState({
      ...this.state,
      notebook: {
        id: selectedNotebook.id,
        title: selectedNotebook.title,
      },
      isEditMode: true,
      open: true,
      disable: true
    });
  };

  /**
   * Renders the Edit and Delete hyperlinks
   *
   * @returns {JSX}
   */
  notebookAction = notebook => (
    <>
      <Button>
        <Link to={`/notebooks/${notebook.id}/notes/new`} replace>
          <Icon name="add"/>
          Add Note
        </Link>
      </Button>
      <Button onClick={() => this.populateEditModal(notebook)}>
        <Icon name="edit"/>
        Edit
      </Button>
      <Button onClick={() => this.deleteNotebook(notebook)}>
        <Icon name="delete"/>
        Delete
      </Button>
    </>
  );

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
          renderNotebookModal={this.renderNotebookModal()}
          notebookAction={this.notebookAction(notebookValue)}
        />
      )
    });
  };

  /**
   * Renders the modal for adding or editing request types
   *
   * @returns {JSX}
   */
  renderNotebookModal = () => {
    const {open, closeOnEscape, closeOnDimmerClick, notebook} = this.state;

    return (
      <Modals
        submitButton={this.state.isEditMode ? "Edit" : "Add"}
        name={this.state.isEditMode ? "Rename Notebook" : "New Notebook"}
        image={"https://res.cloudinary.com/do8ik6qe5/image/upload/v1561590488/note-app/jpm009-tapestry-1_1.jpg"}
        header={this.state.isEditMode ? "Enter a new name for your Notebook." : "Notebooks are useful for grouping notes around a common topic."}
        description={this.state.isEditMode ? "It can be anything you want." : "They can be anything you want."}
        value={this.state.isEditMode ? notebook.title : "Notebook Name..."}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
        close={this.close}
        open={open}
        closeOnEscape={closeOnEscape}
        closeOnDimmerClick={closeOnDimmerClick}
        disabled={this.state.disable}
      />
    )
  };

  render() {
    const notebookCount = data.notebooks.length;

    return (
      <div className="notebook-container">
        <Menu secondary>
          <Menu.Item classname="notelist-header"> My Notebook List ({notebookCount})</Menu.Item>
          <Menu.Menu position='right'>
            <Button onClick={this.enableModal}>
              <Icon name='add'/>
              New Notebook
            </Button>
            {this.renderNotebookModal()}
          </Menu.Menu>
        </Menu>

        {
          this.state.visible ?
            this.state.visible &&
            <Message
              onDismiss={this.handleDismiss}
              color="Olive"
              header="Notebook was added successfully"
            />
            : null
        }

        <Table selectable striped padded compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={7}>Title</Table.HeaderCell>
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
