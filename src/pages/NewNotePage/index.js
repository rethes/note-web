// react libraries
import React from 'react';

// third-party libraries
import {Input, Form, TextArea, Button, Icon, Menu} from 'semantic-ui-react'
import moment from 'moment';
import cuid from 'cuid';

// scss
import './NewNotePage.scss';

//data
import data from '../../data/database';

class NewNotePage extends React.Component {

  state = {
    notes: {
      id: '',
      title: '',
      description: '',
      notebookId: '',
    },
    disable: true
  };

  /**
   * This method handles what happens when the name value changes in the input field.
   *
   * @param {Event} event
   *
   * @returns {void}
   */
  onInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      notes: {
        ...this.state.notes,
        id: this.props.match.params.id,
        [name]: value,
        notebookId: this.props.match.params.notebookId,
      },
    });

    this.handleDisableButton();
  };

  /**
   * handles submit button when disabled
   *
   * @returns {void}
   *
   */
  handleDisableButton = () => {
    if (this.state.notes.title.length > 1 && this.state.notes.description.length > 1) {
      this.setState({disable: false});
    } else {
      this.setState({disable: true});
    }
  };

  /**
   * Check if the current component status is update.
   *
   * @returns {boolean}
   */
  isUpdating = () => this.props.location.pathname.includes('/edit');

  /**
   * It redirects the user to notes list page
   *
   * @returns {void}
   */

  redirectToViewNotesPage = () => {
    return this.props.history.push(`/notes`);
  };

  /**
   * Get a notebook
   *
   * @returns {object}
   */
  getANotebook = () => {
    return data.notebooks.find((notebook) => {
      return notebook.id === this.props.match.params.notebookId;
    });
  };

  /**
   * This method handles creating a note.
   *
   * @returns {void}
   */
  onSubmit = () => {
    const {notes} = this.state;

    const newNote = {
      id: cuid(),
      title: notes.title,
      notebookId: notes.notebookId,
      description: notes.description,
      createdAt: moment().format(),
      updatedAt: moment().format(),
    };

    if (this.isUpdating()) {
      const editNote = {
        notebookId: notes.notebookId,
        id: notes.id,
        title: notes.title,
        description: notes.description,
        createdAt: moment().format(),
        updatedAt: moment().format(),
      };

      //find the index of the existing note
      const ind = data.notes.findIndex(x => x.id === notes.id);

      //add the new note and remove the old
      data.notes.splice(ind, 1, editNote);

    } else {
      data.notes.push(newNote);
    }

    this.redirectToViewNotesPage();
  };

  /**
   * Get a note
   *
   * @returns {object}
   */
  getANote = () => {
    return data.notes.find((note) => {
      return note.id === this.props.match.params.id;
    });
  };


  render() {
    const selectedNotebook = this.getANotebook();

    const selectedNote = this.getANote();

    return (
      <div className="new-note-container">
        <div className="note-container">
          <Menu secondary className="note-menu">
            <Icon className="note-menu-folder" name='folder'/>
            <Menu.Item className="note-item">
              {selectedNotebook.title}
            </Menu.Item>
          </Menu>
          <Menu pointing secondary className="note-menu">
            <Menu.Item className="note-item">
              <b className="last-updated">
                Last edited on {moment().format('MMM DD')}
              </b>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Button onClick={this.onSubmit} disabled={this.state.disable}>
                <Icon name='add'/>
                {this.isUpdating() ? 'Update Note' : 'Add Note'}
              </Button>
            </Menu.Menu>
          </Menu>
        </div>
        <Form>
          <Input className="note-title" focus name="title"
                 placeholder={this.isUpdating() ? selectedNote.title : 'Title...'}
                 onChange={this.onInputChange}/>
          <TextArea className="note-description"
                    placeholder={this.isUpdating() ? selectedNote.description : 'Start writing and tell us more...'}
                    name="description"
                    onChange={this.onInputChange}
                    style={{minHeight: 100}} rows={12}/>
        </Form>
      </div>
    )
  }
}

export default NewNotePage;
