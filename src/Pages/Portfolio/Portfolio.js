import React from 'react';
import Websites from './Websites/Websites';
import JS from './JS/JS';
import ReactComponents from './ReactComponents/ReactComponents';

const Portfolio = () => (
  <div className="Portfolio">
    <div className="Portfolio-Websites">
      <Websites />
    </div>
    <div className="Portfolio-Components">
      <ReactComponents />
    </div>
    <div className="Portfolio-JS">
      <JS />
    </div>
  </div>
);

export default Portfolio;