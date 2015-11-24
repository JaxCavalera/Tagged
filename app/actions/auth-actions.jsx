//  ip and the Promise modules used for Async Promises
import Promise from 'bluebird';
import crypto from 'crypto';
import * as constvars from '../constvars.jsx';
const dbServer = constvars.DBSERVER_VAR;

//  Async Action Creator
// export const regBtnAsyncActionCreator = (text) => {
//     return ((dispatch) => {
//         setTimeout(function() {
//                dispatch({
//                  type: 'REG_BTN_CLICK',
//                  message: text,
//              });
//            }, 2000);
//         console.log('this is not used normally', text);
//     });
// };
//  Based off https://github.com/happypoulp/redux-tutorial/blob/master/09_dispatch-async-action-2.js#L24
//
export const AUTH_ATTEMPT = 'AUTH_ATTEMPT';
export const UNAME_INPUT_EVENT = 'UNAME_INPUT_EVENT';
export const PWORD_INPUT_EVENT = 'PWORD_INPUT_EVENT';

//  =============  Async Action Creator  =============
export const regBtnActionCreator = () => {
    return (dispatch, getState) => {
        //  Destructuring treats the function/object as a source
        //  It works on a similar principle to the "import" statement
        const {heading} = getState();// <--- Destructuring

        //  Define init (details) for fetch request
        const regInit = {
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                username: heading.unameValue,
                password: crypto.createHmac('sha1', heading.pwordValue).update(heading.pwordValue).digest('hex'),
            }),
            mode: 'no-cors',
        };
        return fetch(dbServer + '/register', regInit)
        .then((data) => {
            dispatch({
                type: AUTH_ATTEMPT,
                status: data,// fail, success
            });
            console.log(data);
        });
    };
};

//  ================  Action Creators  ================
export const unameInputActionCreator = (text) => {
    return {
        type: UNAME_INPUT_EVENT,
        value: text,
    };
};

export const pwordInputActionCreator = (text) => {
    return {
        type: PWORD_INPUT_EVENT,
        value: text,
    };
};

// {
//     type: SAMPLE,
//     //optionals
//     error: "the error",
//     payload: "the payload",
//     meta: "some meta information"
// }
//  https://github.com/acdlite/flux-standard-action#actions
