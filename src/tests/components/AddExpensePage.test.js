import React from 'react'
import { shallow } from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let startAddExpense, history,wrapper;
beforeEach(()=>{
    startAddExpense = jest.fn(); //test spy
    history = { push: jest.fn()};//test spy
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>);
})

test('Should render add expense page correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should run on submit prop correctly',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});

// test('Should render add expense page correctly',()=>{
//     const onSubmit = jest.fn(); //test spy
//     const history = { push: jest.fn()};//test spy
//     const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
//     expect(wrapper).toMatchSnapshot()
// })

// test('Should run on submit prop correctly',()=>{
//     const onSubmit = jest.fn(); //test spy
//     const history = { push: jest.fn()};//test spy
//     const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
// });