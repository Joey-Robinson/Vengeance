import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import '../css/main.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div className="Hi">{title}</div>,
  document.getElementById('app')
);

module.hot.accept();