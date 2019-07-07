// react libraries
import React from 'react';

// third-party libraries
import {Button, Modal, Header, Image, Input} from 'semantic-ui-react';

class Modals extends React.Component {
  render() {
    const {
      name, image, header, description, value, onSubmit, onInputChange, close, open, closeOnEscape, closeOnDimmerClick,
      disabled, submitButton
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
          <Image wrapped size='small'
                 src={image}/>
          <Modal.Description>
            <Header>{header}</Header>
            <p>{description}</p>
            <Input onChange={onInputChange} placeholder={value}/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={close}>
            Cancel
          </Button>
          <Button color='green' onClick={onSubmit} disabled={disabled}>
            {submitButton}
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default Modals;
