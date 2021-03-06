import React, { useState, useEffect } from 'react';
import FriendsInfo from './FriendsInfo';

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            {
                friends.map(friend => <FriendsInfo key={friend.id} friend={friend}></FriendsInfo>)
            }
        </div>
    );
};

export default Friends;