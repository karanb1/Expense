import uuid from 'uuid';
import database from '../firebase/firebase';
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});
//dispatching an action fn using thunk
export const startAddExpense = (expenseData={})=>{
  return (dispatch,getState) =>{
    const uid = getState().auth.uid; // like store.getState()
    const {
      description = '',
      note ='',
      amount= 0,
      createdAt = 0
    } = expenseData;
    const expense = {description,note,amount:amount/100,createdAt};
   return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{   //return only for asynchronous test case(promise chaining)
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense =({id}={})=>{
  return (dispatch,getState)=>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
       dispatch(removeExpense(id));
    })
  }
}

export const startEditExpense = (id,updates)=>{
  return (dispatch,getState)=>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
      dispatch(editExpense(id,updates))
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
//Set expense
export const setExpense = (expenses)=>({
  type: "SET_EXPENSE",
  expenses
})
//dispatching an action fn using thunk
export const startSetExpense = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    const expenses = [];
    return database.ref(`users/${uid}/expenses`).once('value')
      .then( (snapshot) => {
        snapshot.forEach( (childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          })
        })
        dispatch(setExpense(expenses));
      })
  }
}
  