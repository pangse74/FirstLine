import React from 'react';
import { useTranslation } from 'react-i18next';
import './InfoPage.css'; // Common CSS for info pages

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1 className="info-page-title">{t('terms.title')}</h1>
      <p className="info-page-paragraph">{t('terms.paragraph1')}</p>
      <p className="info-page-paragraph">{t('terms.paragraph2')}</p>
      <p className="info-page-paragraph">{t('terms.paragraph3')}</p>
    </div>
  );
};

export default TermsOfService;
