// react libraries
import React from 'react';

// third-party libraries
import {Divider, List, Menu} from 'semantic-ui-react';
import * as moment from 'moment';

// scss
import './NotesListPage.scss';

//components
import NotesListItem from '../../components/NotesListItem';

//data
import data from '../../data/database';

class NotesListPage extends React.Component {
  /**
   * Renders the note data
   *
   * @returns {JSX}
   */
  renderNotes = () => {
    data.notes.sort((a, b) =>
      new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1
    );

    return data.notes.map((noteValue) => {
      // eslint-disable-next-line
      const selectedCategory = data.notebooks.filter(notebook => {
        if (notebook.id === noteValue.notebookId) {
          return notebook
        }
      });

      return (
        <NotesListItem
          key={noteValue.id}
          id={noteValue.id}
          notebookTitle={selectedCategory[0].title}
          notesTitle={noteValue.title}
          notesDescription={noteValue.description}
          notesUpdated={moment(noteValue.updatedAt).format('MMM DD')}
        />
      )
    });
  };


  render() {
    const noteCount = data.notes.length;

    return (
      <div className="note-list-container">
        <Menu secondary>
          <Menu.Item className="note-list-header" name='All Notes'/>
          <Menu.Menu position='right'>
            <Menu.Item>
              {noteCount} Notes
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Divider/>
        <List divided verticalAlign='middle'>
          {this.renderNotes()}
        </List>
        <Divider/>
      </div>
    )
  }
}

export default NotesListPage;
