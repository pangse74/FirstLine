import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="app-footer">
      <nav className="footer-nav">
        <Link to="/" className="footer-link">{t('footer.home')}</Link>
        <Link to="/about" className="footer-link">{t('footer.about')}</Link>
        <Link to="/privacy" className="footer-link">{t('footer.privacy')}</Link>
        <Link to="/terms" className="footer-link">{t('footer.terms')}</Link>
      </nav>
      <p className="footer-copyright">&copy; {new Date().getFullYear()} {t('appTitle')}. {t('footer.rightsReserved')}</p>
      <Link to="/help" className="footer-link">{t('common.help')}</Link> {/* Add Help link to footer */}
    </footer>
  );
};

export default Footer;
