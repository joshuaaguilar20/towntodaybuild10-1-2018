//name enforced by create react App. 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import axios from 'axios';

window.axios = axios;



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
                                        //Provider allows action calls to be passed to all comp. WOW 
ReactDOM.render(
    <Provider store={store}>
        <App />       
    </Provider>,
    document.querySelector('#root'));







