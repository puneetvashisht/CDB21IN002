import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore, combineReducers} from 'redux'
import reducer from './store/reducer'
import workoutReducer from './store/workout-reducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

// Middleware written as ES5 functions


const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}


const middleware = composeWithDevTools(applyMiddleware(loggerMiddleware, thunk))

// Create a store with initial state

// {
//   // Define a top-level state field named `todos`, handled by `todosReducer`
//   todos: todosReducer,
//   filters: filtersReducer
// }

const appStore = createStore(combineReducers({reducer, workoutReducer}), middleware);

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
