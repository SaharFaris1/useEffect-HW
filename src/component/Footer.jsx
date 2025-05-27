

import React from 'react';

function Footer() {
  return (
    <footer className="bg-orange-300 text-white py-6 mt-auto h-auto">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Character Explorer. All rights reserved.
        </p>
        <p className="text-sm ">
         Explore characters from different universes
        </p>
      </div>
    </footer>
  );
}

export default Footer;