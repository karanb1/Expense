import React from 'react'
import { shallow } from 'enzyme'
import {LoginPage} from '../../components/LoginPage'
import { startLogin } from '../../actions/auth';

test('Should render login page correctly',()=>{
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should call startlogout on button click',()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin= {startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})