import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './InfoPage.css'; // Common CSS for info pages

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1 className="info-page-title">{t('privacy.title')}</h1>
      <p className="info-page-paragraph">{t('privacy.effectiveDate')}</p>
      <p className="info-page-paragraph">{t('privacy.introduction')}</p>

      <section className="privacy-section">
        <h2>{t('privacy.dataCollection.title')}</h2>
        <h3>{t('privacy.dataCollection.photos.title')}</h3>
        <p className="info-page-paragraph">{t('privacy.dataCollection.photos.paragraph')}</p>
        <h3>{t('privacy.dataCollection.usageData.title')}</h3>
        <p className="info-page-paragraph">{t('privacy.dataCollection.usageData.paragraph1')}</p>
        <p className="info-page-paragraph">{t('privacy.dataCollection.usageData.paragraph2')}</p>
        <h3>{t('privacy.dataCollection.cookies.title')}</h3>
        <p className="info-page-paragraph">{t('privacy.dataCollection.cookies.paragraph1')}</p>
        <p className="info-page-paragraph">{t('privacy.dataCollection.cookies.paragraph2')}</p>
        <p className="info-page-paragraph">{t('privacy.dataCollection.cookies.paragraph3')}</p>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.dataUse.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.dataUse.paragraph')}</p>
        <ul>
          <li>{t('privacy.dataUse.list1')}</li>
          <li>{t('privacy.dataUse.list2')}</li>
          <li>{t('privacy.dataUse.list3')}</li>
          <li>{t('privacy.dataUse.list4')}</li>
          <li>{t('privacy.dataUse.list5')}</li>
          <li>{t('privacy.dataUse.list6')}</li>
          <li>{t('privacy.dataUse.list7')}</li>
          <li>{t('privacy.dataUse.list8')}</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.dataSharing.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.dataSharing.photos')}</p>
        <p className="info-page-paragraph">{t('privacy.dataSharing.serviceProviders')}</p>
        <p className="info-page-paragraph">{t('privacy.dataSharing.legalRequirements')}</p>
        <ul>
          <li>{t('privacy.dataSharing.legalList1')}</li>
          <li>{t('privacy.dataSharing.legalList2')}</li>
          <li>{t('privacy.dataSharing.legalList3')}</li>
          <li>{t('privacy.dataSharing.legalList4')}</li>
          <li>{t('privacy.dataSharing.legalList5')}</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.dataSecurity.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.dataSecurity.paragraph')}</p>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.yourRights.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.yourRights.paragraph1')}</p>
        <p className="info-page-paragraph">{t('privacy.yourRights.paragraph2')}</p>
        <p className="info-page-paragraph">{t('privacy.yourRights.paragraph3')}</p>
        <ul>
          <li>{t('privacy.yourRights.list1')}</li>
          <li>{t('privacy.yourRights.list2')}</li>
          <li>{t('privacy.yourRights.list3')}</li>
          <li>{t('privacy.yourRights.list4')}</li>
          <li>{t('privacy.yourRights.list5')}</li>
          <li>{t('privacy.yourRights.list6')}</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.childrenPrivacy.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.childrenPrivacy.paragraph')}</p>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.thirdPartyLinks.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.thirdPartyLinks.paragraph')}</p>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.policyChanges.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.policyChanges.paragraph')}</p>
      </section>

      <section className="privacy-section">
        <h2>{t('privacy.contact.title')}</h2>
        <p className="info-page-paragraph">{t('privacy.contact.paragraph')}</p>
        <p className="info-page-paragraph">{t('privacy.contact.email')}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
