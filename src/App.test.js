import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

// components
import App from './App';

// History
import history from './historyApi';

// store 
import store from './stote';

it(" check if app is not crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider> 
        , div
    )
})