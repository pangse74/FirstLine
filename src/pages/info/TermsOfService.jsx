import React from 'react';
import { useTranslation } from 'react-i18next';
import './InfoPage.css'; // Common CSS for info pages

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1 className="info-page-title">{t('terms.title')}</h1>
      <p className="info-page-paragraph">{t('terms.introduction')}</p>

      <section className="terms-section">
        <h2>{t('terms.serviceDescription.title')}</h2>
        <p className="info-page-paragraph">{t('terms.serviceDescription.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.userAccounts.title')}</h2>
        <p className="info-page-paragraph">{t('terms.userAccounts.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.userConduct.title')}</h2>
        <p className="info-page-paragraph">{t('terms.userConduct.paragraph1')}</p>
        <p className="info-page-paragraph">{t('terms.userConduct.paragraph2')}</p>
        <ul>
          <li>{t('terms.userConduct.list1')}</li>
          <li>{t('terms.userConduct.list2')}</li>
          <li>{t('terms.userConduct.list3')}</li>
          <li>{t('terms.userConduct.list4')}</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>{t('terms.intellectualProperty.title')}</h2>
        <p className="info-page-paragraph">{t('terms.intellectualProperty.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.userContent.title')}</h2>
        <p className="info-page-paragraph">{t('terms.userContent.paragraph1')}</p>
        <p className="info-page-paragraph">{t('terms.userContent.paragraph2')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.disclaimerOfWarranties.title')}</h2>
        <p className="info-page-paragraph">{t('terms.disclaimerOfWarranties.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.limitationOfLiability.title')}</h2>
        <p className="info-page-paragraph">{t('terms.limitationOfLiability.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.indemnification.title')}</h2>
        <p className="info-page-paragraph">{t('terms.indemnification.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.termination.title')}</h2>
        <p className="info-page-paragraph">{t('terms.termination.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.governingLaw.title')}</h2>
        <p className="info-page-paragraph">{t('terms.governingLaw.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.changesToTerms.title')}</h2>
        <p className="info-page-paragraph">{t('terms.changesToTerms.paragraph')}</p>
      </section>

      <section className="terms-section">
        <h2>{t('terms.contact.title')}</h2>
        <p className="info-page-paragraph">{t('terms.contact.paragraph')}</p>
        <p className="info-page-paragraph">{t('terms.contact.email')}</p>
      </section>
    </div>
  );
};

export default TermsOfService;
