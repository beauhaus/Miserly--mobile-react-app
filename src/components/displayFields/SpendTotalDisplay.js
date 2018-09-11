import React, { Component } from 'react';

const SpendTotalDisplay = props => {
    return (
      <span id="spend-total-display">
      ${props.spendingTotal.toFixed(2) && props.spendingTotal.toFixed(2)}
      </span>
    );
}

export default SpendTotalDisplay;

