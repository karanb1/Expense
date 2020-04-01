import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem' 
import expense from '../fixtures/expenses'

test('Should setup snapshot for expense list item', ()=>{
     const wrapper = shallow( <ExpenseListItem {...expense[0]} />)
     expect(wrapper).toMatchSnapshot();
})