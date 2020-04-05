import Expensestotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test("Should return 0 if there are no expenses",()=>{
    const response = Expensestotal([]);
    expect(response).toEqual([0,0]);
});

test("Should return value if there are expenses",()=>{
    const response = Expensestotal(expenses);
    expect(response).toEqual([114195,3]);
});