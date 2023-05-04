import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: 'https://th.bing.com/th/id/R.c5c0ccacf1a86d1889b4b3b6f77d2dec?rik=gqKuw8EJoq9wFQ&pid=ImgRaw&r=0',
      effect: 'shake',
    },
    {
      src: 'https://crdms.images.consumerreports.org/f_auto,w_598/prod/products/cr/models/400088-black-and-white-laser-printers-hp-laserjet-pro-m404dn-10010573.jpg',
      effect: 'rotate',
    },
    {
      src: 'https://comparetv.net/wp-content/uploads/2020/09/TCL-65R635.jpg',
      effect: 'zoom-in',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.jaug8vP4MNVUmCfEx9Tl0gHaHa?pid=ImgDet&rs=1',
      effect: 'brighten',
    },
    {
      src: 'https://jamaicaclassifiedonline.com/images/2019/02/16/65510/apple-macbook-pro-133-l3t8wgiu_1.jpg',
      effect: 'fade',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.whb1ydm2xQip6SaDch5m3wHaFT?pid=ImgDet&rs=1',
      effect: 'shake',
    },
    {
      src: '',
      effect: 'rotate',
    },
    {
      src: '',
      effect: 'zoom-in',
    },
    {
    src: '',
      effect: 'brighten',
    },
    {
    src: '',
      effect: 'fade',
    },
    {
    src: '',
      effect: 'shake',
    },
    {
    src: '',
      effect: 'rotate',
    },
    {
    src: '',
      effect: 'zoom-in',
    },
    {
      src: '',
      effect: 'brighten',
    },
    {
    src: '',
      effect: 'fade',
    },
    {
      src: '',
      effect: 'shake',
    },
    {
      src: '',
      effect: 'rotate',
    },
    {
      src: '',
      effect: 'zoom-in',
    },
    {
      src: '',
      effect: 'brighten',
    },
    {
      src: '',
      effect: 'fade',
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);
  const getClassName = (index) => {
    const activeImageIndices = getActiveImageIndices();
    if (activeImageIndices.includes(index)) {
      return `card-image active-image active-effect-${images[index].effect}`;
    }
    return 'card-image';
  };
  const getActiveImageIndices = () => {
    const activeIndices = [];
    for (let i = activeIndex; i < activeIndex + 5; i++) {
      activeIndices.push(i % images.length);
    }
    return activeIndices;
  };
  return (
    <div className="card">
      {/* <h2>Welcome to our online store! Get ready to discover the best deals on the web.</h2> */}
      <div className="card-image-container">
        {images.map((image, index) => (
          <img
            className={getClassName(index)}
            src={image.src}
            alt={`Image ${index + 1}`}
            key={index}
          />
        ))}
      </div>
      <div className="card-text">
        {/* <h2 className="card-title">Techmart online store</h2> */}
        <p className="card-description">
        </p>
        <a href="#" className="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
};
export default Card;
// (14 kB)
// https://ae01.alicdn.com/kf/Sa955813a32b84514822e1658122b9960Q/2023-Global-Version-I14-Pro-Max-Smartphone-16GB-1TB-Full-Screen-Mobile-Phone-7-3Inch-Cellphone.jpg_220x220xz.jpg_.webp

// (16 kB)
// https://ae01.alicdn.com/kf/S3fd907dc8b684fc8bad91652af24fcf7Q/Wireless-Headphones-Bluetooth-5-1-Earphones-HiFi-Sound-Headset-Waterproof-Noise-Reduction-Sports-Earbuds.jpg_220x220xz.jpg_.webp

// (14 kB)
// https://ae01.alicdn.com/kf/Sffb584ea20eb4a30b97b903d437f35499/HIFI-Headset-Wireless-Headphone-Bluetooth-Over-Ear-Stereo-Heavy-Bass-Game-Earphone-TF-AUX-Music-Player.jpg_220x220xz.jpg_.webp

// (12 kB)
// https://ae01.alicdn.com/kf/S06005709448646f0a87e81c1b664b8952/Warm-Heart-Flower-Phone-Case-For-OPPO-A54-A74-A57-A96-A76-A36-A95-A12-A15.jpg_220x220xz.jpg_.webp

// (23 kB)
