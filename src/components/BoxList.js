// src/components/BoxList.js
import React, { useState } from 'react';
import BoxItem from './BoxItem';
import Summary from './Summary';

const BoxList = () => {
  const initialBoxes = [
    { id: 1, size: '2x2', rate: 3.78 },
    { id: 2, size: '4x5', rate: 8.37 },
    { id: 3, size: '3x3', rate: 6.30 },
    { id: 4, size: '5x4', rate: 7.49 }
    // Add more boxes as needed
  ];


  const [boxes, setBoxes] = useState(initialBoxes);

  const updateBoxDetails = (id, details) => {
    setBoxes(prevBoxes =>
      prevBoxes.map(box =>
        box.id === id ? { ...box, ...details } : box
      )
    );
  
  };

  return (
    <div className="box-list-container">
      <div className="box-list">
        {boxes.map(box => (
          <BoxItem key={box.id} box={box} updateBoxDetails={updateBoxDetails}/>
        ))}
      </div>
      <Summary boxes={boxes}/>
    </div>
  );
};

export default BoxList;
