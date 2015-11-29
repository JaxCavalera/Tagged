import {
    REG_ATTEMPT,
    LOG_ATTEMPT,
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
        case LOG_ATTEMPT:
            return {
                    ...currentState,
                    logStatus: action.logStatus,
                    prevRegAttempt: action.prevRegAttempt,
                    sessionStatus: action.sessionStatus,
                    currentUser: action.currentUser,
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

        // case UPDATE_PATH:
        //     return {
        //             ...currentState,
        //
        //             //  empty (default behavior only for now)
        //         };
        //     break;
        case SESSION_STATUS:
            return {
                    ...currentState,
                    sessionStatus: action.sessionStatus,
                };
            break;
        default:
            return currentState;
    }
};
