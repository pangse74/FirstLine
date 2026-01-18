import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher'; // Import LanguageSwitcher

function App() {
  const [image, setImage] = useState(null);

  return (
    <HashRouter>
      <div className="App">
        <div style={{ position: 'fixed', top: '20px', left: '20px', display: 'flex', gap: '10px', zIndex: '1000' }}>
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
