import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Error.wtf</h1>
        <p className="Sub-header">Under construction</p>
        <div className="coins">
          <div className="coin">
            <img
              src="https://cdn.worldvectorlogo.com/logos/bitcoin.svg"
              alt="BTC"
              className="coinicon"
            />
            <p>17GhizAzgcA6oshvUvFpJ6hWsoQZXptTNW</p>
          </div>
          <div className="coin">
            <img
              src="https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg"
              alt="ETH"
              className="coinicon"
            />
            <p>10x9becb6e0793a7597f6f0a84190e30313450468bd</p>
          </div>
          <div className="coin">
            <img
              src="https://cdn.worldvectorlogo.com/logos/dogecoin-1.svg"
              alt="DOGE"
              className="coinicon"
            />
            <p>DStA7SZqPEub5HJcbjJALEEZJA9tRnrxuP</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
