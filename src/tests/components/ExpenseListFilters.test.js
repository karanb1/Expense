import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';
import moment from '../../../../../../Library/Caches/typescript/3.6/node_modules/moment/moment';

let wrapper,setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter;

beforeEach(()=>{
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
        filters={filters}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate} />)
})


test('Should render page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('Should render page with alt data correctly',()=>{
    wrapper.setProps({
      filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('Should handle text filter',()=>{
    const value = 'rent';
    wrapper.find('input').simulate('change',{
        target:{
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('Should handle sort by date',()=>{
    const value="date";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalled()
})

test('Should handle sort by amount',()=>{
    const value="amount";
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should setup date',()=>{
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('Should handle focus change',()=>{
    const focused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused)
    expect(wrapper.state('calendarFocused')).toBe(focused)
})
