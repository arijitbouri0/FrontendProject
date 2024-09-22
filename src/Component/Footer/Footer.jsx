import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTiktok, faXTwitter, faRedditAlien } from '@fortawesome/free-brands-svg-icons';

const footerData = {
  integrations: [
    'Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce',
    'Wix', 'WooCommerce', 'Squarespace', 'Printify API', 'Printify Pop-Up Store', 'Shutterstock'
  ],
  discover: [
    'Blog', 'Guides', 'Products', 'Easy print-on-demand', 'Shopify print-on-demand',
    'Woocommerce print-on-demand', 'Wix print-on-demand', 'Squarespace print-on-demand',
    'Make Your Own Shirt', 'Brands', 'Pricing', 'Shipping Rates', 'Mockup Generator'
  ],
  startSelling: [
    'Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks',
    'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs',
    'Custom Products', 'Custom All-Over Print Hoodies', 'Start a Clothing Line',
    'Start POD Business', 'Bulk Orders', 'Transferring To Printify'
  ],
  printify: [
    'Print on Demand', 'Print Providers', 'Experts Program', 'Printify Express Delivery',
    'Become a Partner', 'About', 'Printify Quality Promise', 'Jobs', 'Webinars',
    'Printing Profits Podcast', 'Contact Us', 'Affiliate', 'Contact Sales', 'POD Glossary',
    'Network Fulfillment Status', 'Merchant Protection', 'Security', 'Sitemap'
  ],
  policies: [
    'Intellectual Property Policy', 'Terms of Service', 'Privacy Policy', 'Security'
  ],
  socialMedia: [
    { name: 'Facebook', icon: faFacebookF, link: '#' },
    { name: 'Instagram', icon: faInstagram, link: '#' },
    { name: 'Twitter', icon: faXTwitter, link: '#' },
    { name: 'LinkedIn', icon: faLinkedinIn, link: '#' },
    { name: 'YouTube', icon: faYoutube, link: '#' },
    { name: 'TikTok', icon: faTiktok, link: '#' },
    { name: 'Reddit', icon: faRedditAlien, link: '#' }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className='flex justify-between items-center p-4'>
        {/* Logo Section */}
        <div className='flex items-center space-x-2'>
          <img src="/image1.png" alt="Printify Logo" className='h-12 w-8' />
          <h1 className='text-3xl font-bold text-green-600'>Printify</h1>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex items-center space-x-4">
          {footerData.socialMedia.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="text-white   bg-green-600 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={social.icon} className="text-lg" />
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-5 py-8">
        <div className="flex flex-wrap justify-between">
          {Object.keys(footerData).slice(0, 4).map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0">
              <h5 className="text-gray-800 font-bold mb-4">
                {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
              </h5>
              <ul>
                {footerData[section].map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-green-600">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              {footerData.socialMedia.map((social, idx) => (
                <a key={idx} href={social.link} className="text-gray-600 hover:text-green-600">
                  <i className={social.icon + " text-2xl"}></i>
                </a>
              ))}
            </div>
            <div className="text-gray-600 text-sm">
              &copy; 2024 Printify, Inc. All rights reserved.
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
            <ul className="flex justify-center space-x-6">
              {footerData.policies.map((policy, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-green-600">{policy}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;