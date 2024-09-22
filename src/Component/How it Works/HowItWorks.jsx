import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';

const HowItWorks = () => {
  return (
    <div className="how-it-works bg-gray-50 py-8">
      <div className="how-it-works-wrapper max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide className="how-it-works__description-item text-left mb-2">
            <img
              src="https://printify.com/pfh/assets/legacy/custom-products.png"
              alt="Create custom products"
              className="how-it-works__description-img mx-auto mb-4 w-40 h-40"
            />
            <h6 className="how-it-works__description-title-1 text-lg font-bold text-green-600">Create</h6>
            <h4 className="how-it-works__description-title-2 text-2xl font-semibold mb-2">custom products</h4>
            <p className="how-it-works__description-text text-gray-600">
              Easily add your designs to a wide range of products using our free tools.
            </p>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide className="how-it-works__description-item text-left">
            <img
              src="https://printify.com/pfh/assets/legacy/your-products.png"
              alt="Sell on your terms"
              className="how-it-works__description-img mx-auto mb-4 w-40 h-40"
            />
            <h6 className="how-it-works__description-title-1 text-lg font-bold text-green-600">Sell</h6>
            <h4 className="how-it-works__description-title-2 text-2xl font-semibold mb-2">on your terms</h4>
            <p className="how-it-works__description-text text-gray-600">
              You choose the products, sale price, and where to sell.
            </p>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide className="how-it-works__description-item text-left">
            <img
              src="https://printify.com/pfh/assets/legacy/fullfillment.png"
              alt="We handle fulfillment"
              className="how-it-works__description-img mx-auto mb-4 w-40 h-40"
            />
            <h6 className="how-it-works__description-title-1 text-lg font-bold text-green-600">We handle</h6>
            <h4 className="how-it-works__description-title-2 text-2xl font-semibold mb-2">fulfillment</h4>
            <p className="how-it-works__description-text text-gray-600">
              Once an order is placed, we automatically handle all the printing and delivery logistics.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom CSS for mobile visibility */}
      <style jsx>{`
        .swiper-button-prev, .swiper-button-next {
          display: none; /* Hide by default */
        }

        @media (max-width: 639px) { /* Mobile screen size */
          .swiper-button-next, .swiper-button-prev {
            display: block; /* Show buttons on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
