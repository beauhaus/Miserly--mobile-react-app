import React, { Component } from 'react';

import SpendBtn from './btnComps/SpendBtn';

const SpendUIContainer = props => {
  return (
    <div className="spend-UI-container">
      <SpendBtn spendingTotal={props.spendingTotal} spendingClick={props.spendingClick} />
    </div>
  );
};

export default SpendUIContainer;
