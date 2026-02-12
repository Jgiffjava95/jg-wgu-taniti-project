import React from 'react';
import './ListItem.css';

const ListItem = ({ title, image, description, buttonText, onButtonClick }) => {
  return (
    <div className="list-item">
      {image && (
        <div className="list-item-image-container">
          <img src={image} alt={title} className="list-item-image" />
        </div>
      )}
      <div className="list-item-content">
        <h3 className="list-item-title">{title}</h3>
        <p className="list-item-description">{description}</p>
        {buttonText && (
          <button className="list-item-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ListItem;
