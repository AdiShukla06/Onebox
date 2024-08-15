import React from 'react';
import HomeIcon from '../assets/HomeIcon.svg';
import UsersIcon from '../assets/UsersIcon.svg';
import MailIcon from '../assets/MailIcon.svg';
import SendIcon from '../assets/SendIcon.svg';
import ListIcon from '../assets/ListIcon.svg';
import NotificationsIcon from '../assets/NotificationsIcon.svg';
import AnalyticsIcon from '../assets/AnalyticsIcon.svg';
import Logo from '../assets/Logo.svg'; // Import your logo
import AccountIcon from '../assets/user.svg'; // Import your account icon
import {useDarkMode} from './DarkModeContext'

function LeftBar({ onIconClick }) {
  const {darkMode} = useDarkMode();
  return (
    <div className={`w-20 bg-gray-900 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} fixed top-0 left-0 h-screen flex flex-col justify-between`}>
      {/* Logo at the top */}
      <div className="p-5">
        <img src={Logo} alt="Logo" className="w-8 h-8" />
      </div>

      {/* Icons in the middle */}
      <ul className="flex flex-col items-center">
        <li className="mb-5 cursor-pointer" onClick={() => onIconClick('home')}>
          <img src={HomeIcon} alt="Home Icon" className="w-8 h-8" />
        </li>
        <li className="mb-5"  >
          <img src={UsersIcon} alt="Users Icon" className="w-8 h-8" />
        </li>
        <li className="mb-5 cursor-pointer" onClick={() => onIconClick('email')}>
          <img src={MailIcon} alt="Mail Icon" className="w-8 h-8" />
        </li>
        <li className="mb-5">
          <img src={SendIcon} alt="Send Icon" className="w-8 h-8" />
        </li>
        <li className="mb-5">
          <img src={ListIcon} alt="List Icon" className="w-8 h-8" />
        </li>
        <li className="mb-5">
          <img src={NotificationsIcon} alt="Notifications Icon" className="w-8 h-8" />
        </li>
        <li>
          <img src={AnalyticsIcon} alt="Analytics Icon" className="w-8 h-8" />
        </li>
      </ul>

      {/* Account icon at the bottom */}
      <div className="p-5">
        <img src={AccountIcon} alt="Account Icon" className="w-8 h-8" />
      </div>
    </div>
  );
}

export default LeftBar;
