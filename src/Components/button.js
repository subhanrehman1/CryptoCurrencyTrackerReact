import React from "react";
import "./button.css";
const button = (props) => {
  console.log(props.prop2);
  return (
    <div>
      <button
        id="btn"
        className="ui primary button"
        onClick={(e) => {
          props.prop2(e);
        }}
      >
        Change order
      </button>
    </div>
  );
};

export default button;
