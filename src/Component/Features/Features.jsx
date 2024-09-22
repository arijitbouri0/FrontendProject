import React from 'react';

// Reusable feature item component
const FeatureItem = ({ imgSrc, title, description }) => {
  return (
    <div className="feature__item text-center">
      <img src={imgSrc} alt={title} className=" mb-4 text-left" width="120" height="120" />
      <h4 className="feature__name text-xl font-bold mb-4 text-left">{title}</h4>
      <p className="feature__description text-gray-600 text-left text-base">{description}</p>
    </div>
  );
};

// Main Features wrapper component
const Features = () => {
  return (
    <div className="features-wrapper grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-20 bg-white">
      <FeatureItem
        imgSrc="https://printify.com/pfh/assets/legacy/higher-profits.svg"
        title="Higher Profits"
        description="We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
      />
      <FeatureItem
        imgSrc="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
        title="Robust Scaling"
        description="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
      />
      <FeatureItem
        imgSrc="https://printify.com/pfh/assets/legacy/best-selection.svg"
        title="Best Selection"
        description="With 900+ products and top quality brands, you can choose the best products for your business."
      />
    </div>
  );
};

export default Features;
