import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';

const ResultPage = ({ image, setImage }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    setImage(null);
    navigate('/');
  };

  if (!image) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>No image uploaded.</h2>
        <Link to="/">Go back and upload</Link>
      </div>
    );
  }

  return <ResultCard image={image} onRetry={handleRetry} />;
};

export default ResultPage;
