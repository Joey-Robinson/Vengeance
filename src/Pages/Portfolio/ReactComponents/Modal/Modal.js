import React, { Component } from 'react';
import ModalTwo from './ModalTwo';
import Button from "../../../../Components/Button/Button";

class Modal extends Component {
  state = { 
    isModalOpen: false 
  }
  openModalHandler = () => {
    this.setState({isModalOpen: true});
  }
  closeModalHandler = () => {
    this.setState({isModalOpen: false});
  }
  render() {
    return (
      <div>
        <Button
          className="Portfolio-Button-Modal" 
          onClick={this.openModalHandler}>
          Modal
        </Button>
        <ModalTwo
          isOpen={this.state.isModalOpen} 
          onClose={this.closeModalHandler}
        >
        <div className="Modal-Div">
          <p>Hi, this is a Modal</p>
        </div>
          <Button
            className="Portfolio-Button-Modal-Close"
            onClick={this.closeModalHandler}>
              Close
          </Button>
        </ModalTwo>
      </div>
    )
  }
}

export default Modal;