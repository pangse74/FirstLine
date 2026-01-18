import React from 'react';
import { useTranslation } from 'react-i18next';
import './InfoPage.css'; // Common CSS for info pages

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1 className="info-page-title">{t('privacy.title')}</h1>
      <p className="info-page-paragraph">{t('privacy.paragraph1')}</p>
      <p className="info-page-paragraph">{t('privacy.paragraph2')}</p>
      <p className="info-page-paragraph">{t('privacy.paragraph3')}</p>
      <p className="info-page-paragraph">{t('privacy.paragraph4')}</p>
    </div>
  );
};

export default PrivacyPolicy;
