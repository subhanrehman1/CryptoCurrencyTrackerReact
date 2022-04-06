import React from "react";
import "./content.css";
const content = (props) => {
  console.log(props.prop);
  return props?.prop.map((val) => {
    const percent_color = val.price_change_percentage_24h > 0 ? "green" : "red";
    const percent_arrow = val.price_change_percentage_24h > 0 ? "⬆" : "⬇";
    return props.prop.length !== 0 ? (
      <div id="datacontainer" className="ui segment">
        <div id="label">
          <div id="fcol">
            <img src={val.image} alt="img" />
            <p>{val.name}</p>
          </div>
          <p>{val.symbol.toUpperCase()}</p>
          <p>{`$ ${val.current_price}`}</p>
          <p>{val.total_volume.toLocaleString("en-us")}</p>
          <p style={{ color: percent_color }}>
            {percent_arrow}
            {Math.abs(val.price_change_percentage_24h)}
          </p>
          <p>{val.market_cap.toLocaleString("en-us")}</p>
        </div>
      </div>
    ) : (
      <div id="datacontainer" className="ui segment">
        Loading error
      </div>
    );
  });
};

export default content;
