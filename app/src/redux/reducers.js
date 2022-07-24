import {SET_USER_NAME, SET_PASSWORD, SET_EMAIL_ID, SET_USERS} from './actions';

const initialState = {
  email: '',
  username: '',
  password: '',
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, username: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    case SET_EMAIL_ID:
      return {...state, email: action.payload};
    default:
      return state;
  }
}

const usersInfoInitialState = {
  users: [],
};

export function userInfoReducer(state = usersInfoInitialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.payload};
    default:
      return state;
  }
}
