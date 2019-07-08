// react libraries
import React from 'react';

// third-party libraries
import {Divider, Icon, List, Menu} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import * as moment from 'moment';

// scss
import './NotebookNotesPage.scss';

//data
import data from '../../data/database';

class NotebookNotesPage extends React.Component {

  /**
   * Get a notebook
   *
   * @returns {object}
   */
  getANotebook = () => {
    return data.notebooks.find((notebook) => {
      return notebook.id === this.props.match.params.id;
    });
  };

  /**
   * Get a note
   *
   * @returns {object}
   */
  getNoteCount = (selectedNotebook) => {
    return data.notes.filter(note => {
      return (note.notebookId === selectedNotebook.id)
    });
  };

  /**
   * Renders the notebook notes
   *
   * @returns {JSX}
   */
  renderAllNotebookNotes = () => {
    const selectedNotebook = this.getANotebook();

    const notebookNotes = this.getNoteCount(selectedNotebook);

    if (notebookNotes.length > 0) {
      notebookNotes.sort((a, b) =>
        new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1
      );

      return notebookNotes.map((noteValue) => {
        return (
          <List.Item key={noteValue.id}>
            <List.Content>
              <Link to={`/notes/${noteValue.id}`} replace >
                <List.Header as='h4'>{noteValue.title}</List.Header>
                <List.Description>{noteValue.description}</List.Description>
                <List.Description>{moment(noteValue.updatedAt).format('MMM DD')}</List.Description>
              </Link>
            </List.Content>
          </List.Item>
        )
      });
    }
    return (
      <span className="no-notes">No Notes Found</span>
    )
  };


  render() {
    const selectedNotebook = this.getANotebook();

    const noteCount = this.getNoteCount(selectedNotebook);

    return (
      <div className="notebook-notes-container">
        <Menu secondary>
          <Menu.Item className="note-list-header">
            <Icon name='folder'/>
            {selectedNotebook.title}
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              {noteCount.length} Notes
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Divider/>
        <List divided verticalAlign='middle'>
          {this.renderAllNotebookNotes()}
        </List>
        <Divider/>
      </div>
    )
  }
}

export default NotebookNotesPage;
