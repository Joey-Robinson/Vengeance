import React from 'react';

const MenuButton = (props) => (
  <button 
    id="menuButton"
    onClick={props.handleMouseDown}
  />
);

export default MenuButton;