import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './components/Coin';

function App() {
  const cryptoUrl = `https://api.coinstats.app/public/v1/coins?=skip=0`
  const [coinsList, setCoinsList] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(cryptoUrl)
    .then((res) => {
      console.log(res.data);
      setCoinsList(res.data.coins);
    });
  }, []);

  const searchCoins = coinsList.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase());
  })

  return (
    <div className="App">
      <div className="crypto-header">
        <h1>CRYPTO TRACKER</h1>
          <input type="text" placeholder="search..." onChange={(e) => {
              setSearch(e.target.value)
            }} />
      </div>
      <div className='crypto-display'>
      {searchCoins.map((coin) => {
        return <Coin 
                  name={coin.name} 
                  icon={coin.icon} 
                  price={coin.price} 
                  symbol={coin.symbol} />
      })}
      </div>
    </div>
  );
}

export default App;
