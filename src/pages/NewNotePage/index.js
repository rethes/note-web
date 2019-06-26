// react libraries
import React from "react";

// third-party libraries
import {Container, Input, Form, TextArea} from 'semantic-ui-react'

// styles
import './NewNotePage.scss';

// components
import NotesMenu from "../../components/NotesMenu";

class NewNotePage extends React.Component {

  render() {
    return (
      <Container textAlign='justified'>
        <NotesMenu/>

        <Form>
          <Input className="note-title" focus placeholder='Title...'/>
          <TextArea className="note-description" placeholder='Start writing and tell us more...'
                    style={{minHeight: 100}} rows={12}/>
        </Form>
      </Container>
    )
  }
}

export default NewNotePage;
