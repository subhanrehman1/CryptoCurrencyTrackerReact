import React from "react";
import "./search.css";
const search = (props) => {
  return (
    <div>
      <div
        id="srch"
        className="ui input focus"
        onChange={(e) => {
          props.prop1(e);
        }}
      >
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default search;
