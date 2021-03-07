import React, { useState, createContext } from 'react';
import Home from './Home';
import Shipment from './Shipment';
import Header from './Header';

export const ContextCategory = createContext();

const Context = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ContextCategory.Provider value={count}>
                <p>Count : {count}</p>
                <Header count={count} setCount={setCount} />
                <Home />
                <Shipment />
            </ContextCategory.Provider>
        </div>
    );
};

export default Context;