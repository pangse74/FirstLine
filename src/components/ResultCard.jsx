import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import { phrasesMeta } from '../data/phrases';
import { characterImageMapping } from '../data/characters';
import './ResultCard.css';

const ResultCard = ({ image, onRetry, analysisType }) => {
  const { t } = useTranslation();
  const [selectedPhraseId, setSelectedPhraseId] = useState(null);
  const [characterImageSrc, setCharacterImageSrc] = useState(null);
  const cardRef = useRef(null);
  const contentToCaptureRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrasesMeta.length);
    const phraseId = phrasesMeta[randomIndex].id;
    setSelectedPhraseId(phraseId);

    if (analysisType === 'character') {
      const imageName = characterImageMapping[phraseId];
      // Dynamically import the image
      import(`../assets/characters/${imageName}.png`)
        .then(imageModule => {
          setCharacterImageSrc(imageModule.default);
        })
        .catch(err => console.error("Failed to load character image:", err));
    }
  }, [analysisType]);

  const handleShareOrDownload = async () => {
    if (!contentToCaptureRef.current || analysisType === 'celebrity') return;

    // To ensure the character image is loaded before capture
    const imageToWaitFor = contentToCaptureRef.current.querySelector('.display-image');
    if (imageToWaitFor && !imageToWaitFor.complete) {
        await new Promise(resolve => {
            imageToWaitFor.onload = resolve;
            imageToWaitFor.onerror = resolve; // Continue even if image fails to load
        });
    }

    try {
      const canvas = await html2canvas(contentToCaptureRef.current, {
        useCORS: true,
        allowTaint: true,
        onclone: (document) => {
            // This is a workaround to ensure images are loaded in the cloned document
            const allImages = document.querySelectorAll('img');
            allImages.forEach(img => {
                if(!img.complete) {
                    // You might need a more robust way to handle this in a real app
                    console.warn('Image not fully loaded for canvas render:', img.src);
                }
            })
        }
      });
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const file = new File([blob], 'firstline_impression.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: t('appTitle'),
          text: t('share.text', { phrase: t(`phrases.${selectedPhraseId}.core`) }),
          url: window.location.href,
        });
      } else {
        const link = document.createElement('a');
        link.download = 'firstline_impression.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
    } catch (error) {
      console.error('Error sharing or downloading image:', error);
    }
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
          <div className="image-wrapper celebrity-wrapper">
             <div className="image-placeholder">?</div>
             <p className="celebrity-text">A real implementation would use an external API to find a celebrity look-alike.</p>
             <button 
                className="find-celebrity-button" 
                onClick={() => window.open('https://www.google.com/search?q=celebrity+look+alike+finder', '_blank')}
              >
                {t('result.findCelebrityButton')}
              </button>
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
