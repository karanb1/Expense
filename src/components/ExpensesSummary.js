import React from 'react';
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
    {props.expenses[1] === 0 ? 
        (false)
        : 
        (props.expenses[1] === 1 ? 
        (<h1>Your total for {props.expenses[1]} expense is {numeral(props.expenses[0]).format('0,0.00')} INR </h1>)
       :
        (<h1>Your total for {props.expenses[1]} expenses is {numeral(props.expenses[0]).format('0,0.00')} INR </h1>))}
    </div>
)

const mapStateToProps =(state) => {
    return{
        expenses: expensesTotal(state.expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);