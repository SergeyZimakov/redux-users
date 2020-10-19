import { createStore, combineReducers, applyMiddleware } from 'redux';
import { nextUserReducer } from './reducers/nextUserReducer';
import { allUsersReducer } from './reducers/allUsersReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
  {
    users: allUsersReducer,
    nextUser: nextUserReducer,
  }
);

export const applicationStore = createStore(
  rootReducer,
  applyMiddleware(thunk)
);