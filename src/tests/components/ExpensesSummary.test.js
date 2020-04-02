import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses'
import expensesTotal from '../../selectors/expenses-total';

test('Should render expense total Correctly',()=>{
    const wrapper = shallow(<ExpensesSummary expenses={expensesTotal(expenses)} />)
    expect(wrapper).toMatchSnapshot();
})


