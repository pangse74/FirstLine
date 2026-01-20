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
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownloadImage = async () => {
    if (!contentToCaptureRef.current) return;

    setIsDownloading(true);

    try {
        const elementToCapture = contentToCaptureRef.current;

        const captureContainer = document.createElement('div');
        const clonedNode = elementToCapture.cloneNode(true);

        captureContainer.style.width = '600px';
        captureContainer.style.padding = '20px';
        captureContainer.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--component-background').trim() || 'white';
        captureContainer.style.position = 'absolute';
        captureContainer.style.left = '-9999px'; 
        captureContainer.style.borderRadius = '20px';


        const h2 = clonedNode.querySelector('.core-phrase');
        if (h2) {
          h2.style.fontSize = '2.5rem';
          h2.style.textAlign = 'center';
        }

        const p = clonedNode.querySelector('.explain-phrase');
        if (p) {
          p.style.fontSize = '1.2rem';
          p.style.textAlign = 'center';
        }


        captureContainer.appendChild(clonedNode);
        
        document.body.appendChild(captureContainer);
        
        const canvas = await html2canvas(captureContainer, {
            useCORS: true,
            allowTaint: true,
            scale: window.devicePixelRatio * 2,
        });

        document.body.removeChild(captureContainer);
        
        const imageURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'firstline-result.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert(t('result.captureSuccess'));
    } catch (error) {
        console.error('Error capturing content:', error);
        alert(t('result.downloadError')); // Use downloadError for any capture/download issues
    } finally {
        setIsDownloading(false);
    }
};

const handleCopyText = () => {
    if (!selectedPhraseId) {
      return;
    }
    const coreText = t(`phrases.${selectedPhraseId}.core`);
    const explainText = t(`phrases.${selectedPhraseId}.explain`);
    const hashtags = t('result.hashtags');
    const textToCopy = `${coreText}\n\n${explainText}\n\n${hashtags}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert(t('result.copySuccess'));
    }, (err) => {
        console.error('Could not copy text: ', err);
        alert(t('result.copyError'));
    });
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
              onClick={handleDownloadImage}
              disabled={analysisType === 'celebrity' || isDownloading}
            >
              {isDownloading ? t('result.captureInProgress') : t('result.downloadImageButton')}
            </button>
            <button 
              className="share-button" 
              onClick={handleCopyText}
            >
              {t('result.copyTextButton')}
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
