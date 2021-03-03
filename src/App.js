import './App.css';
import React, { useState, useEffect } from 'react';
import News from './Components/News';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);
  // useing fetch
  // useEffect(() => {
  //   fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=c8aade1a77f44f6a829d25f014bac59b')
  //     .then(response => response.json())
  //     .then(data => setNews(data.articles))
  // }, [])

  // useing axios
  useEffect(() => {
    axios('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=c8aade1a77f44f6a829d25f014bac59b')
      .then(data => setNews(data.data.articles))
  }, [])

  return (
    <div className="App">
      <h2>Update News : {news.length}</h2>
      {
        news.map(item => <News item={item}></News>)
      }
    </div>
  )
}
export default App;
