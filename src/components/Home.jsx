import React from 'react';
import NoMessageImage from '../assets/nomessage.png'; // Import your image
import { useDarkMode } from './DarkModeContext';

function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} overflow-hidden`}>
      <img src={NoMessageImage} alt="No Messages" className="mb-4" />
      <div className="text-center">
        <p className="text-xl font-bold mb-2">
          It's the beginning of the legendary sales pipeline
        </p>
        <p className="text-lg">
          When you have inbound E-mails<br />
          you'll see them here
        </p>
      </div>
    </div>
  );
}

export default Home;
