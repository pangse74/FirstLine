import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ResultCard from '../components/ResultCard';

const ResultPage = ({ image, setImage, analysisType }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRetry = () => {
    setImage(null);
    navigate('/');
  };

  if (!image) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>{t('result.noImageUploaded')}</h2>
        <Link to="/">{t('result.goBackAndUpload')}</Link>
      </div>
    );
  }

  return <ResultCard image={image} onRetry={handleRetry} analysisType={analysisType} />;
};

export default ResultPage;
