import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
  onSubmit = (expense) => {
     this.props.onSubmit(this.props.expense.id,expense);
     this.props.history.push('/');
  };

  onRemove = ()=>{
    this.props.onClick({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render(){
    return(
      <div>
      <div className="summary" style={{paddingTop:40+'px', paddingBottom:40+'px'}}>
      <h1>Edit Expense</h1>
      </div>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button className="remove" onClick={this.onRemove}>Remove</button>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch,props)=>{
  return ({
    onSubmit: (id,expense) => dispatch(startEditExpense(id, expense)),
    onClick: (data)=> dispatch(startRemoveExpense(data))
    })
  }


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   );
// };