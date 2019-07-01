// react libraries
import React from 'react';

// third-party libraries
import {Input, Form, TextArea} from 'semantic-ui-react'
import moment from 'moment';

// scss
import './NewNotePage.scss';

// components
import NotesMenu from '../../components/NotesMenu';

class NewNotePage extends React.Component {

  render() {
    return (
      <div className="new-note-container">
        <NotesMenu
          notebook={"Notes"}
          date={moment().format('MMM DD')}
        />
        <Form>
          <Input className="note-title" focus placeholder='Title...'/>
          <TextArea className="note-description" placeholder='Start writing and tell us more...'
                    style={{minHeight: 100}} rows={12}/>
        </Form>

      </div>
    )
  }
}

export default NewNotePage;
