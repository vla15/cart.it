import todoList from './reducers/todoList.js';
import views from './reducers/views.js'
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';


let store = createStore(
  combineReducers({
    todoList: todoList,
    view: views
  }),
  applyMiddleware(logger)
);


export default store;