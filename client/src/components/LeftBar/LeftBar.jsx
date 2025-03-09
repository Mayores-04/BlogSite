import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faBell, faMessage, faGear } from '@fortawesome/free-solid-svg-icons';
import "./LeftBar.css"

const LeftBar = () => {
  return (
    <div className="min-h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-10 fixed justify-between">

      <div className='flex flex-col justify-center items-center w-full'>
        {/* Logo */}
        <a href="/" className="mb-8 logo">
          <img src="/general/logo.png" alt="Logo" className=" w-12 h-12 object-contain" />
        </a>
        {/* Navigation */}
        <nav className="flex flex-col w-full gap-4 justify-center items-center">
          <a href="/" className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg">
            <FontAwesomeIcon icon={faHome} size="md" />
          </a>
          <a href="/create" className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg">
            <FontAwesomeIcon icon={faPlus} size="md" />
          </a>
          <a href="/" className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg">
            <FontAwesomeIcon icon={faBell} size="md" />
          </a>
          <a href="/" className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg">
            <FontAwesomeIcon icon={faMessage} size="md" />
          </a>
        </nav>
      </div>

      <button className="gearButton flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition  rounded-lg">
        <FontAwesomeIcon icon={faGear} size='md' />
      </button>
    </div>
  );
};

export default LeftBar;
