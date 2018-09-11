import React, { Component } from 'react';

import BillsBtn from './btnComps/BillsBtn';

const BillsUIContainer = props => {
  return (
    <div className="bills-UI-container">
      <BillsBtn billsTotal={props.billsTotal} billClick={props.billClick} />
    </div>
  );
};

export default BillsUIContainer;
