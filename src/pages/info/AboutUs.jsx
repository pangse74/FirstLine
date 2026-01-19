import React from 'react';
import { useTranslation } from 'react-i18next';
import './InfoPage.css'; // Common CSS for info pages

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1 className="info-page-title">{t('about.title')}</h1>
      <p className="info-page-paragraph">{t('about.paragraph1')}</p>
      <p className="info-page-paragraph">{t('about.paragraph2')}</p>
      <p className="info-page-paragraph">{t('about.paragraph3')}</p>

      <h2 className="info-page-subtitle">{t('about.publisherInfo.title')}</h2>
      <p className="info-page-paragraph">{t('about.publisherInfo.serviceName')}</p>
      <p className="info-page-paragraph">{t('about.publisherInfo.operator')}</p>
      <p className="info-page-paragraph">{t('about.publisherInfo.contact')}</p>
    </div>
  );
};

export default AboutUs;
