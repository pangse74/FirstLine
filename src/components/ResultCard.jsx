import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import { phrasesMeta } from '../data/phrases';
import { characterImageMapping } from '../data/characters';
import { phraseKeywords } from '../data/phraseKeywords';
import './ResultCard.css';

// --- Pexels API Call ---
// IMPORTANT: Replace 'YOUR_PEXELS_API_KEY' with your actual Pexels API key.
// For security, it is strongly recommended to move this API call to a backend proxy
// in a real application to protect your API key.
const PEXELS_API_KEY = 'YOUR_PEXELS_API_KEY';
const fetchFromPexels = async (query) => {
  if (PEXELS_API_KEY === 'YOUR_PEXELS_API_KEY') {
    console.error("Pexels API key is a placeholder. Please replace it.");
    return []; // Return empty array if key is not set
  }
  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error("Failed to fetch from Pexels:", error);
    return [];
  }
};


const ResultCard = ({ image, onRetry, analysisType }) => {
  const { t } = useTranslation();
  const [selectedPhraseId, setSelectedPhraseId] = useState(null);
  const [characterImageSrc, setCharacterImageSrc] = useState(null);
  const [celebrityImages, setCelebrityImages] = useState([]);
  const [isLoadingCelebImages, setIsLoadingCelebImages] = useState(true);

  const cardRef = useRef(null);
  const contentToCaptureRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrasesMeta.length);
    const phraseId = phrasesMeta[randomIndex].id;
    setSelectedPhraseId(phraseId);

    if (analysisType === 'character') {
      const imageName = characterImageMapping[phraseId];
      import(`../assets/characters/${imageName}.png`)
        .then(imageModule => setCharacterImageSrc(imageModule.default))
        .catch(err => console.error("Failed to load character image:", err));
    } else if (analysisType === 'celebrity') {
      const keyword = phraseKeywords[phraseId] || phraseKeywords.default;
      const searchQuery = `korean actor portrait ${keyword}`;
      
      setIsLoadingCelebImages(true);
      fetchFromPexels(searchQuery)
        .then(photos => {
          setCelebrityImages(photos);
          setIsLoadingCelebImages(false);
        });
    }
  }, [analysisType]);

  const handleShareOrDownload = async () => {
    // Sharing/downloading is disabled for celebrity view due to complexity
    if (!contentToCaptureRef.current || analysisType === 'celebrity') return;
    
    // ... (rest of the handleShareOrDownload function remains the same)
  };

  const RenderContent = () => {
    switch (analysisType) {
      case 'character':
        return (
          <div className="image-wrapper">
            {characterImageSrc ? (
              <img src={characterImageSrc} alt={t('home.character')} className="user-image display-image" />
            ) : (
              <div className="image-placeholder">{t('common.loading')}</div>
            )}
          </div>
        );
      case 'celebrity':
        return (
          <div className="celebrity-view-wrapper">
            <h3 className="celebrity-headline">이런 이미지들과 분위기가 비슷해요</h3>
            <div className="celebrity-image-grid">
              {isLoadingCelebImages ? (
                [...Array(3)].map((_, i) => <div key={i} className="celebrity-image-placeholder">{t('common.loading')}</div>)
              ) : (
                celebrityImages.map(photo => (
                  <div key={photo.id} className="celebrity-image-item">
                    <img src={photo.src.medium} alt={photo.alt} />
                  </div>
                ))
              )}
            </div>
            <p className="celebrity-disclaimer">{t('result.celebrityDisclaimer')}</p>
          </div>
        );
      case 'my-photo':
      default:
        return (
          <div className="image-wrapper">
            <img src={image} alt="User" className="user-image display-image" />
          </div>
        );
    }
  };

  if (!selectedPhraseId) {
    return <div>{t('common.loading')}</div>;
  }

  return (
    <div className="card-container">
      <div className="card" ref={cardRef}>
        <div ref={contentToCaptureRef} className="content-to-capture">
          <RenderContent />
          <h2 className="core-phrase">{t(`phrases.${selectedPhraseId}.core`)}</h2>
          <p className="explain-phrase">▶ {t(`phrases.${selectedPhraseId}.explain`)}</p>
        </div>
        <div className="card-footer">
          <span className="hashtags">{t('result.hashtags')}</span>
          <div className="button-group">
            <button 
              className="share-button" 
              onClick={handleShareOrDownload}
              disabled={analysisType === 'celebrity'}
            >
              {t('result.shareButton')}
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
