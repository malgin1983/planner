import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../src/Main/Main';
import { store } from '../src/redux/Store';
import { Provider } from 'react-redux';
import TextComponent from '../src/TextComponent/TextComponent';

it('Main component render', () => {
    renderer.create(
        <Provider store={store}>
            <Main />
        </Provider>,
    );
});

it('Проверка передачи пропсов ', () => {
    const testRenderer = renderer.create(
        <Provider store={store}>
            <Main />
        </Provider>,
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(TextComponent).props.text).toBe('Counter');
});
