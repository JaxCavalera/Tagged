//  ip and the Promise modules used for Async Promises
import {history} from '../index.jsx';
import Promise from 'bluebird';
import crypto from 'crypto';
import * as constvars from '../constvars.jsx';
const dbServer = constvars.DBSERVER_VAR;

export const REG_ATTEMPT = 'REG_ATTEMPT';

//  =============  Async Action Creators  =============

//  =====  LOGIN ASYNC ACTION CREATOR  =====
export const loginBtnActionCreator = () => {
    return (dispatch, getState) => {
        const {heading} = getState();

        //  Define init (details) for fetch request
        const loginInit = {
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
        return fetch(dbServer + '/login', loginInit)
        .then((response) => {
            response.json()

            //  json() is a prototype function of fetch responses
            //  it converts the response and then returns the json object
            //  which we are passing down the promise chain
            .then((jsonValue) => {
                dispatch({
                    type: LOGIN_ATTEMPT,
                    logStatus: jsonValue.logResult,// fail, success
                    sessionStatus: jsonValue.sessionStatus,
                    prevRegAttempt: '',
                    currentUser: jsonValue.currentUser,
                });
                history.replaceState(null, '/secure');
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
