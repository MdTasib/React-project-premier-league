import React, { useState, useEffect } from 'react';
import User from './User';

const Person = () => {

    const [users, setUsers] = useState([]);
    const [selete, setSelete] = useState([]);
    const add = (event) => {
        setSelete([...selete, event])
    }

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, [])

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Our Team mumbers</h2>
            <ul>
                {
                    selete.map((m, index) => <li key={index}>{m}</li>)
                }
            </ul>
            {
                users.map(user => <User add={add} user={user} key={user.cell}></User>)
            }
        </div>
    );
};

export default Person;