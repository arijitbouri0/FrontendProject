import React from 'react';

const ProfitComponent = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="p-8 bg-gray-900 text-white rounded-l-lg flex flex-col justify-between w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Make Money, Risk-Free</h2>
            <p className="mb-6 text-gray-300">You pay for fulfillment only when you make a sale</p>
            <div className="mb-6 bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>You sell a t-shirt</span>
                <span>$30</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>You pay for its production</span>
                <span>$12</span>
              </div>
              <hr className="border-gray-600" />
              <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Your profit</span>
                <span className="text-green-400">$18</span>
              </div>
            </div>
          </div>
          <div>
            <button className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600">Start selling</button>
            <p className="mt-4 text-xs text-gray-400 text-center">100% Free to use · 900+ Products · Largest print network</p>
          </div>
        </div>
        <div className="w-1/2 p-8 bg-green-50 rounded-r-lg flex items-center justify-center">
          <img src="/image.png" alt="Illustration" className="max-h-full" />
        </div>
      </div>
    </div>
  );
};

export default ProfitComponent;
