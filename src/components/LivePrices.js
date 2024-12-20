import React from 'react';
import { useSubscription } from '@apollo/client';
import { LIVE_PRICES } from '../graphql/subscriptions';

const LivePrices = () =>{
    const {data, loading} = useSubscription(LIVE_PRICES);
    if(loading) return <p>Loading Prices ....</p>;

    return (
        <div>
      <h2>Live Prices</h2>
      {data.livePrices.map(({ symbol, price, change }) => (
        <div key={symbol}>
          <strong>{symbol}</strong>: ${price.toFixed(2)} ({change.toFixed(2)}%)
        </div>
      ))}
    </div>
    );
};

export default LivePrices;