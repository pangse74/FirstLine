import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css'; // Import App.css

function App() {
  const [image, setImage] = useState(null);

  return (
    <HashRouter>
      <div className="App">
        <div className="utility-buttons-container">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<HomePage setImage={setImage} />} />
          <Route path="/result" element={<ResultPage image={image} setImage={setImage} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
