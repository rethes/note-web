// react library
import React from 'react';

// third-party libraries
import {Button, Dropdown, Header, Modal} from 'semantic-ui-react'

// styles
import './DeleteModal.scss';

const DeleteModal = (props) => {
  return (
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
  )
};

export default DeleteModal;
