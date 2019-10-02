import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import SearchByCoins from "./components/SearchByCoins";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {console.log(res.data);setCoinData(res.data)})
      .catch(err => console.log(err));

    axios
      .get("https://api.coingecko.com/api/v3/coins/list")
      .then(res => setCoinList(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setSearchCoin(e.target.value);
  };

  const handleSearch = () => {
    //implement this later./coins/{id}/market_chart/range

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${searchCoin}/
        market_chart/range?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <Navbar />
      <SearchByCoins
        coins={coinList}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
