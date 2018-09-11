import React, { Component } from 'react';

const Reset = props => {
  return (
    <button className="button reset-btn" onClick={() => props.resetClick()}>
      Reset
    </button>
  );
};

export default Reset;
