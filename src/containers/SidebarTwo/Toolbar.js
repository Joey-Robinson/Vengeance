import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';

const Toolbar = (props) => (
  <header className="Toolbar">
    <nav className="Toolbar-Navigation">
      <div className="Toolbar-Toggle">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
        <div className="Toolbar-Logo"><a href="/">THE LOGO</a></div>
        <div className="Spacer"></div>
          <div className="Toolbar-Navigation-Items">
            <ul>
              <li><a href="/">Products</a></li>
              <li><a href="/">Users</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default Toolbar;