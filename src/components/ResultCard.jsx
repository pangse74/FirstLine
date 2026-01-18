import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas'; // Import html2canvas
import { phrasesMeta } from '../data/phrases';
import './ResultCard.css';

const ResultCard = ({ image, onRetry }) => {
  const { t } = useTranslation();
  const [selectedPhraseId, setSelectedPhraseId] = useState(null);
  const cardRef = useRef(null); // Ref to the card element

  useEffect(() => {
    // Select a random phrase meta object when the component mounts
    const randomIndex = Math.floor(Math.random() * phrasesMeta.length);
    setSelectedPhraseId(phrasesMeta[randomIndex].id);
  }, []);

  const handleDownloadImage = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        useCORS: true, // Important for images loaded from different origins
        // You might need to set windowWidth and windowHeight if your card is responsive
        // width: cardRef.current.offsetWidth,
        // height: cardRef.current.offsetHeight,
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'firstline_impression.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  if (!selectedPhraseId) {
    return <div>{t('common.loading')}</div>;
  }

  return (
    <div className="card-container">
      <div className="card" ref={cardRef}> {/* Attach ref to the card */}
        <div className="image-wrapper">
          <img src={image} alt="User" className="user-image" />
        </div>
        <h2 className="core-phrase">{t(`phrases.${selectedPhraseId}.core`)}</h2>
        <p className="explain-phrase">▶ {t(`phrases.${selectedPhraseId}.explain`)}</p>
        <div className="card-footer">
          <span className="hashtags">{t('result.hashtags')}</span>
          <div className="button-group">
            <button className="share-button" onClick={handleDownloadImage}>
              {t('result.saveImageButton')} {/* New translation key */}
            </button>
            <button className="retry-button" onClick={onRetry}>
              {t('result.retryButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
