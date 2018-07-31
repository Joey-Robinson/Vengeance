import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class ImageGallery extends Component {
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
        <a href="https://github.com/elamahpla/ImageGallery" target="_blank" rel="nofollow">
          <img
            src="https://i.imgur.com/M1S5X2F.png" 
            alt="Joey Robinson Image Gallery"
          />
        </a>
        <Button
          className="Portfolio-Button-Gallery"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>Image Gallery:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              I made this Image Gallery for a dungeon I was a part of where knowing the location of the hidden chest is can reward you 
              with various treasures. So I made an image gallery using CSS Grid and some JS and hosted it on gh-pages. 
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default ImageGallery;