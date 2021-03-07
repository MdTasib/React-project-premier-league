import React, { useState } from 'react';
import Home from './Home';
import Shipment from './Shipment';
import Header from './Header';

const State = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count : {count}</p>
            <Header count={count} setCount={setCount} />
            <Home count={count} />
            <Shipment />
        </div>
    );
};

export default State;