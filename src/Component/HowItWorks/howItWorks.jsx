import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const howItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="how-it-works-wrapper">
        <div className="how-it-works__short-description">
          <div className="how-it-works__main-image">
            <div className="how-it-works__product-links">
              <a href="/app/products/home-and-living/mugs" title="Mugs" className="how-it-works__product-link how-it-works__product-mug"></a>
              <a href="/app/products/accessories/hats" title="Hats" className="how-it-works__product-link how-it-works__product-hat-1"></a>
              <a href="/app/products/accessories/phone-cases" title="Phone cases" className="how-it-works__product-link how-it-works__product-phone"></a>
              <a href="/app/products/accessories/hats" title="Hats" className="how-it-works__product-link how-it-works__product-hat-2"></a>
              <a href="/app/products/accessories/socks" title="Socks" className="how-it-works__product-link how-it-works__product-socks"></a>
              <a href="/app/products/mens-clothing/hoodies" title="Hoodies" className="how-it-works__product-link how-it-works__product-hoodie"></a>
              <a href="/app/products/mens-clothing/t-shirts" title="T-shirts" className="how-it-works__product-link how-it-works__t-shirt"></a>
            </div>
            <div className="how-it-works__designing">
              {/* Replace with your animation component */}
              <img src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="Designing" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className="how-it-works__overview">
            <div className="how-it-works__overview-wrapper">
              <h2 className="how-it-works__overview-title">Easily add your design to a wide range of products</h2>
              <p className="how-it-works__overview-description">
                With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
              </p>
              <a href="/app/products" className="link how-it-works__products">All products</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default howItWorks;
