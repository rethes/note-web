// react libraries
import React from 'react';

// third-party libraries
import {Header} from 'semantic-ui-react';
import * as moment from 'moment';

// scss
import './NotesPage.scss';

//components
import NotesMenu from '../../components/NotesMenu';
import PageNotFound from '../../components/PageNotFound';

//data
import data from '../../data/database';

class NotesPage extends React.Component {
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
      const selectedCategory = data.notebooks.filter(notebook => {
        if (notebook.id === selectedNote.notebookId) {
          return notebook
        }
      });

      return (
        <NotesMenu
          notebook={selectedCategory[0].title}
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
