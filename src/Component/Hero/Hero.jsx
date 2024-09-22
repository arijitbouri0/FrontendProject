import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="main-banner">
        <div className="main-banner-wrapper">
          <div className="main-banner__description">
            <h1>Create and sell custom products</h1>
            <ul className="main-banner__advantages">
              <li>100% Free to use</li>
              <li>900+ High-Quality Products</li>
              <li>Largest global print network</li>
            </ul>
            <div className="main-banner__navigation">
              <a href="/app/register">
                <button className="button button--primary button-navigation button-start-selling">
                  Start for free
                </button>
              </a>
              <button
                id="how-it-works"
                className="button button--secondary button-navigation button-with-icon"
              >
                <i className="how-it-works-link"></i> How it works?
              </button>
            </div>
            <p className="main-banner__info">Trusted by over 8M sellers around the world</p>
          </div>
          <div className="main-banner__picture">
            <div style={{ width: '100%', height: '100%' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461 456"
                width="461"
                height="456"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)' }}
              >
                <defs>
                  <clipPath id="__lottie_element_2">
                    <rect width="461" height="456" x="0" y="0"></rect>
                  </clipPath>
                  <image xlinkHref="https://printify.com/pfh/assets/animations/images/img_0.png"></image>
                  <image xlinkHref="https://printify.com/pfh/assets/animations/images/img_1.png"></image>
                  <image xlinkHref="https://printify.com/pfh/assets/animations/images/img_2.png"></image>
                  <image xlinkHref="https://printify.com/pfh/assets/animations/images/img_3.png"></image>
                  <image xlinkHref="https://printify.com/pfh/assets/animations/images/img_4.png"></image>
                  <image xlinkHref="https://printify.com/pfh/assets/animations/images/img_5.png"></image>
                </defs>
                
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
