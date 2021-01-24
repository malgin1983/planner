import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import TextComponent from '../src/TextComponent/TextComponent';
const element = create(<TextComponent text={'Hello'} />);

describe('Test  - TextComponent', () => {
  it('Render TextComponent and Snapshot', () => {
    create(<TextComponent text={'Hello'} />);
    expect(element).toMatchSnapshot();
  });
  it('Press on  button', () => {
    const btn = element.root.findByProps({testID: 'text-btn'}).props;
    act(() => {
      btn.onPress();
    });
    const text = element.root.findByProps({testID: 'text-component'}).props;
    expect(text.children).toEqual('Touch 1 times');
  });
});
