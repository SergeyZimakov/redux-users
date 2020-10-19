import * as ACTIONS from '../actions/actions';

const initialState = {
  name: '',
  isLoading: false,
}
export const nextUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOADING_ENDED:
      const newState = {
        ...state,
        isLoading: false,
      };
      if (action.userName !== null) {
        newState.name = action.userName;
      }
      return newState;
    case ACTIONS.LOADING_STARTED:
      return {
        ...state,
        isLoading: true,
      }
    default: return state;
  }
}