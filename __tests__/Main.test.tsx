import 'react-native';
import React from 'react';
import Main from '../src/Main/Main';
import TextComponent from '../src/TextComponent/TextComponent';
import {create} from 'react-test-renderer';

describe('Рендер Main component', () => {
  it('Main component render', () => {
    create(<Main />);
  });
  it('Проверка передачи пропсов ', () => {
    const testRenderer = create(<Main />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(TextComponent).props.text).toBe('Prees me');
  });
});
