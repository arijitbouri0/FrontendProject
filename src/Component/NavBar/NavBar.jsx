import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger and close icons

const NavBar = () => {
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md py-2 px-3">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
        <div className="flex items-center">
          <img
            src="/image1.png" // Add your logo URL here
            alt="Logo"
            className="h-12 w-8"
          />
          <span className="hidden sm:inline-block ml-1 text-green-600 font-bold text-3xl">Printify</span>

        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600">Catalog</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setHowItWorksOpen(true)}
            onMouseLeave={() => setHowItWorksOpen(false)}
          >
            <button className="text-gray-700 hover:text-green-600 flex items-center">
              How it works
              <div className={`ml-2 transform transition-transform ${howItWorksOpen ? 'rotate-180' : 'rotate-0'}`}>▾</div>
            </button>
            {howItWorksOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-40">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">Pricing</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">Blog</a></li>
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-gray-700 hover:text-green-600 flex items-center">
              Services
              <div className={`ml-2 transform transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`}>▾</div>
            </button>
            {servicesOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-40">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service 2</a>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setUseCasesOpen(true)}
            onMouseLeave={() => setUseCasesOpen(false)}
          >
            <button className="text-gray-700 hover:text-green-600 flex items-center">
              Use-cases
              <div className={`ml-2 transform transition-transform ${useCasesOpen ? 'rotate-180' : 'rotate-0'}`}>▾</div>
            </button>
            {useCasesOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-40">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Use-case 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Use-case 2</a>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setHelpOpen(true)}
            onMouseLeave={() => setHelpOpen(false)}
          >
            <button className="text-gray-700 hover:text-green-600 flex items-center">
              Need help?
              <div className={`ml-2 transform transition-transform ${helpOpen ? 'rotate-180' : 'rotate-0'}`}>▾</div>
            </button>
            {helpOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-40">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">FAQ</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Support</a>
              </div>
            )}
          </li>
        </ul>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-1/2 h-full bg-white shadow-lg z-10">
            <div className='flex border-b-2 items-center p-2'>
              <div className='text-center w-4/5 p-2 text-2xl font-bold'>
                Menu
              </div>
              <div className='text-center w-1/5 text-xl' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} ><FaTimes size={24} /></div>
            </div>
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-green-600">Catalog</a>
              </li>
              <li>
                <a href="#" className="flex items-center  text-gray-700 hover:text-green-600" onClick={() => setHowItWorksOpen(!howItWorksOpen)} > How it works 
                <div className={`ml-2 transform transition-transform ${howItWorksOpen ? 'rotate-180' : 'rotate-0'}`}></div></a>
                { howItWorksOpen&& (
                  <div className="mt-2 text-gray-600">
                    <p>This is the content that explains how it works.</p>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-green-600">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-green-600">Blog</a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-green-600" onClick={() => setServicesOpen(!servicesOpen)} >Service<div className={`ml-2 transform transition-transform ${howItWorksOpen ? 'rotate-180' : 'rotate-0'}`}>▾</div></a>
                {servicesOpen && (
                  <div className="mt-2 text-gray-600">
                    <p>This is the content that explains how it works.</p>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-green-600" onClick={() => setUseCasesOpen(!useCasesOpen)} >Use-cases <div className={`ml-2 transform transition-transform ${howItWorksOpen ? 'rotate-180' : 'rotate-0'}`}>▾</div></a>
                {useCasesOpen && (
                  <div className="mt-2 text-gray-600">
                    <p>This is the content that explains how it works.</p>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-700 hover:text-green-600" onClick={() => setHelpOpen(!helpOpen)} >Need help? <div className={`ml-2 transform transition-transform ${howItWorksOpen ? 'rotate-180' : 'rotate-0'}`}>▾</div></a>
                {helpOpen && (
                  <div className="mt-2 text-gray-600">
                    <p>This is the content that explains how it works.</p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}

        {/* Login / Signup for large screens */}
        <div className=" md:flex items-center space-x-4">
          <button className="border border-gray-300 px-4 py-1 rounded hover:bg-gray-100">Log in</button>
          <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;  