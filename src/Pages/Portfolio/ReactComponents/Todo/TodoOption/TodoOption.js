import React from 'react';


const Option = (props) => {
  return (
    <div className="Todo-Text">
      {props.optionText}
      <button
        className="Todo-Button-Remove"
        onClick={(event) => {props.removeSingleItem(props.optionText)}}>
        Remove
      </button>
    </div>
  )
}

export default Option;