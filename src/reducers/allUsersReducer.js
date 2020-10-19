import * as ACTIONS from '../actions/actions';

const initialUsersState = [];

export const allUsersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case ACTIONS.USER_ADDED:
      return [...state, action.userName];
    case ACTIONS.USER_REMOVED:
      return state.filter(user => user !== action.userName);
    default: return state;
  }
}