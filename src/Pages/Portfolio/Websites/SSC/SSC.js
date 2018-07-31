import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class SSC extends Component {
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
        <a href="http://sweetestsoutherncreations.com/#/" target="_blank" rel="nofollow">
          <img
            src="https://i.imgur.com/9LQ7qL9.png" 
            alt="Joey Robinson Sweetest Southern Creations"
          />
        </a>
        <Button
          className="Portfolio-Button-SSC"
          onClick={this.handleToggleVisibility}>
            {this.state.visibility ? <p>Issues:</p> : <p>Sweetest Southern Creations:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              This is the second iteration of a friend's website. She owns and operates the company Sweetest Southern Creations and wanted to have
              an online presence. So, I started by creating <a href="https://github.com/Joey-Robinson/SweetSouthernCreations">the first version of the website</a> which I was
              displeased with.
            </p>
            <br/>
            <p>
              Then, I created <a href="https://github.com/Joey-Robinson/SweetestSouthernCreations">the next version</a> of the website. This is the current 
              version which I will update when the assets are in hand.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SSC;