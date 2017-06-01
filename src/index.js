import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configstore from './configstore';

import { Provider } from 'react-redux'; 


let store = configstore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
