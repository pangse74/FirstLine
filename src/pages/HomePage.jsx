import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

const HomePage = ({ setImage }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      navigate('/result');
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">{t('home.title')}</h1>
      <p className="subtitle">{t('home.subtitle')}</p>
      <div className="upload-container">
        <button className="upload-button" onClick={handleUploadClick}>
          {t('home.uploadButton')}
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default HomePage;
