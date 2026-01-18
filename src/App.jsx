import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

function App() {
  const [image, setImage] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage setImage={setImage} />} />
        <Route path="/result" element={<ResultPage image={image} setImage={setImage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
