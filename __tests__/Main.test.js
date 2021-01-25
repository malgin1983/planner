import React from 'react';
import { shallow } from 'enzyme';
import Main from '../src/Main/Main';

describe('Testing ReassignLocationMenu component', () => {
    it('renders as expected', () => {
        const wrapper = shallow(<Main count={2} />);
        expect(wrapper).toMatchSnapshot();
    });
});
