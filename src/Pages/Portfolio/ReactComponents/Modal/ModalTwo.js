import React, { Component } from 'react';

class ModalTwo extends Component {
  closeModal = (event) => {
    event.preventDefault();
    if(this.props.onClose) {
      this.props.onClose();
    }
  }
  render() {
    if (this.props.isOpen === false) return null
    return (
      <div>
        <div className="Modal">
          {this.props.children}
        </div>
        {!this.props.noBackdrop && 
          <div 
            className="Backdrop"
            onClick={this.closeModal}
          />
        }
      </div>
    )
  }
}

export default ModalTwo;