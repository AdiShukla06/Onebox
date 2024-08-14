import React, { useState } from 'react';
import LeftBar from '../components/LeftBar';
import Email from '../components/Email';
import TopBar from '../components/TopBar';
import Home from '../components/Home';

function OneboxPage() {
  const [currentView, setCurrentView] = useState('home'); // Default view

  const handleIconClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="h-screen">
      <LeftBar onIconClick={handleIconClick} />
      <TopBar />
      
      <div className="ml-20 mt-16 p-0 h-full ">
        {currentView === 'home' && <Home />}
        {currentView === 'email' && <Email />}
      </div>
    </div>
  );
}

export default OneboxPage;
