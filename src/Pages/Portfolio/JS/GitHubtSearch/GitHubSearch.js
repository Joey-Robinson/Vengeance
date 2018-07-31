import React, { Component } from 'react';
import Button from '../../../../Components/Button/Button';

class GitHubSearch extends Component {
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
          href="https://github.com/elamahpla/GithubSearchv2" 
          target="_blank" 
          rel="nofollow"
        >
          <img
            src="https://i.imgur.com/RppIeT6.png" 
            alt="Joey Robinson GitHub User Search"
          />
        </a>
        <Button
          className="Portfolio-Button-GitHub"
          onClick={this.handleToggleVisibility}
        >
            {this.state.visibility ? <p>Thoughts:</p> : <p>GitHub Search:</p>}
        </Button>
        {this.state.visibility && (
          <div className="Portfolio-Toggle">
            <p>
              This is (another) GitHub search app. I sort of like this one a lot. I enjoy working with API's, despite me being (at times) overwhelmed by them
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default GitHubSearch;