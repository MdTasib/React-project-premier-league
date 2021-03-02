import React, { useState } from 'react';
import './user.css';

const User = (props) => {
    const { email, name, phone, picture } = props.user;
    const fullName = `${name.first} ${name.last}`;
    const add = props.add;

    const [number, setNumber] = useState('');
    const showNumber = () => {
        setNumber(phone)
    }
    return (
        <div className="container">
            <div className='user-container'>
                <div className="user-image">
                    <img src={picture.large} alt="" />
                </div>
                <div className="user-info">
                    <h4>Name : {fullName}</h4>
                    <h5>Email : {email}</h5>
                    <h5>Phone : {number}</h5>
                    <button onClick={() => add(fullName)}>Add Me</button>
                    <button onClick={showNumber}>Show Number</button>
                </div>
            </div>
        </div>
    );
};

export default User;