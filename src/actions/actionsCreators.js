import * as ACTIONS from "./actions";

export const userAdded = (userName) => {
  return {
    type: ACTIONS.USER_ADDED,
    userName: userName,
  }
}

export const userRemoved = (userName) => {
  return {
    type: ACTIONS.USER_REMOVED,
    userName
  }
}

export const loadingStarted = () => {
  return {
    type: ACTIONS.LOADING_STARTED,
  }
}

export const loadingEnded = (userName) => {
  return {
    type: ACTIONS.LOADING_ENDED,
    userName
  }
}

export const fetchUser = () => {
  return async function (dispatch) {
    dispatch(loadingStarted());
    try {
      const httpRes = await fetch('https://randomuser.me/api/?results=1');
      const userRes = await httpRes.json();
      const name = userRes.results[0].name;
      const userName = `${name.first} ${name.last}`;
      dispatch(loadingEnded(userName));
    } catch (err) {
      console.log(err);
      dispatch(loadingEnded(null));
    }
  }
}
