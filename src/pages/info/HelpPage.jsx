import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../../data/blog/blogPosts'; // Reusing blog posts as help topics
import './InfoPage.css'; // Assuming common styling for info pages

function HelpPage() {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1 className="info-page-title">{t('help.title')}</h1>
      <p className="info-page-paragraph">{t('help.introduction')}</p>

      <section className="faq-section">
        <h2>{t('help.generalFAQ.title')}</h2>
        <div className="faq-item">
          <h3>{t('help.generalFAQ.q1.question')}</h3>
          <p>{t('help.generalFAQ.q1.answer')}</p>
        </div>
        <div className="faq-item">
          <h3>{t('help.generalFAQ.q2.question')}</h3>
          <p>{t('help.generalFAQ.q2.answer')}</p>
        </div>
        <div className="faq-item">
          <h3>{t('help.generalFAQ.q3.question')}</h3>
          <p>{t('help.generalFAQ.q3.answer')}</p>
        </div>
        <div className="faq-item">
          <h3>{t('help.generalFAQ.q4.question')}</h3>
          <p>{t('help.generalFAQ.q4.answer')}</p>
        </div>
      </section>

      <section className="faq-section">
        <h2>{t('help.dataPrivacyFAQ.title')}</h2>
        <div className="faq-item">
          <h3>{t('help.dataPrivacyFAQ.q1.question')}</h3>
          <p>{t('help.dataPrivacyFAQ.q1.answer')}</p>
        </div>
        <div className="faq-item">
          <h3>{t('help.dataPrivacyFAQ.q2.question')}</h3>
          <p>{t('help.dataPrivacyFAQ.q2.answer')} <Link to="/privacy">{t('footer.privacy')}</Link>.</p>
        </div>
      </section>

      <section className="faq-section">
        <h2>{t('help.technicalFAQ.title')}</h2>
        <div className="faq-item">
          <h3>{t('help.technicalFAQ.q1.question')}</h3>
          <p>{t('help.technicalFAQ.q1.answer')}</p>
        </div>
        <div className="faq-item">
          <h3>{t('help.technicalFAQ.q2.question')}</h3>
          <p>{t('help.technicalFAQ.q2.answer')}</p>
        </div>
      </section>

      <div className="help-topics-list">
        <h2>{t('help.topics')}</h2>
        <div className="articles-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="help-topic-item">
              <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="contact-support-text">{t('help.contactSupport')}</p>
      <p className="contact-email-text">{t('help.email')}</p>
    </div>
  );
}

export default HelpPage;

