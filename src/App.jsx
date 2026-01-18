import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

function App() {
  const [image, setImage] = useState(null);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage setImage={setImage} />} />
        <Route path="/result" element={<ResultPage image={image} setImage={setImage} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
