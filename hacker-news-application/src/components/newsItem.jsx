import React, { useState } from 'react';
import './newsItem.css';

const NewsItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="news-item">
      <div className="news-item__header" onClick={handleExpandClick}>
        <div className="news-item__score">Score : {item.score}</div>
        <div className="news-item__title">{item.title}</div>
      </div>
      {expanded && (
        <div className="news-item__details">
          <div className="news-item__byline">by {item.by}</div>
          <div className="news-item__url">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsItem;