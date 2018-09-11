import React, { Component } from 'react';

const LongTermTotalDisplay = props =>{
    return (
      <div className="display long-total-display">
        LongTermTotal: <span className="result-display">${(props.display.toFixed(2) * props.incrementer).toFixed(2)}</span>
      </div>
    );  
}

export default LongTermTotalDisplay;
