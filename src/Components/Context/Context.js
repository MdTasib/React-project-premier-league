import React, { useState, createContext } from 'react';
import Home from './Home';
import Shipment from './Shipment';
import Header from './Header';

export const ContextCategory = createContext();

const Context = () => {
    const [catagory, setCatagory] = useState('laptop');

    return (
        <div>
            <ContextCategory.Provider value={[catagory, setCatagory]}>
                <p>catagory : {catagory}</p>
                <Header />
                <Home />
                <Shipment />
            </ContextCategory.Provider>
        </div>
    );
};

export default Context;