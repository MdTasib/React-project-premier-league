import React from 'react';
import Category from './Category';

const Home = (props) => {
    const { count } = props;
    return (
        <div style={{ border: '1px solid red', padding: '10px' }}>
            <h2>This is Home {count}</h2>
            <Category count={count}></Category>
        </div>
    );
};

export default Home;