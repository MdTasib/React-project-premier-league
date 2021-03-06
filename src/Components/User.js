import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    const greeting = familiar ? <p>Hello, Friend</p> : <p>How the hell are you?</p>
    return (
        <div className="container">
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar ? <p>I will buy food for you</p> : <p>lets eat his his whose whose?</p>
                }
            </div>
            <div>
                <h2>Contact</h2>
                {
                    familiar && <p>Ohidul Alam -> It's my facebook id</p>
                }
            </div>
        </div>
    );
};

export default User;