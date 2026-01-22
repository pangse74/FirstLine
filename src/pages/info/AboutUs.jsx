import React from 'react';
import { useTranslation } from 'react-i18next';
import './InfoPage.css'; // Common CSS for info pages

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1 className="info-page-title">{t('about.title')}</h1>
      <p className="info-page-paragraph">{t('about.introduction')}</p>

      <section className="about-section">
        <h2>{t('about.ourStory.title')}</h2>
        <p className="info-page-paragraph">{t('about.ourStory.paragraph1')}</p>
        <p className="info-page-paragraph">{t('about.ourStory.paragraph2')}</p>
        <p className="info-page-paragraph">{t('about.ourStory.paragraph3')}</p>
      </section>

      <section className="about-section">
        <h2>{t('about.ourMission.title')}</h2>
        <p className="info-page-paragraph">{t('about.ourMission.paragraph')}</p>
      </section>

      <section className="about-section">
        <h2>{t('about.howItWorks.title')}</h2>
        <p className="info-page-paragraph">{t('about.howItWorks.paragraph')}</p>
      </section>

      <section className="about-section">
        <h2>{t('about.joinUs.title')}</h2>
        <p className="info-page-paragraph">{t('about.joinUs.paragraph')}</p>
      </section>

      <div className="publisher-info-section">
        <h2 className="info-page-subtitle">{t('about.publisherInfo.title')}</h2>
        <p className="info-page-paragraph">{t('about.publisherInfo.serviceName')}</p>
        <p className="info-page-paragraph">{t('about.publisherInfo.operator')}</p>
        <p className="info-page-paragraph">{t('about.publisherInfo.contact')}</p>
      </div>
    </div>
  );
};

export default AboutUs;
