import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ setImage }) => {
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

  return (
    <div className="home-container">
      <h1 className="title">첫인상 AI</h1>
      <p className="subtitle">사진 한 장으로 당신의 첫인상을 확인해보세요!</p>
      <div className="upload-container">
        <button className="upload-button" onClick={handleUploadClick}>
          사진 업로드
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
  );
};

export default HomePage;
