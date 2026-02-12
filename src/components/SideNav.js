import React from 'react';
import './SideNav.css';

const SideNav = ({ isOpen, onClose, onSelectPage }) => {
  const options = [
    'Home',
    'Food',
    'Lodging',
    'Activities',
    'Transportation',
    'FAQ'
  ];

  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <nav className="nav-links">
        {options.map((option) => (
          <button
            key={option}
            className="nav-link"
            onClick={() => {
              onSelectPage(option);
              onClose();
            }}
          >
            {option}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
