import React from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-orange-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className=" flex items-center">
        <img src="https://cdn.custom-cursor.com/packs/5202/cartoon-final-space-little-cato-pack.png" className='w-40 h-15 ' alt="" srcset="" />
          </div>

  
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="/products" className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Products</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
           
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-500"
            >
              Home
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-500"
            >
              About
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-500"
            >
              Products
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-500"
            >
              Contact
            </a>
          
          </div>
        </div>
      )}
    </nav>
  );
}