import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../data/blog/blogPosts';
import './HomePage.css';

const HomePage = ({ setImage, analysisType, setAnalysisType }) => {
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

  const handleAnalysisTypeChange = (event) => {
    setAnalysisType(event.target.value);
  };

  // Get the 3 most recent blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="title">{t('home.title')}</h1>
        <p className="subtitle">{t('home.subtitle')}</p>
        
        <div className="analysis-type-container">
          <label className="analysis-type-label">
            <input 
              type="radio" 
              name="analysisType" 
              value="my-photo" 
              checked={analysisType === 'my-photo'} 
              onChange={handleAnalysisTypeChange} 
            />
            {t('home.myPhoto')}
          </label>
          <label className="analysis-type-label">
            <input 
              type="radio" 
              name="analysisType" 
              value="character" 
              checked={analysisType === 'character'} 
              onChange={handleAnalysisTypeChange} 
            />
            {t('home.character')}
          </label>
          <label 
            className={`analysis-type-label ${'disabled'}`} 
            title="백엔드 준비 후 활성화될 예정입니다."
          >
            <input 
              type="radio" 
              name="analysisType" 
              value="celebrity" 
              checked={analysisType === 'celebrity'} 
              onChange={handleAnalysisTypeChange} 
              disabled={true}
            />
            {t('home.celebrity')}
          </label>
        </div>

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

      <section className="about-service-section">
        <h2>{t('home.aboutService.title')}</h2>
        <p>{t('home.aboutService.paragraph')}</p>
      </section>

      <section className="how-to-use-section">
        <h2>{t('home.howToUse.title')}</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>{t('home.howToUse.step1.title')}</h3>
            <p>{t('home.howToUse.step1.description')}</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>{t('home.howToUse.step2.title')}</h3>
            <p>{t('home.howToUse.step2.description')}</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>{t('home.howToUse.step3.title')}</h3>
            <p>{t('home.howToUse.step3.description')}</p>
          </div>
        </div>
      </section>

      <section className="latest-insights-section">
        <h2>{t('home.latestInsights')}</h2>
        <div className="insights-container">
          {recentPosts.map(post => (
            <div key={post.id} className="insight-card">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more-link">{t('common.readMore')}</Link>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/blog" className="view-all-link">{t('home.viewAllPosts')}</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
