import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const FriendsInfo = (props) => {
    const { name, email, id } = props.friend;

    /* (2) Second way */
    // usehistory hooks use
    const history = useHistory();
    const handleFriends = friendId => {
        history.push(`/friend/${friendId}`)
    }

    const friendStyle = {
        border: '2px solid red',
        borderRadius: '5px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <h3>Friend Name : {name}</h3>
            <p>Email : {email}</p>

            {/* (1) First way*/}
            <button><Link to={`/friend/${id}`}>Show Details {id}</Link></button>
            <br />

            {/* (2) Second way */}
            <button onClick={() => handleFriends(id)}>Click Me</button>
        </div>
    );
};

export default FriendsInfo;