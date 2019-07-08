// react libraries
import React from 'react';

// third-party libraries
import {Button, Modal, Header, Image} from 'semantic-ui-react';

class Modals extends React.Component {
  render() {
    const {
      name, image, header, description, onSubmit, close, open, closeOnEscape, closeOnDimmerClick
    } = this.props;

    return (
      <Modal
        open={open}
        closeOnEscape={closeOnEscape}
        closeOnDimmerClick={closeOnDimmerClick}
        onClose={close}
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='small' src={image}/>
          <Modal.Description size='small' >
            <Header>{header}</Header>
            <p>{description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={close}>
            Cancel
          </Button>
          <Button color='green' onClick={onSubmit}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default Modals;
