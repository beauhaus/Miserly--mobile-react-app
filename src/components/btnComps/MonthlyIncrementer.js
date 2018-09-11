import React, { Component } from 'react';

const MontlyIncrementer = props => {
  return (
    <div className="decrementer-btn-container">
      <button className="monthly-btn monthly-dec" id="monthly-btn-lt" onClick={() => props.decrementer()}>
      &#10096;
      </button>
      <button className="monthly-btn monthly-inc" id="monthly-btn-rt" onClick={() => props.incrementer()}>
      &#10097;
      </button>
    </div>
  );
};

export default MontlyIncrementer;
