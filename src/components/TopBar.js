import React from 'react';
import './TopBar.css';

const TopBar = ({ onToggleSideNav }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <button className="menu-button" onClick={onToggleSideNav}>
          ☰
        </button>
        <h1 className="top-bar-title">Taniti</h1>
      </div>
    </div>
  );
};

export default TopBar;
