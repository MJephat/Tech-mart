import React from 'react';

const BannerCard = () => {
  return (
    <div className="banner-card">
      <div className="banner-card-header">FREE SHIPPING</div>
      <div className="banner-card-paragraph">ON ORDERS OVER KSH5000 - USE COUPON CODE OVER KSH5000 </div>
      <div className="banner-card-buttons">
        <button className="button-products">Products</button>
        <button className="button-buy-online">Buy Online</button>
        <button className="button-offers">Offers</button>
      </div>
    </div>
  );
};

export default BannerCard;
