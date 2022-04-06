import React from "react";
import Header from "./Components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Content from "./content";
const App = () => {
  const [crypto, setCrypto] = useState([]);
  // const [value, setValue] = useState("");
  const [newdata, setNewData] = useState([]);
  const data = async () => {
    return await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
  };
  useEffect(() => {
    data().then((res) => {
      console.log(res);
      return setCrypto(res.data), setNewData(res.data);
    });
    // .catch((err) => console.error(err));
  }, []);

  const searchCrypto = (e) => {
    // setValue(e.target.value);
    const data = newdata.filter((val) =>
      val.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCrypto(data);
  };

  const changeOrder = (e) => {
    setNewData(crypto.reverse());
    setCrypto(newdata);
  };

  return (
    <div>
      <div>
        <Header search={searchCrypto} btn={changeOrder} />
      </div>
      <Content prop={crypto} />
    </div>
  );
};

export default App;
