import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import SliceReducer from './Redux/Features/Slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    SliceReducer: SliceReducer
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
