import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])


    const { id, name, email, username } = friend;
    return (
        <div>
            <h2>Id : {id}</h2>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>UserName : {username}</p>
        </div>
    );
};

export default FriendDetails;