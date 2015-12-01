import {
    REG_ATTEMPT,
    LOGIN_ATTEMPT,
    LOGOUT_ATTEMPT,
    UNAME_INPUT_EVENT,
    PWORD_INPUT_EVENT,
    SESSION_STATUS,
} from '../actions/auth-actions.jsx';

// import {UPDATE_PATH} from 'redux-simple-router';

export const authReducers = (
    currentState = {
        unameValue: 'Username',
        pwordValue: '',
        logStatus: '',
        prevRegAttempt: '',
        currentUser: '',
        sessionStatus: '',
    }, action
) => {
    switch (action.type) {
        case REG_ATTEMPT:
            return {
                    ...currentState,
                    prevRegAttempt: action.prevRegAttempt,
                    logStatus: action.logStatus,
                    sessionStatus: action.sessionStatus,
                    currentUser: action.currentUser,
                };
            break;
        case LOGIN_ATTEMPT:
            return {
                    ...currentState,
                    logStatus: action.logStatus,
                    prevRegAttempt: action.prevRegAttempt,
                    sessionStatus: action.sessionStatus,
                    currentUser: action.currentUser,
                };
            break;
        case LOGOUT_ATTEMPT:
            return {
                    ...currentState,
                    sessionStatus: action.sessionStatus,
                    currentUser: action.currentUser,
                    logStatus: '',
                    unameValue: 'Username',
                    pwordValue: '',
                };
            break;
        case UNAME_INPUT_EVENT:
            return {
                    ...currentState,
                    unameValue: action.unameValue,
                    logStatus: '',
                };
            break;
        case PWORD_INPUT_EVENT:
            return {
                    ...currentState,
                    pwordValue: action.pwordValue,
                    logStatus: '',
                };
            break;
        case SESSION_STATUS:
            return {
                    ...currentState,
                    sessionStatus: action.sessionStatus,
                    currentUser: action.currentUser,
                };
            break;
        default:
            return currentState;
    }
};
