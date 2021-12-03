import AuthService from '../../services/auth.service';
// import SecureStorage from '../config/SecureStorage'
// import snackBarUpdate from '../actions/snackBarActions';
import { ACTIONS } from '../constants';

export const login = (username:string,password: string) => async (dispatch: Function) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true })
    try {
        const {
            data,
            status
        } = await AuthService.login(username, password);
        let authResponse: any = [];
        if (status === 200 || status === 201) {
            authResponse = {
                data,
                status
            };
            const { access_token: { token }, user } = data;
            localStorage.setItem('token', token);
            dispatch({ type: ACTIONS.SET_USER, payload: user })
            dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }
        return authResponse;
    } catch (error : any) {
        let title = ''
        if (error.response) {
            const { status, data: { message } } = error.response
            if (status === 401) {
                title = message
            }
        }
       
    }
};

export const logout = () => ({ type: ACTIONS.LOGOUT })

