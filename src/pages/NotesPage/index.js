// react libraries
import React from "react";

// third-party libraries
import {Container, Header} from "semantic-ui-react";

// styles
import './NotesPage.scss';

//components
import NotesMenu from "../../components/NotesMenu";

class NotesPage extends React.Component {

  render() {
    return (
      <Container textAlign='justified'>
        <NotesMenu/>
        <Header as='h2' className="note-title">Header</Header>
        <p className="note-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
          Curabitur ullamcorper ultricies nisi.
        </p>
      </Container>
    )
  }
}

export default NotesPage;
