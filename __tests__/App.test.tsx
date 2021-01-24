import 'react-native';
import React from 'react';
import App from '../App';
import {create} from 'react-test-renderer';

it('App render', () => {
  create(<App />);
});
