import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../Icon';
import { mount } from 'enzyme';

describe('icon', () => {
    it('first time', () => {
        const json = renderer.create(<Icon name='wechat'/>).toJSON();
        expect(json).toMatchSnapshot();
    })

    it('onclick', () => {
        const fn = jest.fn();
        const component = mount(<Icon name='wechat' onClick={fn}/>);
        component.find('i').simulate('click');
        expect(fn).toBeCalled();
    });
})