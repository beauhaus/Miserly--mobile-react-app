import React, { Component } from 'react';

class AddBill extends Component {
  constructor(props) {
    super(props);
    this.addBill = this.addBill.bind(this);
  }
  addBill(e) {
    e.preventDefault();
    const billName = e.target.elements.billName.value;
    const billAmount = e.target.elements.billAmount.value;
    if (billName && billAmount) {
      this.props.handleBillInput(billName, billAmount);
    }
  }
  render() {
    return (
      <form className="modal__form modal__form--add-bill" onSubmit={this.addBill}>
        <input id="modal__form--bill-name-input" type="text" name="billName" placeholder="Bill" />
        <input id="modal__form--bill-amount-input" type="text" name="billAmount" placeholder="Amount" />
        <button id="add-bill-btn" className="modal__btn modal__btn--submit">+</button>
      </form>
    );
  }
}
export default AddBill;
