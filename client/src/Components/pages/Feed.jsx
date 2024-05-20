
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'

function Feed() {

    const [news,Setnews] = useState([])
    const fetchnews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2cadeb36af4b4a1bab5bc9edd255dabb"
    ).then((res)=>{
        Setnews(res.data.articles)
    })
    }
    useEffect(()=>{
        fetchnews()
    },[])

  return (
    <div className="news-container">
      {news.map((item, index) => (
        <div key={index} className="news-item">
          <img src={item.urlToImage} alt="news" className="news-image" />
          <div className="news-content">
            <h2 className="news-title">{item.title}</h2>
            <p className="news-author">{item.author}</p>
            <p className="news-description">{item.description}</p>
            <a href={item.url} className="news-link" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feed
