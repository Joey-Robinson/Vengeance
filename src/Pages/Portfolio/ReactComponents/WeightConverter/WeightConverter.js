import React, { Component } from 'react'

class WeightConverter extends Component {
  state = {
    pounds: 0,
    grams: 0,
    kilograms: 0,
    ounces: 0,
    inputValue: ''
  }
  inputHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
      grams: event.target.value / 0.0022046,
      kilograms: event.target.value / 2.2046,
      ounces: event.target.value * 16
    });
    event.preventDefault();
  }
  render() {
    return (
      <div className="Weight">
        <h1>WeightConverter</h1>
       <input
          className="Weight-Input"
          onChange={this.inputHandler}
          type="number"
          placeholder="Enter Pounds"
        />
        <div className="Weight-Result">
          <p>Grams: {this.state.grams}</p>
          <hr/>
          <p>Kilograms: {this.state.kilograms}</p>
          <hr/>
          <p>Ounces: {this.state.ounces}</p>
          <hr/>
        </div>
      </div>
    )
  }
};

export default WeightConverter;