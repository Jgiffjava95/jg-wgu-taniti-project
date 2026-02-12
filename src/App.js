import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import Home from './components/pages/Home';
import Food from './components/pages/Food';
import Lodging from './components/pages/Lodging';
import Activities from './components/pages/Activities';
import Transportation from './components/pages/Transportation';
import FAQ from './components/pages/FAQ';

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Food':
        return <Food />;
      case 'Lodging':
        return <Lodging />;
      case 'Activities':
        return <Activities />;
      case 'Transportation':
        return <Transportation />;
      case 'FAQ':
        return <FAQ />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <TopBar onToggleSideNav={toggleSideNav} />
      <SideNav 
        isOpen={isSideNavOpen} 
        onClose={() => setIsSideNavOpen(false)} 
        onSelectPage={setCurrentPage}
      />
      <main className="content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
