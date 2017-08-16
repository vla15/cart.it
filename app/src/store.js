import React from 'react'
import todoList from './reducers/todoList.js';
import logger from 'logger';

import { createStore, applyMiddleware, combineReducers } from 'redux';
let store = createStore(
  combineReducers({
    todoList: todoList
  }),
  applyMiddleware(logger)
);
