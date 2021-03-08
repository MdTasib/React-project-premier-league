import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();

    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])

    const [comment, setComment] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    const { title, body } = post;
    const { name, email } = comment;
    return (
        <div>
            <h2>post id : {id}</h2>
            <h3>title: {title}</h3>
            <h3>User name : {name} // User Email : {email}</h3>
            <p>Post Description : {body}</p>
        </div>
    );
};

export default PostDetails;