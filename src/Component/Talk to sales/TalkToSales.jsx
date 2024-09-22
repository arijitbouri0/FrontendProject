import React from 'react';

const TalkToSales = ({ question = "Are you a large business looking for custom solutions?", buttonText = "Talk to sales" }) => {
  return (
    <div id="talk-to-sales" className="w-full max-w-[1104px] mx-auto py-[144px] relative my-32">
      <div className="absolute inset-0 px-6">
        <div className="w-full h-full flex justify-between items-center bg-[#e2f7e3] bg-no-repeat bg-right bg-contain rounded-[20px]" style={{ backgroundImage: 'url(https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg)' }}>
          <h4 className="max-w-[45%] leading-[32px] text-[#1f6b45] pl-[10.7%] text-lg md:text-xl font-bold tracking-tight">
            {question}
          </h4>
          <a href="/contact-sales/" target="_blank" rel="noopener noreferrer" className="pr-[10.7%] md:pr-[7.7%]">
            <button 
              className="inline-block h-[48px] w-[139px] bg-white border border-gray-300 text-[#353a47] rounded-md font-medium text-base transition duration-100 shadow-none hover:shadow-md"
              aria-label="Talk to sales"
            >
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TalkToSales;
