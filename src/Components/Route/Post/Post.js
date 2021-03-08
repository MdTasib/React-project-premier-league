import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const { id, body, title } = props.post;

    const history = useHistory();

    const showDetail = id => {
        const url = `/post/${id}`
        history.push(url)
    }

    return (
        <div>
            <h3>User Id : {id}, Post Title : {title} </h3>
            <p>User Description: {body}</p>
            <button onClick={() => showDetail(id)}>Show Details</button>
        </div>
    );
};

export default Post;