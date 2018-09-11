import React from 'react';

import BillsTotalDisplay from '../displayFields/BillsTotalDisplay';

const BillsBtn = props => {
  return (
    <button className="button bills-btn" onClick={() => props.billClick()}>
      <h2 className="item-name">Bills:</h2>
      <BillsTotalDisplay billsTotal={props.billsTotal} />
      <span id="amount-enter-icon-bill">&#x2b;</span>
      </button>
    );
  };

export default BillsBtn;
