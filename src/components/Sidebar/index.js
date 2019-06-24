import React from 'react';
import { SideBarItem } from '../SideBarItem';
import { Menu } from 'semantic-ui-react';
import './SideBar.scss';

class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem highlight={true}  label='Home' icon='home'/>
        <SideBarItem label='User Name' icon='user circle'/>
        <SideBarItem label='New Note' icon='add'/>
        <SideBarItem label='All Notes' icon='sticky note'/>
        <SideBarItem label='Notebooks' icon='folder'/>
      </Menu>
    );
  }
}

export default SideBar;
