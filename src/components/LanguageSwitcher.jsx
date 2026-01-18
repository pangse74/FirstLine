import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher-container">
      <select onChange={changeLanguage} value={i18n.language} className="language-select">
        <option value="ko">한국어</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
        <option value="es">Español</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
