// src/components/BoxItem.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BoxItem = ({ box, updateBoxDetails}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [boxCount, setBoxCount] = useState(0);

  useEffect(() => {
    const totalDays = calculateTotalDays();
    const totalCost = totalDays * box.rate * boxCount;
    updateBoxDetails(box.id, { startDate, endDate, boxCount, totalDays, totalCost });
  }, [startDate, endDate, boxCount]);


  const handleIncrease = () => setBoxCount(boxCount + 1);
  const handleDecrease = () => setBoxCount(boxCount > 0 ? boxCount - 1 : 0);

  const calculateTotalDays = () => {
    if (!startDate || !endDate) return 0;
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const isButtonDisabled = !startDate || !endDate

  return (
    <div className="box-item">
      <h3>{`Size: ${box.size}`}</h3>
      <p>{`Rate per day: $${box.rate.toFixed(2)}`}</p>
      <div>
        <DatePicker selected={startDate} onChange={date => setStartDate(date) } minDate={new Date()} placeholderText="Start Date" />
        <span style={{margin:5}}></span>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} minDate={startDate || new Date()} placeholderText="End Date" />
        <span style={{margin:5}}></span>
        <button onClick={handleDecrease} disabled={isButtonDisabled}>-</button>
        <span>{boxCount}</span>
        <button onClick={handleIncrease} disabled={isButtonDisabled}>+</button>
      </div>
      <p>{`Total days: ${calculateTotalDays()}`}</p>
      <p>{`Total cost: $${(calculateTotalDays() * box.rate * boxCount).toFixed(2)}`}</p>
    </div>
  );
};

export default BoxItem;
