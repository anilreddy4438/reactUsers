import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,REDIRECT,REQUEST_LOGIN  } from '../actions/login'

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.user , loading: true };
        case REQUEST_LOGIN:
            return { ...state,loading: true };
        case LOGIN_SUCCESS:
            return { ...state, userData: action.userData , loading: false };
        case LOGIN_FAIL:
            return { ...state , err : action.err , loading: false };
        case REDIRECT:
            return { ...state, link: action.link , loading: false };
        default:
            return state;
    }
}

export default loginReducer