import React, { Component } from 'react';
import STC from './STC/STC';
import JR from './JR/JR';
import SSC from './SSC/SSC';

class Websites extends Component {
  render() {
    return (
      <div>
        <h1 className="Portfolio-H1">Websites</h1>
        <hr/>
        <br/>
        <JR />
        <br/>
        <STC />
        <br/>
        <SSC />
        <br/>
      </div>
    );
  }
};

export default Websites;