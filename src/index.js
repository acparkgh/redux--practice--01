import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore( 
  reducer, composeWithDevTools( applyMiddleware(), ) 
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
