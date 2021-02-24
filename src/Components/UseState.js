import React, { useState } from 'react';

export default function Count() {

    const [count, setCount] = useState(0)
    const buttonHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Numbers of count : {count}</h2>
            <button onClick={buttonHandler}>ADD</button>
        </div>
    )
}