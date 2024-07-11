// src/components/Summary.js
import React from 'react';

const Summary = ({ boxes }) => {
  const filteredBoxes = boxes.filter(box => box.boxCount > 0);
  //const filteredBoxes = updateOrder.map(id => boxes.find(box => box.id === id && box.boxCount>0)).filter(Boolean);
  const totalCost = filteredBoxes.reduce((acc, box) => acc + (box.totalCost || 0), 0);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <hr/>
      {filteredBoxes.map(box => (
        <div key={box.id} className="summary-item">
          <p>{`Size: ${box.size}`}</p>
          <p>{`Rate per day: $${box.rate.toFixed(2)}`}</p>
          <p>{`Total days: ${box.totalDays || 0}`}</p>
          <p>{`Box count: ${box.boxCount || 0}`}</p>
          <p>{`Total cost: $${(box.totalCost || 0).toFixed(2)}`}</p>
        </div>
      ))}
      <h3>{`Net Total: $${totalCost.toFixed(2)}`}</h3>
    </div>
  );
};

export default Summary;
