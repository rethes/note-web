// react library
import React from 'react';

// third-party libraries
import {Button, Dropdown, Header, Modal} from 'semantic-ui-react'

// styles
import './DropdownMenu.scss';

//components

const DropdownMenu = (props) => {
  return (
    <Dropdown icon={props.icon}>
      <Dropdown.Menu icon={null}>
        <Dropdown.Item text='New' as='a' href="/notes/new"/>
        <Dropdown.Item text='Save as...'/>
        <Dropdown.Item>
          <Modal
            trigger={<Dropdown.Item text='Delete'/>}
          >
            <Modal.Header>{props.deleteTitle}</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>Time to say goodbye.</Header>
                <p>See Ya!</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button>
                Cancel
              </Button>
              <Button color={'red'}>
                Delete
              </Button>
            </Modal.Actions>
          </Modal>
        </Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item text='All Notes' as='a' href="/notes"/>
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default DropdownMenu;
