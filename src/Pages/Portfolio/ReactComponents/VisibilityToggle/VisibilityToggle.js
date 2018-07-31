import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class VisibilityToggle extends Component {
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
        <a 
          href="https://github.com/elamahpla/ReusableComponents" 
          target="_blank"
        >
        <img src="https://i.imgur.com/0rpXnWu.png" alt="Joey Robinson Visibility Toggle"/>
        </a>
        <Button
          className="Portfolio-Button-VisibilityToggle"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>This is great:</p> : <p>Visibility Toggle:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              So this component basically allows me to save space and hide content until it's needed. If you're reading this, look at the
              other buttons here, most of them do the same as this. The other content (below) is pushed down, and still creates a nice effect.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default VisibilityToggle;