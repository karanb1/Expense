import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header'

test('should render header correctly', ()=>{
       const wrapper = shallow(<Header />);
       expect(toJSON(wrapper)).toMatchSnapshot(); //setup serializer to remove tojson


    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});