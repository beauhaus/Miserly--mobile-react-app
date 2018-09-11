import React, { Component } from 'react';

const ShortTermTotalDisplay = props => {
  return (
    <div className="display long-total-display">
      ShortTermTotal: <span className="result-display">${(props.display.toFixed(2) * props.incrementer).toFixed(2)}</span>
    </div>
  );
};

export default ShortTermTotalDisplay;



