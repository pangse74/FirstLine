import { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; // Import Link
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import AboutUs from './pages/info/AboutUs';
import PrivacyPolicy from './pages/info/PrivacyPolicy';
import TermsOfService from './pages/info/TermsOfService';
import BlogPage from './pages/BlogPage'; // Import BlogPage
import BlogPost from './pages/BlogPost'; // Import BlogPost
import HelpPage from './pages/info/HelpPage'; // Import HelpPage
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/help" element={<HelpPage />} /> {/* Help page route */}
        </Routes>
        <Footer /> {/* Include Footer component */}
      </div>
    </HashRouter>
  );
}

export default App;
