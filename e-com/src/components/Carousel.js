import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from "react-router-dom"

const brandTexts = [
  'Huawei',
  'iPhone',
  'Samsung',
  'Oppo',
  'Redmi',
  'Xiaomi',
  'Tecno',
  'Sony',
  'Oraimo',
  'Honor',
  'One Plus',
  'Nokia',
  'Lenovo',
  'HP',
  'Dell',
  'Mac',
  'Asus',
  'Motorola',
  'LG',
  'Meizu',
  'Google (Pixel)',
  'Blackberry',
  'Alcatel',
  'ZTE',
  'Realme',
  'HTC',
  'Vivo'
];

function Carousel() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setOffset(offset => (offset + 1) % brandTexts.length);
      }
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);
  const handleMouseEnter = () => {
    setIsPaused(true);
    document.querySelector('.carousel-content').style.animationPlayState = 'paused';
  };
  const handleMouseLeave = () => {
    setIsPaused(false);
    document.querySelector('.carousel-content').style.animationPlayState = 'running';
  };
  return (
    <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <nav className="carousel-nav">
        {brandTexts.map((text, index) => (
          <a
            key={index}
            className={index === offset ? 'active' : ''}
            onClick={() => setOffset(index)}
          >
            {text}
          </a>
        ))}
      </nav>
      <div className="carousel-content">
        {brandTexts.map((text, index) => (
          <div
            key={index}
            className={`carousel-item ${index === offset ? 'active' : ''}`}
          >
            {text}
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
export default Carousel;