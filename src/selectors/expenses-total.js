export default(expenses)=>{
    let val = 0;
    const expenseValues = expenses.map((expense)=> {
        return expense.amount
    });
    const total = expenseValues.reduce((sum,value) =>{
        val++;
        return sum+value;
    },0)
    return [total/100,val];
}