import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import AboutUs from './pages/info/AboutUs';
import PrivacyPolicy from './pages/info/PrivacyPolicy';
import TermsOfService from './pages/info/TermsOfService';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer'; // Import Footer component
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [analysisType, setAnalysisType] = useState('my-photo'); // 'my-photo', 'character', 'celebrity'

  return (
    <HashRouter>
      <div className="App">
        <div className="utility-buttons-container">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<HomePage setImage={setImage} analysisType={analysisType} setAnalysisType={setAnalysisType} />} />
          <Route path="/result" element={<ResultPage image={image} setImage={setImage} analysisType={analysisType} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer /> {/* Include Footer component */}
      </div>
    </HashRouter>
  );
}

export default App;
