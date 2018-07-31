import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class STC extends Component {
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
          href="https://mysidiafc.netlify.com/#/" 
          target="_blank" 
          rel="nofollow">
          <img 
            src="https://i.imgur.com/H3xulPC.jpg"
            alt="Joey Robinson Save The Chocobos"
          />  
        </a>
        <Button
          className="Portfolio-Button-STC"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Issues:</p> : <p>Mysidia:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              This was a website made for a Free Company I was in (FF14). I started this and I feel as if I was a bit too eager to get things done.
              I won't say the <a href="https://github.com/Joey-Robinson/MysidiaSite">website was rushed,</a> but I will say that I was a big too headstrong
              in my decision making. A majority of the website has fixed positioning on the components, and I think that creates an unnatural feel and 
              flow.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default STC;