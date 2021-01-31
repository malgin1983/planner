import 'react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';
import TextComponent from '../src/TextComponent/TextComponent';
import { store } from '../src/redux/Store';
import { Provider } from 'react-redux';
import { mockStoreWrapper } from '../src/utils/mockStore';
const element = create(
    <Provider store={store}>
        <TextComponent text={'Hello'} />
    </Provider>,
);

describe('Test  - TextComponent', () => {
    it('Render TextComponent and Snapshot', () => {
        create(mockStoreWrapper(<TextComponent text={'Hello'} />));
        expect(element).toMatchSnapshot();
    });
    it('Press on  button', () => {
        const btn = element.root.findByProps({ testID: 'text-btn-plus' }).props;
        act(() => {
            btn.onPress();
        });
        const text = element.root.findByProps({ testID: 'text-component' }).props;
        expect(text.children).toEqual('Count - 1');
    });
});
