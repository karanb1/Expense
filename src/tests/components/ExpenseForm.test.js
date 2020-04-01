import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should render expenseform correctly', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('Should render expenseform correctly with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{ }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('Should set description change',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    const value = "Description changed"
    wrapper.find('input').at(0).simulate('change', {
        target: {value: value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('Should set note change',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    const value = "note changed"
    wrapper.find('textarea').simulate('change', {
        target: {value: value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('Should setup amount',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    const value = '12.25'
    wrapper.find('input').at(1).simulate('change', {
        target: {value: value}
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('Should not setup amount for invalid input',()=>{
    const wrapper = shallow(<ExpenseForm/>)
    const value = '12.255'
    wrapper.find('input').at(1).simulate('change', {
        target: {value: value}
    });
    expect(wrapper.state('amount')).toBe('');
})

test('Should call onsubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense= {expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{ }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });

}) //test spies

test('Should setup on date change',()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment());
    expect(wrapper.state('createdAt')).toEqual(moment());
})
test('Should setup on focus change',()=>{
    //const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calendarFocused')).toBe(true);
})

