import axios from 'axios';
import * as types from './actionTypes';





export const login = user => dispatch => {
    dispatch(spinnerOn);
    axios.get(`http://gabe.mockable.io/quotes/login?username=${user.username}&password=${user.password}`)
    .then(res => {
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.userToken });
    });
};



export function spinnerOn() {
    return {
    type: types.SPINNER_ON,
    }
}

export function spinnerOff() {
    return {
    type: types.SPINNER_OFF,
    }
}