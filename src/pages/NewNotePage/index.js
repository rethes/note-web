// react libraries
import React from "react";

// third-party libraries
import {
  Dropdown,
  Container,
  Input,
  Menu,
  Icon,
  Form,
  TextArea } from 'semantic-ui-react'

// styles
import './NewNotePage.scss';

class NewNotePage extends React.Component {

  render() {
    return (
      <Container textAlign='justified'>
        <Menu pointing secondary className="note-menu">
          <Menu.Item>
            <b className="last-updated"> Last edited on Jun 24, 2019 </b>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Icon size='large' name='ellipsis vertical'/>
              <Dropdown name='More'>
                <Dropdown.Menu>
                  <Dropdown.Item text='New'/>
                  <Dropdown.Item text='Save as...'/>
                  <Dropdown.Divider/>
                  <Dropdown.Item text='My Notes'/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

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
