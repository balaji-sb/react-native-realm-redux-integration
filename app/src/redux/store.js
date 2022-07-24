import {configureStore} from '@reduxjs/toolkit';
import {userInfoReducer, userReducer} from './reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiReducer from './redux-api/ApiReducer';

const logger = createLogger();

export default configureStore({
  reducer: {
    userReducer: userReducer,
    userInfoReducer: userInfoReducer,
    apiReducer: apiReducer,
  },
  middleware: [thunk],
});
