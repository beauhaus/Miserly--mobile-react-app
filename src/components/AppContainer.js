import React, { Component } from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import DepositDisplay from './displayFields/DepositDisplay';
import BiWeeklyToggleBtn from './btnComps/BiWeeklyToggleBtn';

import BillsUIContainer from './BillsUIContainer';
import SpendUIContainer from './SpendUIContainer';

import BillsModal from './BillsModal';
import SpendModal from './SpendModal';

import LongSavingsDisplay from './displayFields/LongSavingsDisplay';
import ShortSavingsDisplay from './displayFields/ShortSavingsDisplay';
import ShortTermTotalDisplay from './displayFields/ShortTermTotalDisplay';
import LongTermTotalDisplay from './displayFields/LongTermTotalDisplay';
import GrandTotalSavingsDisplay from './displayFields/GrandTotalSavingsDisplay';
import MonthlyIncrementer from './btnComps/MonthlyIncrementer';
// import Stripes from './Stripes';

// import usersDB from '../data/usersDB.json';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthIncrement: 1,
      spendItems: [],
      bills: [],
      deposit: 2000,
      billsTotal: 0,
      spendingTotal: 0,
      addBillsChosen: false,
      addSpendingChosen: false,
      savingsSTerm: 0,
      savingsLTerm: 0,
      savingsSTermYTD: 0,
      savingsLTermYTD: 0,
      showBiWeekly: false,
      adjustedGrandTotal: 0
    };
    this.billClickHandler = this.billClickHandler.bind(this);
    this.spendingClickHandler = this.spendingClickHandler.bind(this);
    this.handleBillInput = this.handleBillInput.bind(this);
    this.handleSpendInput = this.handleSpendInput.bind(this);
    this.calcBillsTotal = this.calcBillsTotal.bind(this);
    this.calcSpendingTotal = this.calcSpendingTotal.bind(this);
    this.calcSavingsDisplay = this.calcSavingsDisplay.bind(this);
    this.billsEnterConfirm = this.billsEnterConfirm.bind(this);
    this.spendItemsEnterConfirm = this.spendItemsEnterConfirm.bind(this);
    this.biWeeklyToggle = this.biWeeklyToggle.bind(this);
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }

  decrementer() {
    console.log('Decrementer ran!');
    this.setState(prevState => ({
      monthIncrement: prevState.monthIncrement - 1
    }));
  }

  incrementer() {
    console.log('Incrementer ran!');
    this.setState(prevState => ({
      monthIncrement: prevState.monthIncrement + 1
    }));
  }

  biWeeklyToggle() {
    this.setState(
      prevState => ({
        showBiWeekly: !prevState.showBiWeekly
      }),
      this.calcSavingsDisplay
    );
  }

  //This utility method will perform closing of modal and calculations
  //by simultaneously calling two functions
  billsEnterConfirm() {
    this.billsModalCloser();
    this.calcSavingsDisplay();
  }

  spendItemsEnterConfirm() {
    this.spendingModalCloser();
    this.calcSavingsDisplay();
  }

  calcBillsTotal(amount) {
    const parsedBillsAmount = parseFloat(amount).toFixed(2);
    this.setState(prevState => {
      return {
        billsTotal: prevState.billsTotal + parseFloat(parsedBillsAmount)
      };
    });
  }

  calcSpendingTotal(amount) {
    const parsedSpendAmount = parseFloat(amount).toFixed(2);
    this.setState(prevState => {
      return {
        spendingTotal: prevState.spendingTotal + parseFloat(parsedSpendAmount)
      };
    });
  }

  handleBillInput(name, amount) {
    this.calcBillsTotal(amount);
    const newBill = {
      name,
      amount
    };
    this.setState(prevState => {
      return {
        bills: prevState.bills.concat(newBill)
      };
    });
  }
  calcSavingsDisplay() {
    const { spendingTotal, billsTotal, deposit, showBiWeekly } = this.state;
    const expenses = billsTotal + spendingTotal;
    this.setState(prevState => {
      const subtotal = deposit - expenses;
      return {
        savingsSTerm: showBiWeekly ? subtotal * 0.25 : subtotal * 0.25 * 0.5,
        savingsLTerm: showBiWeekly ? subtotal * 0.75 : subtotal * 0.75 * 0.5,
        savingsSTermYTD: showBiWeekly ? subtotal * 0.25 : subtotal * 0.25 * 0.5,
        savingsLTermYTD: showBiWeekly ? subtotal * 0.75 : subtotal * 0.75 * 0.5,
        adjustedGrandTotal: showBiWeekly ? subtotal : subtotal * 0.5
      };
    });
  }

  handleSpendInput(name, amount) {
    this.calcSpendingTotal(amount);
    const newSpendItem = {
      name,
      amount
    };
    this.setState(prevState => {
      return {
        spendItems: prevState.spendItems.concat(newSpendItem)
      };
    });
  }

  billClickHandler() {
    this.setState({
      addBillsChosen: true
    });
  }
  billsModalCloser() {
    this.setState({
      addBillsChosen: false
    });
  }

  spendingClickHandler() {
    this.setState({
      addSpendingChosen: true
    });
  }
  spendingModalCloser() {
    this.setState({
      addSpendingChosen: false
    });
  }

  render() {
    return (
      <div className="app-container">
        <div className="first-quadrant-container">
          <h1 className="app-title">tts money</h1>
          <DepositDisplay depositVal={this.state.deposit} />
        </div>
        <div className="second-quadrant-container">
          <BillsUIContainer billClick={this.billClickHandler} billsTotal={this.state.billsTotal} />
          <SpendUIContainer spendingClick={this.spendingClickHandler} spendingTotal={this.state.spendingTotal} />
        </div>

        <div className="third-quadrant-container">
          <BiWeeklyToggleBtn showBiWeekly={this.state.showBiWeekly} biWeeklyToggle={this.biWeeklyToggle} />
          <ShortSavingsDisplay display={this.state.savingsSTerm} />
          <LongSavingsDisplay display={this.state.savingsLTerm} />
          <ShortTermTotalDisplay display={this.state.savingsSTermYTD} incrementer={this.state.monthIncrement}/>
          <LongTermTotalDisplay display={this.state.savingsLTermYTD} incrementer={this.state.monthIncrement}/>
        </div>

        <div className="fourth-quadrant-container">
          
          <GrandTotalSavingsDisplay
          incrementer={this.state.monthIncrement}
          adjustedGrandTotal={this.state.adjustedGrandTotal}
          />
          <MonthlyIncrementer incrementer={this.incrementer} decrementer={this.decrementer} />
        </div>

        <BillsModal
          billsEnterConfirm={() => this.billsEnterConfirm()}
          addBillsChosen={this.state.addBillsChosen}
          handleBillInput={this.handleBillInput}
          bills={this.state.bills}
          billsTotal={this.state.billsTotal}
          handleResetBills={this.handleResetBills}
        />

        <SpendModal
          spendItemsEnterConfirm={() => this.spendItemsEnterConfirm()}
          addSpendingChosen={this.state.addSpendingChosen}
          handleSpendInput={this.handleSpendInput}
          spendItems={this.state.spendItems}
          spendingTotal={this.state.spendingTotal}
        />
      </div>
    );
  }
}

// handleResetSpendItems={this.handleResetSpendItems} FIXME: To be created

export default Main;

/*

monthIncrement
*/
