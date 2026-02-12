import React from 'react';
import './PageHeader.css';
import backgroundImage from '../assets/page-title-background.jpg';

const PageHeader = ({ title }) => {
  return (
    <div 
      className="page-header" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page-header-overlay">
        <h1 className="page-header-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
