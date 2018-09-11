import React, { Component } from 'react';
import Modal from 'react-modal';

import AddBill from './formFields/AddBill';
import Bill from './displayFields/Bill';

const BillsModal = props => {
    return (
      <Modal
        className="bills-modal modal"
        isOpen={props.addBillsChosen}
        onRequestClose={props.billsModalClose}
        contentLabel="Selected Option"
        closeTimeoutMS={2000}
      >
        <div className="modal-third-top">
          <h2 className="modal__title">BILLS</h2>
          <AddBill handleBillInput={props.handleBillInput} />
        </div>

        <div className="modal-third-middle">
          {props.bills.map((bill, idx) => <Bill key={idx} billName={bill.name} billAmount={bill.amount} />)}
        </div>

        <div className="modal-third-bottom">
          <h4>Total: {props.billsTotal}</h4>
          <button className="modal__btn--done" onClick={props.billsEnterConfirm}>
            OK
          </button>
        </div>
      </Modal>
    );
  }
  

export default BillsModal;
