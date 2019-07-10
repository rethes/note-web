// react libraries
import React from 'react';

// third-party libraries
import {Button, Header, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import * as moment from 'moment';

// scss
import './NotesPage.scss';

//components
import DeleteModals from "../../components/DeleteModal";
import NotesMenu from '../../components/NotesMenu';
import PageNotFound from '../../components/PageNotFound';

//data
import data from '../../data/database';

class NotesPage extends React.Component {

  state = {
    note: {
      id: '',
      title: '',
      description: '',
      notebookId: ''
    },
    open: false
  };

  /**
   * Populates the Edit Modal
   *
   * @param{object} selectedNote
   */
  populateEditModal = (selectedNote) => {
    this.setState({
      ...this.state,
      note: {
        id: selectedNote.id,
        title: selectedNote.title,
        description: selectedNote.description,
        notebookId: selectedNote.description
      }
    });
  };

  /**
   * It redirects the user to notes list page
   *
   * @returns {void}
   */
  redirectToViewNotesPage = (id) => {
    this.props.history.push(`/notebooks/${id}`)
  };

  /**
   * It deletes the selected note
   *
   * @returns {void}
   */
  deleteNote = (selectedNote) => {
    this.setState({
      ...this.state,
      open: true,
      note: {
        id: selectedNote.id,
        title: selectedNote.title,
        description: selectedNote.description,
        notebookId: selectedNote.notebookId
      }
    });
  };

  /**
   * Renders the Edit and Delete hyperlinks
   *
   * @returns {JSX}
   */
  noteAction = note => (
    <>
      <Button onClick={() => this.populateEditModal(note)}>
        <Icon name="edit" color={"blue"}/>
        <Link
          to={`/notebooks/${note.notebookId}/notes/${note.id}/edit`}
          className="edit"
        >
          Edit
        </Link>
      </Button>
      <Button onClick={() => this.deleteNote(note)}>
        <Icon name="delete" color={"red"}/>
        Delete
      </Button>
    </>
  );

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

  /**
   * handles closing of the modal, CANCEL button
   *
   * @returns {void}
   *
   */
  close = () => {
    this.setState({open: false})
  };

  /**
   * It deletes the selected request category
   *
   * @returns {void}
   */
  onDeleteSubmit = () => {
    const selectedNote = this.state.note;
    //remove the existing note
    const ind = data.notes.findIndex(note => note.id === selectedNote.id);

    data.notes.splice(ind, 1);

    this.setState({
      ...this.state,
      open: false,
      note: {
        id: selectedNote.id,
        title: selectedNote.title,
        description: selectedNote.description,
        notebookId: selectedNote.notebookId
      }
    });
    this.redirectToViewNotesPage(selectedNote.notebookId);
  };

  /**
   * Renders the modal for editing notes
   *
   * @returns {JSX}
   */
  renderNoteModal = () => {
    const {open, closeOnEscape, closeOnDimmerClick, note} = this.state;

    return (
      <DeleteModals
        submitButton={"Delete"}
        name={"Delete Note"}
        image={"https://res.cloudinary.com/do8ik6qe5/image/upload/v1561590488/note-app/jpm009-tapestry-1_1.jpg"}
        header={`Permanently delete your ${note.title}`}
        description={"This cannot be undone"}
        Input={null}
        open={open}
        close={this.close}
        closeOnEscape={closeOnEscape}
        closeOnDimmerClick={closeOnDimmerClick}
        onSubmit={this.onDeleteSubmit}
      />
    )
  };

  /**
   * Renders A note
   *
   * @returns {JSX}
   */
  renderANote = () => {
    const selectedNote = this.getANote();
    if (selectedNote) {
      return (
        <>
          <Header as='h2' className="note-title">{selectedNote.title}</Header>
          <p className="note-description">
            {selectedNote.description}
          </p>
        </>
      )
    }
  };

  /**
   * Renders the note menu
   *
   * @returns {JSX}
   */
  renderNoteMenu = () => {

    const selectedNote = this.getANote();

    if (selectedNote) {
      // eslint-disable-next-line
      const selectedNotebook = data.notebooks.filter(notebook => {
        if (notebook.id === selectedNote.notebookId) {
          return notebook
        }
      });

      return (
        <NotesMenu
          id={selectedNote.id}
          renderNoteModal={this.renderNoteModal()}
          noteAction={this.noteAction(selectedNote)}
          notebook={selectedNotebook[0]}
          date={moment(selectedNote.updatedAt).format('MMM DD')}
        />
      )
    }
    return <PageNotFound/>
  };

  render() {
    return (
      <div className="notes-page-container">
        {this.renderNoteMenu()}
        {this.renderANote()}
      </div>
    )
  }
}

export default NotesPage;
