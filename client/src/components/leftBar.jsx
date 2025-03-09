import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';

const LeftBar = () => {
  return (
    <div className="min-h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-10 fixed">
      {/* Logo */}
      <a href="/" className="mb-8 logo">
        <img src="/general/logo.png" alt="Logo" className=" w-12 h-12 object-contain" />
      </a>

      {/* Navigation */}
      <nav className="flex flex-col w-full gap-4">
        <a href="/" className="flex items-center justify-center w-full h-12 hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faHome} size="lg" />
        </a>
        <a href="/" className="flex items-center justify-center w-full h-12 hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </a>
        <a href="/" className="flex items-center justify-center w-full h-12 hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </a>
        <a href="/" className="flex items-center justify-center w-full h-12 hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faMessage} size="lg" />
        </a>
      </nav>
    </div>
  );
};

export default LeftBar;
