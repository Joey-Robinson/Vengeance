import React from 'react';

const ReusableButton = (props) => (
  <button
    style={{color: 'black'}}
    className={props.className}
    onClick={props.onClick}
    id={props.id}
  >
    {props.children}
    Reusable Button
  </button>
);

export default ReusableButton;