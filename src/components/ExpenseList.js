import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="list">
   <div className="listtitle">
   <div className="mobile"><p>Expense</p></div>
   <div className="desktop"><p>Expense</p></div>
   <div className="desktop"><p>Amount</p></div>
   </div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ):(
      props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
      })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
