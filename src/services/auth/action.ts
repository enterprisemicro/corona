import { userConstants } from '../../constants';
import authService from './index';

interface LoginAction {
    type: typeof userConstants.LOGIN_REQUEST
    payload: {
        email: string,
        password: string
    }
}

interface LogoutAction {
    type: typeof userConstants.LOGOUT
    paylaod: {
      accountGuid: string
    }
}

export type AuthActionTypes = LoginAction | LogoutAction;

export function loginAction(username: string, password: string) {
    return (dispatch: any) => {
        dispatch(request({ username }));

        authService.login(username, password)
            .then(
                (user: any) => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    console.log(error);
                    //dispatch(alertActions.error(error));
                }
            );
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.LOGIN_FAILURE, error } }
}