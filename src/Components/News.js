import React from 'react';

const News = (props) => {
    const { urlToImage, description, title, url, author } = props.item;
    return (
        <div>
            <img src={urlToImage} alt="" />
            <h2>Headline : {title}</h2>
            <p>News Description : {description}</p>
            <p>Author : {author || 'Hello'}</p>
            <a href={url} target="_blank">Veiw all</a>
        </div>
    );
};

export default News;