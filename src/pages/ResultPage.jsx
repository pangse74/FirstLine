import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ResultCard from '../components/ResultCard';
import './ResultPage.css'; // Import the new CSS file

// Import example images
import example1 from '../assets/characters/character-5.png';
import example2 from '../assets/characters/character-8.png';
import example3 from '../assets/characters/character-15.png';

const ResultPage = ({ image, setImage, analysisType }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRetry = () => {
    setImage(null);
    navigate('/');
  };

  const exampleResults = [
    {
      image: example1,
      phrase: t('phrases.phrase61.core'),
      explanation: t('phrases.phrase61.explain'),
    },
    {
      image: example2,
      phrase: t('phrases.phrase22.core'),
      explanation: t('phrases.phrase22.explain'),
    },
    {
      image: example3,
      phrase: t('phrases.phrase85.core'),
      explanation: t('phrases.phrase85.explain'),
    },
  ];

  if (!image) {
    return (
      <div className="result-page-empty">
        <div className="empty-state-container">
          <h2>{t('result.noImageUploaded')}</h2>
          <p>{t('result.noImageUploadedDescription')}</p>
          <Link to="/" className="upload-link-button">{t('result.goBackAndUpload')}</Link>
        </div>
        <div className="example-results-container">
          <h3>{t('result.examplesTitle')}</h3>
          <div className="examples-grid">
            {exampleResults.map((ex, index) => (
              <div key={index} className="example-card">
                <img src={ex.image} alt={`Example ${index + 1}`} className="example-image" />
                <div className="example-text">
                  <p className="example-phrase">"{ex.phrase}"</p>
                  <p className="example-explanation">{ex.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <ResultCard image={image} onRetry={handleRetry} analysisType={analysisType} />;
};

export default ResultPage;
