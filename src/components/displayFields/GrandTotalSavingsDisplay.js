import React, { Component } from 'react';

const GrandTotalSavingsDisplay = props => {
  return <div className="display grand-total-display fourth-quadrant-container">
  <span>${(props.adjustedGrandTotal * props.incrementer).toFixed(2)}</span>
  </div>;
};

export default GrandTotalSavingsDisplay;
