import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div className= "summary">
         <div>
          { 
           (props.expenses[1] === 1 ? 
           (<p>Viewing <b>{props.expenses[1]}</b> expense totalling <b>{numeral(props.expenses[0]).format('0,0.00')} INR</b></p>)
           :
           (<p>Viewing <b>{props.expenses[1]}</b> expenses totalling <b>{numeral(props.expenses[0]).format('0,0.00')} INR</b> </p>))}
       </div>
       <div className="add">
          <Link className="button" to="/create">
            Add Expense
          </Link>
       </div>
 </div>
)

const mapStateToProps =(state) => {
    return{
        expenses: expensesTotal(state.expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);