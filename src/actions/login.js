export const LOGIN= 'LOGIN';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
import {Post,Get} from '../HttpModule/Http'
import history from "../history";

export const login = (user) => ({
    type: LOGIN,
    user: user

});
export const requestLogin = () =>({
    type : REQUEST_LOGIN
})
export const loginSucess = (userData) =>({
    type : LOGIN_SUCCESS,
    userData : userData
})

export const loginFailure = () => ({
    type : LOGIN_FAIL
})
export const redirect = (link) =>({
    type: REDIRECT,
    link: link
})

export function loginApi (userdata) {
    return function (dispatch) {
      dispatch(requestLogin());
    Get().then(json =>{
        json.map(ele => {
            let obj = ele;
            ele['checked'] = false;
            return obj
        })
        dispatch(loginSucess(json));
        history.push("/user");

      }, err =>{
        console.log(err)
        dispatch(loginFailure())
      })
    }
}
