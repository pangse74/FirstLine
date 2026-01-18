import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import { phrasesMeta } from '../data/phrases';
import './ResultCard.css';

const ResultCard = ({ image, onRetry }) => {
  const { t } = useTranslation();
  const [selectedPhraseId, setSelectedPhraseId] = useState(null);
  const cardRef = useRef(null);
  const contentToCaptureRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrasesMeta.length);
    setSelectedPhraseId(phrasesMeta[randomIndex].id);
  }, []);

  const handleShareOrDownload = async () => {
    if (!contentToCaptureRef.current) return;

    try {
      const canvas = await html2canvas(contentToCaptureRef.current, {
        useCORS: true,
      });
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const file = new File([blob], 'firstline_impression.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: t('appTitle'), // Assuming appTitle is defined in translations
          text: t('share.text', { phrase: t(`phrases.${selectedPhraseId}.core`) }), // Dynamic share text
          url: window.location.href,
        });
        console.log('Image shared successfully');
      } else {
        // Fallback to download if Web Share API is not available or cannot share files
        const link = document.createElement('a');
        link.download = 'firstline_impression.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        console.log('Image downloaded');
      }
    } catch (error) {
      console.error('Error sharing or downloading image:', error);
      // Fallback to download in case of Web Share API error
      if (contentToCaptureRef.current) {
        const canvas = await html2canvas(contentToCaptureRef.current, { useCORS: true });
        const link = document.createElement('a');
        link.download = 'firstline_impression.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        console.log('Image downloaded after share error');
      }
    }
  };

  if (!selectedPhraseId) {
    return <div>{t('common.loading')}</div>;
  }

  return (
    <div className="card-container">
      <div className="card" ref={cardRef}>
        <div ref={contentToCaptureRef} className="content-to-capture">
          <div className="image-wrapper">
            <img src={image} alt="User" className="user-image" />
          </div>
          <h2 className="core-phrase">{t(`phrases.${selectedPhraseId}.core`)}</h2>
          <p className="explain-phrase">▶ {t(`phrases.${selectedPhraseId}.explain`)}</p>
        </div>
        <div className="card-footer">
          <span className="hashtags">{t('result.hashtags')}</span>
          <div className="button-group">
            <button className="share-button" onClick={handleShareOrDownload}>
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
