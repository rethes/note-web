// react libraries
import React from "react";

// third-party libraries
import {Menu, Icon} from 'semantic-ui-react';

// styles
import './SideBarItem.scss';

export const SideBarItem = (props) => {
  const highlight = props.highlight ? 'highlight-item' : null;

  return (
    <Menu.Item className={['sidebar-item', highlight].join(' ')}>
      <div className='sidebar-item-alignment-container'>
        <span>
          <Icon size='large' name={props.icon}/>
        </span>
        <span>
          {props.label}
          </span>
      </div>
    </Menu.Item>
  );
};

export default SideBarItem;
