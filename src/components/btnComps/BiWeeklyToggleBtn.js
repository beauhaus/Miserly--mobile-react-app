import React, { Component } from 'react';

const BiWeeklyToggleBtn = props => {
  return (
    <button id="biWeekly-toggle-btn" onClick={() => props.biWeeklyToggle()}>
    
    {props.showBiWeekly ? <span id="bi-weekly-text">Bi-weekly</span> : <span id="bi-weekly-text">Weekly</span>}
    
    </button>
  );
};

export default BiWeeklyToggleBtn;
