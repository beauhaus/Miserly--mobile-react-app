import React, { Component } from 'react';

const DepositDisplay = props => {
  return (
    <div className="deposit-display">
      <h2>${props.depositVal}.00</h2>
    </div>
  );
}

export default DepositDisplay;