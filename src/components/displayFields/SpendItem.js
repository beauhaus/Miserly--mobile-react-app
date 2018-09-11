import React, { Component } from 'react';

const SpendItem = props => {
    return (
      <div>
        {props.spendItemName ? (
          <ul>
            <li>
              {props.spendItemName}--{props.spendItemAmount}
            </li>
          </ul>
        ) : null}
      </div>
    );
}

export default SpendItem;