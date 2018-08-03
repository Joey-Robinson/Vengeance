import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';

class MenuContainer extends Component {
  state = {
    visible: false
  }
  handleMouseDown = (event) => {
    this.toggleMenu();
    event.preventDefault();
  }
  toggleMenu = () => {
    this.setState({visible: !this.state.visible});
  }
  render() {
    return (
      <div>
        <MenuButton 
          handleMouseDown={this.handleMouseDown} 
        />
        <Menu 
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
};
 
export default MenuContainer;