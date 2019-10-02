import React from "react";

const inputStyle = {
  border: "2px solid #f7931a",
  padding:'10px 0',
  width:'200px',
  fontWeight:'bold',
  color:'#f7931a',
};

const containerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  padding:'20px',
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "300px"
};

const buttonStyle = {
    padding:'12px 20px',
  backgroundColor: "#f7931a",
  color:'#fff',
  border:'none',
  textTransform:'uppercase',

};

function SearchByCoins(props) {
  const { coins, handleChange, handleSearch } = props;

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div>
          <select style={inputStyle} required name="coins" onChange={handleChange}>
            <option disabled selected value="">
              Search Coins
            </option>
            {coins.map(coin => (
              <option value={coin.id} key={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button style={buttonStyle} onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchByCoins;
