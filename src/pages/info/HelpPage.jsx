import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../../data/blog/blogPosts'; // Reusing blog posts as help topics
import './InfoPage.css'; // Assuming common styling for info pages

function HelpPage() {
  const { t } = useTranslation();

  return (
    <div className="info-page-container">
      <h1>{t('help.title')}</h1>
      <p>{t('help.description')}</p>

      <div className="help-topics-list">
        <h2>{t('help.topics')}</h2>
        {blogPosts.map(post => (
          <div key={post.id} className="help-topic-item">
            <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
      <p>{t('help.contactSupport')}</p>
    </div>
  );
}

export default HelpPage;
