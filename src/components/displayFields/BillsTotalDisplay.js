import React, { Component } from 'react';

const BillsTotalDisplay = props => {
  return <span id="bills-total-display">${props.billsTotal.toFixed(2) && props.billsTotal.toFixed(2)}</span>;
};

export default BillsTotalDisplay;
