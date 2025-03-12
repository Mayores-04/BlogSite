import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faBell,
  faMessage,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./LeftBar.css";
import { useState } from "react";

const LeftBar = () => {
  const [open, setSetting] = useState(false);

  return (
    <div className="min-h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-10 fixed justify-between">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Logo */}
        <a href="/" className="mb-8 logo">
          <img
            src="/transparentLogo.png"
            alt="Logo"
            className=" w-12 h-12 object-contain"
          />
        </a>
        {/* Navigation */}
        <nav className="flex flex-col w-full gap-4 justify-center items-center">
          <a
            href="/"
            className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg"
          >
            <FontAwesomeIcon icon={faHome} size="md" />
          </a>
          <a
            href="/create"
            className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg"
          >
            <FontAwesomeIcon icon={faPlus} size="md" />
          </a>
          <a
            href="/"
            className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg"
          >
            <FontAwesomeIcon icon={faBell} size="md" />
          </a>
          <a
            href="/"
            className="flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition rounded-lg"
          >
            <FontAwesomeIcon icon={faMessage} size="md" />
          </a>
        </nav>
      </div>
      <button
        onClick={() => setSetting((prev) => !prev)}
        className="gearButton flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition  rounded-lg"
      >
        <FontAwesomeIcon icon={faGear} size="md" />
      </button>
      {open && (
        <div className="setting absolute z-1000 text-black h-auto bottom-12 left-15">
          <div className="flex flex-col">
            <a href="">Logout</a>
            <a href="">Logout</a>
            <a href="">Logout</a>
            <a href="">Logout</a>
          </div>
          <div className="flex flex-col">
            <a href="">Logout</a>
            <a href="">Logout</a>
            <a href="">Logout</a>
            <a href="">Logout</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftBar;
