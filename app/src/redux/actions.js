export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_EMAIL_ID = 'SET_EMAIL_ID';
export const SET_USERS = 'SET_USERS';

export const setUserName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setPassword = password => dispatch => {
  dispatch({
    type: SET_PASSWORD,
    payload: password,
  });
};

export const setEmailId = email => dispatch => {
  dispatch({
    type: SET_EMAIL_ID,
    payload: email,
  });
};

export const setUsers = users => dispatch => {
  dispatch({
    type: SET_USERS,
    payload: users,
  });
};
