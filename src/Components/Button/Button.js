import React from 'react';

const Button = (props) => (
  <button
    className={props.className}
    onClick={props.onClick}
    id={props.id}
  >
    {props.children}
  </button>
);

export default Button;