import React from 'react';
import { shallow } from 'enzyme';
import Popup from '../components/map/Popup';

describe('Popup', () => {
    const batteryLevel = 0;
    const render = () => shallow(<Popup batteryLevel={batteryLevel}/>);
    test('should render',()=>{
        const wrapper = render();
        expect(wrapper.exists()).toBe(true);

    });

    test('snapshot testing',()=>{
        const wrapper = render();
        expect(wrapper).toMatchSnapshot();
    });

});
