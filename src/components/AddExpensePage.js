import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component{
  onSubmit = (expense) =>{
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };

  render(){
    return(
      <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit= {this.onSubmit}//after testing
      />
    </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=> {
  return({
    onSubmit: (expense)=> dispatch(addExpense(expense)) //can be many props so an object
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