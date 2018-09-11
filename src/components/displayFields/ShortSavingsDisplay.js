import React, { Component } from 'react';

const ShortSavingsDisplay = props => {
    return (
      <div className="display short-savings-display">
        ShortSavings: <span className="result-display">${props.display.toFixed(2)}</span>
      </div>
    );
}

export default ShortSavingsDisplay;
