import React from 'react';

const Button = (props) => {
  return (
    <div className="">
      <button
        className="Todo-Button-RemoveAll"
        onClick={props.handleDelete}>
        Remove All
      </button>
    </div>
  );
}

export default Button;