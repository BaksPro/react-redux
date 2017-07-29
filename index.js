import React from 'react';
import ReactDOM from 'react-dom';
import UserBox from './components/userbox';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
    <UserBox />
  </Provider>,
  document.getElementById('root')
);