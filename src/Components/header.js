import React from "react";
import Button from "./button";
import Search from "./search";
import "./header.css";
const header = (props) => {
  // console.log(props);
  return (
    <div>
      <div id="head" className="ui segment">
        <h1>Cryptocurrency Tracker</h1>
        <Search prop1={props.search} />
        <Button prop2={props.btn} />
      </div>
      <div id="labels">
        <p>Name</p>
        <p>Symbol</p>
        <p>Current price</p>
        <p>Volume</p>
        <p>Percent Change</p>
        <p>Market Cap</p>
      </div>
    </div>
  );
};

export default header;
