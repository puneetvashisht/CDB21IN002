import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import workoutReducer from './store/workout-reducer'
import userReducer from './store/user-reducer'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'


const appStore = createStore(combineReducers({workoutReducer, userReducer}) ,applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
   <Provider store={appStore}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
