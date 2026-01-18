import React, { useState, useEffect } from 'react';
import { phrases } from '../data/phrases';
import './ResultCard.css';

const ResultCard = ({ image, onRetry }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Select a random phrase when the component mounts
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setResult(phrases[randomIndex]);
  }, []);

  if (!result) {
    return <div>Loading...</div>; // Or some other loading state
  }

  return (
    <div className="card-container">
      <div className="card">
        <div className="image-wrapper">
          <img src={image} alt="User" className="user-image" />
        </div>
        <h2 className="core-phrase">{result.core_phrase}</h2>
        <p className="explain-phrase">▶ {result.explain}</p>
        <div className="card-footer">
          <span className="hashtags">#첫인상 #AI한줄 #FaceCaption</span>
          <div className="button-group">
            <button className="share-button">공유</button>
            <button className="retry-button" onClick={onRetry}>
              다시 찍기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
