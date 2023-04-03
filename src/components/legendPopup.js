import React, { useState } from 'react';


const ChartWithPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    const handleLegendMouseOver = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

const Popup = () => (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: '#fff',
        padding: '10px',
        border: '1px solid #ccc',
      }}
    >
      <p>This is the legend popup!</p>
      <button onClick={handlePopupClose}>Close</button>
    </div>
  );
    };

export default ChartWithPopup;