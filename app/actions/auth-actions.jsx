//  ip and the Promise modules used for Async Promises
import Promise from 'bluebird';
import crypto from 'crypto';
import * as constvars from '../constvars.jsx';
const dbServer = constvars.DBSERVER_VAR;

export const REG_ATTEMPT = 'REG_ATTEMPT';
export const LOG_ATTEMPT = 'LOG_ATTEMPT';
export const UNAME_INPUT_EVENT = 'UNAME_INPUT_EVENT';
export const PWORD_INPUT_EVENT = 'PWORD_INPUT_EVENT';
export const SESSION_STATUS = 'SESSION_STATUS';

//  =============  Async Action Creators  =============
//  Based off https://github.com/happypoulp/redux-tutorial/blob/master/09_dispatch-async-action-2.js#L24

//  =====  REGISTER ASYNC ACTION CREATOR  =====
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
            credentials: 'include',
        };

        //  fetch(URL & PORT + Server-side Route, Init Details)
        return fetch(dbServer + '/register', regInit)
        .then((response) => {
            response.json().then((data) => {
                return dispatch({
                    type: REG_ATTEMPT,
                    prevRegAttempt: heading.unameValue,
                    logStatus: data.regResult,
                    sessionStatus: data.sessionStatus,
                    currentUser: data.currentUser,
                });
            });

        });
    };
};

//  =====  LOGIN ASYNC ACTION CREATOR  =====
export const logBtnActionCreator = () => {
    return (dispatch, getState) => {
        const {heading} = getState();

        //  Define init (details) for fetch request
        const logInit = {
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                username: heading.unameValue,
                password: crypto.createHmac('sha1', heading.pwordValue).update(heading.pwordValue).digest('hex'),
            }),
            credentials: 'include',
        };
        return fetch(dbServer + '/login', logInit)
        .then((response) => {
            response.json().then((data) => {
                return dispatch({
                    type: LOG_ATTEMPT,
                    logStatus: data.logResult,// fail, success
                    sessionStatus: data.sessionStatus,
                    prevRegAttempt: '',
                    currentUser: data.currentUser,
                },
            );
            });
        });
    };
};

//  =====  SESSION STATUS ASYNC ACTION CREATOR  =====
export const sessionStatusActionCreator = () => {
    return (dispatch, getState) => {
        const {heading} = getState();

        //  Define init (details) for fetch request
        const sessionInit = {
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            credentials: 'include',
        };
        return fetch(dbServer + '/sessionStatus', sessionInit)
        .then((response) => {
            response.json().then((data) => {
                return dispatch({
                    type: SESSION_STATUS,
                    sessionStatus: data.sessionStatus,// active or none
                    currentUser: data.currentUser,
                });
            });

        });
    };
};

//  ================  Action Creators  ================
export const unameInputActionCreator = (text) => {
    return {
        type: UNAME_INPUT_EVENT,
        unameValue: text,
    };
};

export const pwordInputActionCreator = (text) => {
    return {
        type: PWORD_INPUT_EVENT,
        pwordValue: text,
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
