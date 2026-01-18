import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { phrasesMeta } from '../data/phrases';
import './ResultCard.css';

const ResultCard = ({ image, onRetry }) => {
  const { t } = useTranslation();
  const [selectedPhraseId, setSelectedPhraseId] = useState(null);

  useEffect(() => {
    // Select a random phrase meta object when the component mounts
    const randomIndex = Math.floor(Math.random() * phrasesMeta.length);
    setSelectedPhraseId(phrasesMeta[randomIndex].id);
  }, []);

  if (!selectedPhraseId) {
    return <div>{t('common.loading')}</div>; // Or some other loading state, common.loading needs to be added
  }

  return (
    <div className="card-container">
      <div className="card">
        <div className="image-wrapper">
          <img src={image} alt="User" className="user-image" />
        </div>
        <h2 className="core-phrase">{t(`phrases.${selectedPhraseId}.core`)}</h2>
        <p className="explain-phrase">▶ {t(`phrases.${selectedPhraseId}.explain`)}</p>
        <div className="card-footer">
          <span className="hashtags">{t('result.hashtags')}</span>
          <div className="button-group">
            <button className="share-button">{t('result.shareButton')}</button>
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
