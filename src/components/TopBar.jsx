import React, { useState } from 'react';
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';
import {useDarkMode} from './DarkModeContext'

function TopBar() {
  // const [darkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   // You can add logic here to toggle the actual dark mode in your app
  // };

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`bg-gray-100 text-gray-800 p-4 fixed top-0 left-0 right-0 flex items-center justify-between shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
      style={{ marginLeft: '80px', width: `calc(100% - 60px)` }} // Adjust width and margin-left based on LeftBar width
    >
      <div className="text-lg font-semibold">
        Onebox
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200"
        >
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          <span className="sr-only">Toggle Dark Mode</span>
        </button>
        <div className="flex items-center space-x-2">
          <span>Aditya's Workspace</span>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaChevronDown size={20} />
            <span className="sr-only">Workspace Dropdown</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
