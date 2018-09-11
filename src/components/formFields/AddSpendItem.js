import React, { Component } from 'react';

class AddSpendItem extends Component {
  constructor(props) {
    super(props);
    this.addSpendItem = this.addSpendItem.bind(this);
  }
  addSpendItem(e) {
    e.preventDefault();
    const spendName = e.target.elements.spendName.value;
    const spendAmount = e.target.elements.spendAmount.value;
    if (spendName && spendAmount) {
      this.props.handleSpendInput(spendName, spendAmount);
    }
  }
  render() {
    return (
      <form className="modal__form modal__form--add-spend" onSubmit={this.addSpendItem}>
        <input id="modal__form--spend-name-input" type="text" name="spendName" placeholder="expense" />
        <input id="modal__form--spend-amount-input" type="text" name="spendAmount" placeholder="amount" />
        <button id="add-spend-item-btn" className="modal__btn modal__btn--submit">&#x2b;</button>
      </form>
    );
  }
}

export default AddSpendItem;
