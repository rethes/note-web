// react libraries
import React from 'react';

// third-party libraries
import {Menu, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

// scss
import './SideBar.scss';

// components
import {SideBarItem} from '../SideBarItem';

class SideBar extends React.Component {

  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>

        <Link to="/" replace>
          <SideBarItem highlight={true} label='Home' icon='home'/>
        </Link>
        <Divider/>

        <Link to="/notebooks/1/notes/new" replace>
          <SideBarItem label='New Note' icon='add'/>
        </Link>
        <Divider/>

        <Link to="/notes" replace>
          <SideBarItem label='All Notes' icon='sticky note'/>
        </Link>
        <Divider/>

        <Link to="/notebooks" replace>
          <SideBarItem label='Notebooks' icon='folder'/>
        </Link>
        <Divider/>

      </Menu>
    );
  }
}

export default SideBar;
