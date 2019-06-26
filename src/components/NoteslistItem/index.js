// react library
import React from 'react';

// third-party libraries
import {List, Button, Image} from 'semantic-ui-react'

// styles
import './NoteslistItem.scss';

const NoteslistItem = () => {
  return (
    <List.Item>
      <div className="listitem-header">
        <List.Icon name='folder'/>
        <List.Content verticalAlign='top'>Notes</List.Content>
      </div>
      <List.Content>
        <List.Header as='h4'>Lorem Ipsum Today</List.Header>
        <List.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Tellus
          in metus vulputate eu scelerisque felis imperdiet proin. Aliquam id diam maecenas ultricies. Dictum non
          consectetur a erat nam at lectus urna. Et odio pellentesque diam volutpat commodo. Eu ultrices vitae auctor eu
          augue. Arcu bibendum at varius vel pharetra. Pulvinar neque laoreet suspendisse interdum consectetur libero id
          faucibus. Convallis convallis tellus id interdum velit laoreet. Donec enim diam vulputate ut pharetra sit amet
          aliquam id. Suspendisse ultrices gravida dictum fusce ut placerat. Libero id faucibus nisl tincidunt eget
          nullam non.</List.Description>
        <List.Description>June 24</List.Description>
      </List.Content>
    </List.Item>
  )
};

export default NoteslistItem;
