import React from 'react'
import { shallow } from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'


let history, wrapper, onClick,onSubmit;

beforeEach(()=>{
    onSubmit = jest.fn();
    onClick = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage onSubmit={onSubmit} onClick={onClick} history={history} expense={expenses[2]}/>);
})

test('Should render EditExpense page correctly',()=>{
     expect(wrapper).toMatchSnapshot();
})

test('Should handle edit expense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('Should handle remove expense',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onClick).toHaveBeenLastCalledWith({id: expenses[2].id})
})

