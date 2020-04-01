import React from 'react'
import {shallow} from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'


test('Should setup expenselist component', ()=>{
    const wrapper = shallow(<ExpenseList expenses= {expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should setup expenselist component for default',()=>{
    const wrapper = shallow(<ExpenseList expenses= {[]}/>)
    expect(wrapper).toMatchSnapshot()
})
