import React from 'react';

const SideDrawer = (props) => {
  let drawerClasses = 'SideDrawer';
  if(props.show) {
    drawerClasses = 'SideDrawer Open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/">Products</a></li>
      </ul>
    </nav>
  );
};

export default SideDrawer;