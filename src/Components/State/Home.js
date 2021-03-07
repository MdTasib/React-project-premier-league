import React from 'react';

const Home = (props) => {
    const { count } = props;
    return (
        <div>
            <h2>This is Home {count}</h2>
        </div>
    );
};

export default Home;