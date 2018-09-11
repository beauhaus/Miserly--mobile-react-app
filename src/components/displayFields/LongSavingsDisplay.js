import React, { Component } from 'react';

const LongSavingsDisplay = props => {
  return (
    <div className="display long-savings-display">
      LongSavings: <span className="result-display">${props.display.toFixed(2)}</span>
    </div>
  );
};

export default LongSavingsDisplay;
