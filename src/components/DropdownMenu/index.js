// react library
import React from 'react';

// third-party libraries
import {Dropdown} from 'semantic-ui-react'

// scss
import './DropdownMenu.scss';

const DropdownMenu = (props) => (
  <Dropdown icon={props.icon}>
    <Dropdown.Menu icon={null}>
      <Dropdown.Item text='Edit'/>
      <Dropdown.Item text='Delete'/>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownMenu;
