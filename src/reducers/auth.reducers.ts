import { userConstants } from '../constants';
import { AuthActionTypes } from '../services/auth';

let user: any = null;
if (window.localStorage.getItem('user')) {
    try
    {
      user = JSON.parse(window.localStorage.getItem('user') as string);
    } catch (err) {
      console.error('parse user info', window.localStorage.getItem('user'));
    }
}

const initialState = user ? { loggedIn: true, user } : {};

export function authReducer(state = initialState, action: AuthActionTypes) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action
    };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}