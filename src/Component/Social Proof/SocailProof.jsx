import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct CSS import for Swiper
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const SocialProof = () => {
  const reviews = [
    {
      name: 'Robert A. Voltaire',
      storeLink: 'https://www.ravenouseternalhunger.com/',
      comment: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
      photoClass: 'robert-voltaire',
      stars: 5,
    },
    {
      name: 'Quinten Barney',
      storeName: 'Etsy Merchant',
      comment: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
      photoClass: 'quinten-barney',
      stars: 5,
    },
    {
      name: 'Nikki',
      storeLink: 'https://mynerdlife.com/',
      comment: "Printify has been an amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
      photoClass: 'nikki',
      stars: 5,
    },
    {
      name: 'Spencer, Brett, and Kyle',
      storeLink: 'https://brotallion.com/',
      comment: 'Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.',
      photoClass: 'spencer-brett-kyle',
      stars: 5,
    },
    {
      name: 'April Showers',
      storeLink: 'https://afrounicorns.com/',
      comment: 'I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.',
      photoClass: 'april-showers',
      stars: 5,
    },
  ];

  return (
    <div className="social-proof py-12 bg-gray-100">
      <div className="social-proof-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="social-proof__description text-center mb-8">
          <h2 className="social-proof__title text-3xl font-bold">Trusted by over 8M sellers around the world</h2>
          <p className="social-proof__text text-lg mt-4">
            Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
          </p>
        </div>

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="social-proof__slide bg-white p-6 rounded-lg shadow-md">
                <div className="social-proof__photo-details flex items-center mb-4">
                  <div className={`social-proof__author-photo ${review.photoClass} w-16 h-16 rounded-full bg-gray-300`} />
                  <div className="social-proof__author-details ml-4">
                    <h4 className="social-proof__author-name font-semibold text-lg">{review.name}</h4>
                    {review.storeLink ? (
                      <a href={review.storeLink} target="_blank" rel="noreferrer" className="link text-blue-500">
                        Store link
                      </a>
                    ) : (
                      <p className="social-proof__store-name text-gray-500">{review.storeName}</p>
                    )}
                    <div className="social-proof__stars flex mt-2">
                      {[...Array(review.stars)].map((_, i) => (
                        <i key={i} className="social-proof__star text-yellow-500">★</i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="social-proof__comment text-gray-600">{review.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SocialProof;
