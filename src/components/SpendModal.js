import React, { Component } from 'react';
import Modal from 'react-modal';

import AddSpendItem from './formFields/AddSpendItem';
import SpendItem from './displayFields/SpendItem';


  const SpendModal = props => {
    return (
      <Modal
        className="spending-modal modal"
        isOpen={props.addSpendingChosen}
        onRequestClose={props.spendingModalClose}
        contentLabel="Selected Option"
        closeTimeoutMS={2000}
      >
        <div className="modal-third-top">
          <h2 className="modal__title">SPENDING</h2>
          <AddSpendItem handleSpendInput={props.handleSpendInput} />
        </div>

        <div className="modal-third-middle">
          {props.spendItems.map((item, idx) => (
            <SpendItem key={idx}
            spendItemName={item.name}
            spendItemAmount={item.amount}
            />
          ))}
        </div>

        <div className="modal-third-bottom">
        <h4>Total: {props.spendingTotal}</h4>
        <button className="modal__btn--done" 
          onClick={props.spendItemsEnterConfirm}>
            OK
          </button>
        </div>
      </Modal>
    );
  }

export default SpendModal;
