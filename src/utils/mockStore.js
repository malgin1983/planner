import React from 'react';

import { store } from '../redux/Store';
import { Provider } from 'react-redux';

export const mockStoreWrapper = (component) => {
    return <Provider store={store}>{component}</Provider>;
};
