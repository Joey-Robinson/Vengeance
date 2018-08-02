import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
import Hello from './containers/Hello';

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);

module.hot.accept();