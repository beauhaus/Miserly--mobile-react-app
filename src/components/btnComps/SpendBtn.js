import React from 'react';

import SpendTotalDisplay from '../displayFields/SpendTotalDisplay';


const SpendBtn = props => {
  return (
    <button className="button spending-btn" onClick={() => props.spendingClick()}>
    <h2 className="item-name">Spending:</h2>
    <SpendTotalDisplay spendingTotal={props.spendingTotal} />
    <span id="amount-enter-icon-spend">&#x2b;</span>   
    </button>
  );
};

export default SpendBtn;
