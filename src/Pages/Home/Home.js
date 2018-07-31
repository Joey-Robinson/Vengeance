import React from 'react';

// This is Home ("/"). I'll use this as a landing page so people can get an idea of who I am without
// Having to visit the /about section.

const Home = () => (
  <div className="Home">
    <h1 className="Home-Greeting">
      Hey, I'm Joey.
    </h1>
    <div className="Home-Welcome">
      <p>
        I'm an aspiring front-end developer. I've been teaching myself to write code for about a year now. I've been learning front-end for about 8 months and I 
        thoroughly enjoy it.
        <br/>
        <br/>
        I try to make awesome things, sometimes I fail horribly, other times, not so much. 
      </p>
    </div>
    <div className="Home-Exit">
      <p>
        Note: This is a placeholder. I'm actively working on the third iteration of my website. I and very displeased at how this turned out.
      </p>
    </div>
  </div>
);

export default Home;