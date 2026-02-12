import React from 'react';
import ListItem from './ListItem';
import './ReusableList.css';

const ReusableList = ({ items }) => {
  return (
    <div className="reusable-list">
      {items.map((item, index) => (
        <ListItem
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
          buttonText={item.buttonText}
          onButtonClick={item.onButtonClick}
        />
      ))}
    </div>
  );
};

export default ReusableList;
