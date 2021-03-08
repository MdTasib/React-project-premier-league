import React, { useContext } from 'react';
import Category from './Category';
import { ContextCategory } from './Context';

const Home = () => {
    const [count] = useContext(ContextCategory);
    return (
        <div style={{ border: '1px solid red', padding: '10px' }}>
            <h2>This is Home {count}</h2>
            <Category></Category>
        </div>
    );
};

export default Home;