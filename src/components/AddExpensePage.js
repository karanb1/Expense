import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component{
  onSubmit = (expense) =>{
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render(){
    return(
      <div>
      <div className="summary" style={{paddingTop:40+'px', paddingBottom:40+'px'}}>
      <h1>Add Expense</h1>
      </div>
      <ExpenseForm
        onSubmit= {this.onSubmit}//after testing
      />
    </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=> {
  return({
    startAddExpense: (expense)=> dispatch(startAddExpense(expense)) //can be many props so an object
  })
}


export default connect(undefined, mapDispatchToProps)(AddExpensePage);

//before testing
//     <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm
//       onSubmit= {(expense)=>{
//         props.dispatch(addExpense(expense));
//         props.history.push('/')
//       }}//after testing
//     />
//   </div>
//   )
// }
// }