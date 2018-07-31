import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  };
  handleAddOption = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => {
      return {
        error: error
      }
    });
    if(!error) {
      event.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form
          onSubmit={this.handleAddOption}>
          <button 
            className="Todo-Button-AddOption"
          >
            Add Option
          </button>
          <input 
            type="text" 
            name="option" 
            className="Todo-Input"
            placeholder="Add Todo"
          />
        </form>
      </div>
    );
  }
}

export default AddOption;