import React from 'react';
import { shallow } from 'enzyme';
import TableData from '../components/table/TableData';
import DataContextProvider from '../context/DataContext';


describe('TableData', () => {
    const transportPublicData = [];

    const wrapper = shallow(
        <DataContextProvider value={transportPublicData}>
            <TableData/>
        </DataContextProvider>
    );

    test('snapshot testing',()=>{
        expect(wrapper).toMatchSnapshot();
    });

});
