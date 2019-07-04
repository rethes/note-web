// react libraries
import React from 'react';

// third-party libraries
import {Input, Form, TextArea, Button, Icon, Menu} from 'semantic-ui-react'
import moment from 'moment';
import cuid from 'cuid';

// scss
import './NewNotePage.scss';

//data
import data from "../../data/database";

class NewNotePage extends React.Component {
  state = {
    notes: {
      title: '',
      description: '',
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
      notes: {...this.state.notes, [name]: value}
    });

    this.handleDisableButton()
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
   * It redirects the user to notes list page
   *
   * @returns {void}
   */

  redirectToViewNotesPage = (id) => {
    return this.props.history.push(`/notes/${id}`);
  };

  /**
   * This method handles creating a note.
   *
   * @returns {void}
   */
  onSubmit = () => {
    const {notes} = this.state;

    const notebookId = "1";

    const newNote = {
      notebookId,
      id: cuid(),
      title: notes.title,
      description: notes.description,
      createdAt: moment().format(),
      updatedAt: moment().format(),
    };

    data.notes.push(newNote);
    this.setState({visible: true});
    this.redirectToViewNotesPage(newNote.id);
  };

  render() {

    return (
      <div className="new-note-container">
        <div className="note-container">
          <Menu secondary className="note-menu">
            <Icon className="note-menu-folder" name='folder'/>
            <Menu.Item icon='folder' className="note-item">
              Notes
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
                Add Note
              </Button>
            </Menu.Menu>
          </Menu>
        </div>
        <Form>
          <Input className="note-title" focus placeholder='Title...'
                 name="title" onChange={this.onInputChange}/>
          <TextArea className="note-description" placeholder='Start writing and tell us more...'
                    name="description"
                    onChange={this.onInputChange}
                    style={{minHeight: 100}} rows={12}/>
        </Form>
      </div>
    )
  }
}

export default NewNotePage;
