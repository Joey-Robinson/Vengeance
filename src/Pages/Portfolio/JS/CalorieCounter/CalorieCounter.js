import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class CalorieCounter extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <a href="https://github.com/elamahpla/CalorieCounter" target="_blank" rel="nofollow">
          <img
            src="https://i.imgur.com/VVPrjGA.png" 
            alt="Joey Robinson Calorie Counter"
          />
        </a>
        <Button
          className="Portfolio-Button-Counter"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Calorie Counter:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              Just a simple Calorie Counter. Uses localStorage as well.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default CalorieCounter;