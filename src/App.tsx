import React, { useEffect, useState } from 'react';
import './App.css';
import { CryptoData } from './types/CryptoData';
import CryptoCard from './components/CryptoCard';
import axios from 'axios';



const App: React.FC = () => {
  const [cryptoData, setCryptoData] =  useState<CryptoData | null>(null)
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get<CryptoData>(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd'
        );
        setCryptoData(response.data)
        console.log(response.data);
        
      } catch (err) {
        setError("Failded to fetch cryptocurrency data. ")
      }
    };
    fetchCryptoData();
  }, [])

  return (
    <div className='App'>
      <h1>Cryptocurreny Price Tracker</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="crypto-container">
        {crypto ? (
          <>
            <CryptoCard name="Bitcoin" price={cryptoData?.bitcoin?.usd ?? 0} />
            <CryptoCard name="Ethereum" price={cryptoData?.ethereum?.usd ?? 0} />
            <CryptoCard name="Dogecoin" price={cryptoData?.dogecoin?.usd ?? 0 } />
          </>
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </div>
  );
}

export default App;
