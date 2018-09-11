import React, { Component } from 'react';

const Bill = props => {
    return (
      <div>
        {props.billName ? (
          <ul>
            <li>
              {props.billName}--{props.billAmount}
            </li>
          </ul>
        ) : null}       
      </div>
    );
}
export default Bill;