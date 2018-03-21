import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router.config';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import state from './store/state';
import reducer from './store/reducer';

const store = createStore(reducer, state);


ReactDOM.render(
    <Provider store={store}>
        <RouterConfig/>
    </Provider>,  
    document.getElementById('root')
);
