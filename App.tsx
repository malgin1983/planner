import React from 'react';
import { Provider } from 'react-redux';

import Main from './src/Main/Main';
import { store } from './src/redux/Store';

const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
};
export default App;
