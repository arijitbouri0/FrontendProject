import React from 'react';

const ConnectStore = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-16 md:px-24 md:py-24 flex flex-col ">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#17262b]">Connect your store</h2>
      <p className="text-center pt-4 text-base md:text-lg text-[#485256] opacity-70">
        Printify easily integrates with major e-commerce platforms and marketplaces
      </p>
      <div className="relative w-full pt-[80%] md:pt-[44.5%]" >
        <div className="absolute inset-0 w-full h-full" >
          <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url(https://printify.com/pfh/media/stores-background-QSGENTOX.svg)' }} />
          
          <a href="/prestashop/" className="absolute w-[15%] md:w-[10.5%] pt-[15%] md:pt-[10.5%] bg-center bg-no-repeat bg-white shadow-lg rounded-xl top-[55%] md:top-[48%] left-[10%] md:left-[24%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/presta-54F6AYUU.svg)' }} />
          <a href="/wix/" className="absolute w-[15%] md:w-[10.5%] pt-[15%] md:pt-[10.5%] bg-center bg-no-repeat bg-white shadow-lg rounded-xl top-[0%] md:top-[-2%] left-[75%] md:left-[94.8%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/wix-MWZCZDTE.svg)' }} />
          <a href="/woocommerce/" className="absolute w-[12%] md:w-[8%] pt-[12%] md:pt-[8%] bg-center bg-no-repeat bg-white shadow-lg rounded-lg top-[40%] md:top-[35%] left-[55%] md:left-[77%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/woo-PGFAG65X.svg)' }} />
          <a href="/squarespace/" className="absolute w-[15%] md:w-[10.5%] pt-[15%] md:pt-[10.5%] bg-center bg-no-repeat bg-white shadow-lg rounded-xl top-[15%] md:top-[10%] left-[35%] md:left-[64%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/squarespace-FIBF2RIF.svg)', backgroundSize: 'contain' }} />
          <a href="/shopify/" className="absolute w-[20%] md:w-[15%] pt-[20%] md:pt-[15%] bg-center bg-no-repeat bg-white shadow-lg rounded-xl top-[80%] md:top-[75%] left-[25%] md:left-[52%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/shopify-3NAPXPBF.svg)' }} />
          <a href="/integrations/" className="absolute w-[10%] md:w-[8%] pt-[10%] md:pt-[8%] bg-center bg-no-repeat bg-white shadow-lg rounded-lg top-[85%] md:top-[70%] left-[10%] md:left-[38%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg)', backgroundSize: 'contain' }} />
          <a href="/etsy/" className="absolute w-[25%] md:w-[16.5%] pt-[25%] md:pt-[16.5%] bg-center bg-no-repeat bg-white shadow-lg rounded-xl top-[65%] md:top-[59%] left-[60%] md:left-[88%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/etsy-MXXFYORZ.svg)' }} />
          <a href="/printify-api/" className="absolute w-[25%] md:w-[16%] pt-[25%] md:pt-[16%] bg-white shadow-lg rounded-xl top-[70%] md:top-[64%] left-[5%] md:left-[2%] transition-transform duration-300 hover:scale-110">
            <h2 className="absolute text-2xl md:text-4xl text-[#485256] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">API</h2>
          </a>
          <a href="/bigcommerce/" className="absolute w-[10%] md:w-[8%] pt-[10%] md:pt-[8%] bg-center bg-no-repeat bg-white shadow-lg rounded-lg top-[5%] md:top-[3%] left-[20%] md:left-[32%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg)' }} />
          <div className="absolute w-[18%] md:w-[14%] pt-[18%] md:pt-[14%] bg-center bg-no-repeat bg-[#18c75a] rounded-xl top-[30%] md:top-[25%] left-[30%] md:left-[45%] transition-transform duration-300 hover:scale-110" style={{ backgroundImage: 'url(https://printify.com/pfh/media/printify-E3TBSF5R.svg)' }} />
        </div>
      </div>
    </div>
  );
};

export default ConnectStore;
